"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useUserMe } from "@/hooks/queries/useUser";
import UserProfilePresentor from "./UserProfilePresentor";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import UserProfileSkeleton from "@/components/common/UserProfileSkeleton";

interface UserProfileContainerProps {
  className?: string;
}

// 실제 데이터를 가져오는 컴포넌트
function UserProfileData({ className }: { className: string }) {
  const router = useRouter();
  const { data: userData } = useUserMe();

  const handleProfileClick = () => {
    router.push("/mypage/edit");
  };

  // 데이터가 있을 때
  if (userData?.result) {
    return (
      <UserProfilePresentor
        name={userData.result.name}
        email={userData.result.email}
        imageSrc={userData.result.profileImage}
        onClick={handleProfileClick}
        className={className}
      />
    );
  }

  // 기본값 (데이터가 없을 때)
  return (
    <UserProfilePresentor
      name="사용자"
      email="사용자 정보 없음"
      imageSrc="/profile.png"
      onClick={handleProfileClick}
      className={className}
    />
  );
}

// 에러 발생 시 표시할 컴포넌트
function UserProfileError() {
  return (
    <div className="mx-2 flex justify-between w-[471px]">
      <div className="flex">
        <div className="w-[58px] h-[58px] bg-gray-200 rounded-full" />
        <div className="my-[3px] ml-[18px] text-start">
          <div className="font-T04-SB text-gray-900">서버 연결 오류</div>
          <div className="font-B02-R text-gray-300">잠시 후 다시 시도해주세요</div>
        </div>
      </div>
    </div>
  );
}

function UserProfileContainer({ className = "" }: UserProfileContainerProps) {
  return (
    <ErrorBoundary fallback={<UserProfileError />}>
      <Suspense fallback={<UserProfileSkeleton className={className} />}>
        <UserProfileData className={className} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default UserProfileContainer;
