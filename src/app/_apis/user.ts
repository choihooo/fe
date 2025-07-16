import axiosInstance from "./axiosInstance";
import {
  AgreementRequest,
  AgreementResponse,
  OnboardingRequest,
  OnboardingResponse,
} from "./schemas";

/**
 * 이용 약관 동의 API
 */
export async function agreeToTerms(
  body: AgreementRequest
): Promise<AgreementResponse> {
  const res = await axiosInstance.post<AgreementResponse>(
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
  const res = await axiosInstance.post<OnboardingResponse>(
    "/v1/user/onboarding",
    body
  );
  return res.data;
}
