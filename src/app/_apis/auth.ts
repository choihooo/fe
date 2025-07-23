import { authAxiosInstance, publicAxiosInstance } from "./axiosInstance";
import { ExchangeResponse, ExchangeResult, LogoutResponse } from "./schemas";

export async function exchangeCodeForToken(
  code: string
): Promise<ExchangeResult> {
  const res = await publicAxiosInstance.get<ExchangeResponse>(
    "/v1/auth/exchange",
    { params: { code } }
  );

  const data = res.data;

  if (!data.isSuccess) {
    throw new Error(data.message || "코드 교환에 실패했습니다.");
  }

  return data.result;
}

/**
 * 로그아웃 API 호출
 */
export async function logout(): Promise<LogoutResponse> {
  const res = await authAxiosInstance.post<LogoutResponse>("/v1/auth/logout");
  return res.data;
}
