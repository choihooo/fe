import {
  useMutation,
  useQueryClient,
  useQuery,
} from "@tanstack/react-query";
import { agreeToTerms, onboardUser, getUserMe, updateUserProfile } from "@/app/_apis/user";
import { AgreementRequest, OnboardingRequest, UpdateProfileRequest } from "@/app/_apis/schemas";
import { authKeys } from "./useAuth";

export const userKeys = {
  all: ["user"] as const,
  agreement: () => [...userKeys.all, "agreement"] as const,
  onboarding: () => [...userKeys.all, "onboarding"] as const,
  me: () => [...userKeys.all, "me"] as const,
};

/**
 * 이용 약관 동의 뮤테이션 훅
 */
export function useAgreeToTerms() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AgreementRequest) => agreeToTerms(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.agreement() });
      queryClient.invalidateQueries({ queryKey: authKeys.user() });
    },
    onError: (error) => {
      console.error("약관 동의 실패:", error);
    },
  });
}

/**
 * 사용자 온보딩 뮤테이션 훅
 */
export function useOnboardUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: OnboardingRequest) => onboardUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.onboarding() });
      queryClient.invalidateQueries({ queryKey: authKeys.user() });
    },
    onError: (error) => {
      console.error("온보딩 실패:", error);
    },
  });
}

/**
 * 사용자 마이페이지 조회 쿼리 훅
 */
export function useUserMe() {
  return useQuery({
    queryKey: userKeys.me(),
    queryFn: getUserMe,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: false, // 재시도 비활성화
  });
}

/**
 * 사용자 프로필 업데이트 뮤테이션 훅
 */
export function useUpdateUserProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateProfileRequest) => updateUserProfile(data),
    onSuccess: () => {
      // 프로필 업데이트 후 사용자 정보 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: userKeys.me() });
    },
    onError: (error) => {
      console.error("프로필 업데이트 실패:", error);
    },
  });
}
