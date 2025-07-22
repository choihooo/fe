export interface OnboardingRequest {
  role: string[];
  purpose: string;
  purposeEtc?: string;
  channel: string;
  channelEtc?: string;
}

export interface OnboardingResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: string;
}

export interface AgreementRequest {
  isServiceAgreement: boolean;
  isUserInfoAgreement: boolean;
  isMarketingAgreement: boolean;
}

export interface AgreementResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: string;
}

export interface UserProfile {
  name: string;
  email: string;
  profileImage: string;
}

export interface UserMeResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: UserProfile;
}
