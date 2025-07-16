export interface ExchangeResult {
  accessToken: string;
  refreshToken: string;
  userId: number;
  name: string;
  email: string;
  isSignUp: boolean;
  isOnboarded: boolean;
  profileImage: string;
  socialLogin: string;
}

export interface ExchangeResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: ExchangeResult;
}

export interface LogoutResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: string;
}
