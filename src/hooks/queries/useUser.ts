import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { agreeToTerms, onboardUser, getUserMe } from "@/app/_apis/user";
import { AgreementRequest, OnboardingRequest } from "@/app/_apis/schemas";
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
    onSuccess: (data) => {
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
  return useSuspenseQuery({
    queryKey: userKeys.me(),
    queryFn: getUserMe,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}
