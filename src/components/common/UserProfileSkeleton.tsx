import React from "react";

interface UserProfileSkeletonProps {
  className?: string;
}

function UserProfileSkeleton({ className = "" }: UserProfileSkeletonProps) {
  return (
    <div className={`mx-2 flex justify-between w-[471px] ${className}`}>
      <div className="flex">
        <div className="w-[58px] h-[58px] bg-gray-200 rounded-full animate-pulse" />
        <div className="my-[3px] ml-[18px] text-start">
          <div className="w-20 h-4 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="w-32 h-3 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="my-[14px]">
        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}

export default UserProfileSkeleton; 