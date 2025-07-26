import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { authKeys } from "./queries/useAuth";

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
 * React Query를 사용하는 인증 훅
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
  }, []);

  return { isLoggedIn, profile };
}
