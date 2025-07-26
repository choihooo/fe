import { authAxiosInstance } from "./axiosInstance";
import {
  AgreementRequest,
  AgreementResponse,
  OnboardingRequest,
  OnboardingResponse,
  UserMeResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  WithdrawalRequest,
  WithdrawalResponse,
  WithdrawalReason,
} from "./schemas";

/**
 * 이용 약관 동의 API
 */
export async function agreeToTerms(
  body: AgreementRequest
): Promise<AgreementResponse> {
  const res = await authAxiosInstance.post<AgreementResponse>(
    "/v1/user/agreement",
    body
  );
  return res.data;
}

/**
 * 사용자 온보딩 API
 */
export async function onboardUser(
  body: OnboardingRequest
): Promise<OnboardingResponse> {
  const res = await authAxiosInstance.post<OnboardingResponse>(
    "/v1/user/onboarding",
    body
  );
  return res.data;
}

/**
 * 사용자 마이페이지 조회 API
 */
export async function getUserMe(): Promise<UserMeResponse> {
  const res = await authAxiosInstance.get<UserMeResponse>("/v1/user/me");
  return res.data;
}

/**
 * 사용자 프로필 업데이트 API
 */
export async function updateUserProfile(
  body: UpdateProfileRequest
): Promise<UpdateProfileResponse> {
  const res = await authAxiosInstance.patch<UpdateProfileResponse>(
    "/v1/user/me",
    body
  );
  return res.data;
}

/**
 * 사용자 탈퇴 API
 */
export async function withdrawUser(
  body: WithdrawalRequest
): Promise<WithdrawalResponse> {
  const res = await authAxiosInstance.delete<WithdrawalResponse>(
    "/v1/user/me/withdrawal",
    { data: body }
  );
  return res.data;
}

export { WithdrawalReason };
