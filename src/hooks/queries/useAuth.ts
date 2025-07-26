import { useMutation, useQueryClient } from "@tanstack/react-query";
import { exchangeCodeForToken, logout } from "@/app/_apis/auth";
import { ExchangeResult } from "@/app/_apis/schemas";

export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
  token: () => [...authKeys.all, "token"] as const,
};

/**
 * 코드를 토큰으로 교환하는 뮤테이션 훅
 */
export function useExchangeCodeForToken() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: exchangeCodeForToken,
    onSuccess: (data: ExchangeResult) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        if (data.name) {
          localStorage.setItem("name", data.name);
        }
        if (data.profileImage) {
          localStorage.setItem("profileImage", data.profileImage);
        }
      }

      queryClient.invalidateQueries({ queryKey: authKeys.user() });
      queryClient.invalidateQueries({ queryKey: authKeys.token() });
    },
    onError: (error) => {
      console.error("토큰 교환 실패:", error);
    },
  });
}

/**
 * 로그아웃 뮤테이션 훅
 */
export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("name");
        localStorage.removeItem("profileImage");
      }

      queryClient.clear();
    },
    onError: (error) => {
      console.error("로그아웃 실패:", error);

      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("name");
        localStorage.removeItem("profileImage");
      }
      queryClient.clear();
    },
  });
}
