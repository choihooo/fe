import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const CONTENT_TYPE_JSON = "application/json";
const LOGIN_PATH = "/login";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

type FailedQueueItem = {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
  },
});

export const publicAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
  },
});

let isRefreshing = false;
let failedQueue: FailedQueueItem[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token!);
  });
  failedQueue = [];
};

function handleLogoutAndRedirect() {
  if (typeof window !== "undefined") {
    localStorage.clear();
    window.location.href = LOGIN_PATH;
  }
}

axiosInstance.interceptors.request.use(
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

axiosInstance.interceptors.response.use(
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
        return new Promise<string>(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers = originalRequest.headers || {};
            originalRequest.headers.Authorization = "Bearer " + token;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        const res = await axios.post(
          BASE_URL + "/v1/auth/refresh-token",
          { refreshToken },
          {
            headers: { "Content-Type": CONTENT_TYPE_JSON },
            withCredentials: true,
          }
        );
        const { accessToken, refreshToken: newRefreshToken } = res.data.result;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);
        processQueue(null, accessToken);
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = "Bearer " + accessToken;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        handleLogoutAndRedirect();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
