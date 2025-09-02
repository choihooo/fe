import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { exchangeCodeForToken, logout } from "@/app/_apis/auth";
import { ExchangeResult } from "@/app/_apis/schemas";

export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
  token: () => [...authKeys.all, "token"] as const,
};

/**
 * 인증 상태를 확인하는 함수
 */
async function checkAuthStatus() {
  if (typeof window === "undefined") {
    return { isLoggedIn: false, profile: null };
  }

  const accessToken = localStorage.getItem("accessToken");
  const name = localStorage.getItem("name");
  const profileImage = localStorage.getItem("profileImage");

  const isLoggedIn = !!accessToken;
  const profile = isLoggedIn
    ? {
        name: name || "사용자",
        profileImage: profileImage || "/default-profile.png",
      }
    : null;

  return { isLoggedIn, profile };
}

/**
 * React Query를 사용하는 인증 상태 훅
 */
export function useAuthQuery() {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: checkAuthStatus,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

/**
 * 기존 useAuth 훅 (하위 호환성을 위해 유지)
 */
export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<{
    name?: string;
    profileImage?: string;
  } | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window === "undefined") return;
      const accessToken = localStorage.getItem("accessToken");
      const name = localStorage.getItem("name");
      const profileImage = localStorage.getItem("profileImage");

      setIsLoggedIn(!!accessToken);
      if (accessToken) {
        setProfile({
          name: name || "사용자",
          profileImage: profileImage || "/default-profile.png",
        });
      } else {
        setProfile(null);
      }
    };

    // 초기 체크
    checkAuth();

    // localStorage 변경 감지
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "accessToken" || e.key === "name" || e.key === "profileImage") {
        checkAuth();
      }
    };

    // 다른 탭에서의 변경 감지
    window.addEventListener("storage", handleStorageChange);

    // 현재 탭에서의 변경 감지 (custom event)
    const handleCustomStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("localStorageChange", handleCustomStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("localStorageChange", handleCustomStorageChange);
    };
  }, []);

  return { isLoggedIn, profile };
}

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
        // 모든 인증 관련 데이터 정리
        localStorage.clear();
        console.log("✅ 로그아웃 성공: localStorage 정리 완료");
      }

      // 모든 쿼리 데이터 정리
      queryClient.clear();
      console.log("✅ 로그아웃 성공: 쿼리 데이터 정리 완료");
    },
    onError: (error) => {
      console.error("❌ 로그아웃 API 실패:", error);

      if (typeof window !== "undefined") {
        // API 실패 시에도 모든 인증 관련 데이터 정리
        localStorage.clear();
        console.log("🔄 로그아웃 실패 시에도 localStorage 정리 완료");
      }

      // 모든 쿼리 데이터 정리
      queryClient.clear();
      console.log("🔄 로그아웃 실패 시에도 쿼리 데이터 정리 완료");
    },
  });
}
