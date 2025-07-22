import React from "react";
import Image from "next/image";
import DarkIconChevronRight from "../../../../public/icons/DarkIconChevronRight";

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
  return (
    <button
      onClick={onClick}
      className={`mx-2 flex justify-between w-[471px] cursor-pointer ${className}`}
      {...props}
    >
      <div className="flex">
        <div>
          <Image src={imageSrc} width={58} height={58} alt="프로필 사진" />
        </div>
        <div className="my-[3px] ml-[18px] text-start">
          <div className="font-T04-SB text-gray-900">{name}</div>
          <div className="font-B02-R text-gray-300">{email}</div>
        </div>
      </div>
      <div className="my-[14px]">
        <DarkIconChevronRight />
      </div>
    </button>
  );
}

export default UserProfilePresentor;
