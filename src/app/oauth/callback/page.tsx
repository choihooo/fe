"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/common/Loading";

export default function OAuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      router.replace("/home");
    } else {
      alert("로그인에 실패했습니다.");
      router.replace("/login");
    }
  }, [router, searchParams]);

  return (
    <div>
      로그인 처리 중입니다...
      <Loading />
    </div>
  );
}
