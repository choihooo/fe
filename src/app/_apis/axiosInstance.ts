import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const CONTENT_TYPE_JSON = "application/json";
const LOGIN_PATH = "/login";

// 🔒 인터셉터에서 재요청 방지용
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

// 🔄 재시도 큐 구조
type FailedQueueItem = {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
};

// ✅ 공개용 Axios 인스턴스
export const publicAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
  },
});

// ✅ 인증용 Axios 인스턴스
export const authAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
  },
});

// 상태 변수
let isRefreshing = false;
let failedQueue: FailedQueueItem[] = [];

// 🔁 재시도 큐 처리
const processQueue = (error: unknown, token?: string) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else if (token) resolve(token);
  });
  failedQueue = [];
};

// 🚪 로그아웃 처리 및 리디렉션
const handleLogoutAndRedirect = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
    window.location.href = LOGIN_PATH;
  }
};

// ✅ 인증 요청 전 토큰 삽입
authAxiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ 인증 응답 후 토큰 만료시 자동 리프레시 처리
authAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest: CustomAxiosRequestConfig = error.config;
    const isUnauthorized = error.response?.status === 401;
    const isNotRetried = !originalRequest._retry;

    if (isUnauthorized && isNotRetried) {
      originalRequest._retry = true;

      if (typeof window === "undefined") return Promise.reject(error);

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        handleLogoutAndRedirect();
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers = originalRequest.headers || {};
            originalRequest.headers.Authorization = "Bearer " + token;
            return authAxiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        const res = await publicAxiosInstance.post("/v1/auth/refresh-token", {
          refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = res.data.result;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        processQueue(null, accessToken);

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = "Bearer " + accessToken;

        return authAxiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);
        handleLogoutAndRedirect();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
