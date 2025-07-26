export interface OnboardingRequest {
  name: string; 
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

export interface UpdateProfileRequest {
  name: string;
}

export interface UpdateProfileResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: UserProfile;
}

// 탈퇴 이유 ENUM
export enum WithdrawalReason {
  LOW_EFFECT = "LOW_EFFECT",
  USABILITY = "USABILITY",
  OTHER_SERVICE = "OTHER_SERVICE",
  NO_CONTEST = "NO_CONTEST",
  UNKNOWN = "UNKNOWN",
  SECURITY = "SECURITY",
  ETC = "ETC",
}

export interface WithdrawalRequest {
  withdrawalReasons: WithdrawalReason[];
  etc?: string;
}

export interface WithdrawalResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: string;
}
