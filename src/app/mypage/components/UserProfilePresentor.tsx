import React from "react";
import Image from "next/image";
import DarkIconChevronRight from "../../../../public/icons/DarkIconChevronRight";
import { useIsMobile } from "@/hooks/useIsMobile";
interface UserProfileProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  email: string;
  imageSrc?: string;
}

function UserProfilePresentor({
  name,
  email,
  imageSrc = "/next.svg",
  onClick,
  className = "",
  ...props
}: UserProfileProps) {
  const isMobile = useIsMobile();
  return (
    <button
      onClick={onClick}
      className={`mx-2 flex justify-between ${isMobile ? "w-full" : "w-[471px]"} cursor-pointer ${className}`}
      {...props}
    >
      <div className="flex">
        <div>
          <Image
            src={imageSrc}
            width={58}
            height={58}
            alt="프로필 사진"
            className="rounded-full"
          />
        </div>
        <div className="my-[3px] ml-[18px] text-start">
          <div className={`${isMobile ? "font-B01-SB" : "font-T04-SB"} text-gray-900`}>{name}</div>
          <div className={`${isMobile ? "font-B02-R" : "font-B02-R"} text-gray-300`}>{email}</div>
        </div>
      </div>
      <div className={`my-[14px] ${isMobile ? "mr-[10px]" : ""}`}>
        <DarkIconChevronRight />
      </div>
    </button>
  );
}

export default UserProfilePresentor;
