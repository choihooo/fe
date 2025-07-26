import React from "react";
import { useRouter } from "next/navigation";

interface ProfileDropdownProps {
  dropdownRef: React.RefObject<HTMLDivElement>;
  onLogout: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  dropdownRef,
  onLogout,
}) => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push("/mypage");
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-[39px] w-[172px] h-[98px] bg-white rounded-[16px] z-50"
    >
      <button
        className="h-[49px] w-full text-left px-4 font-C01-R rounded-t-[16px] hover:font-B03-M hover:bg-gray-100 cursor-pointer"
        onClick={handleProfileClick}
      >
        프로필 정보
      </button>
      <button
        className="h-[49px] w-full text-left px-4 font-C01-R rounded-b-[16px] hover:font-B03-M hover:bg-gray-100 cursor-pointer"
        onClick={onLogout}
      >
        로그아웃
      </button>
    </div>
  );
};

export default ProfileDropdown;
