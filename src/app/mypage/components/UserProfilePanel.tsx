import React from "react";
import Link from "next/link";
import DivisionLine from "./DivisionLine";
import { SettingsLinkItem } from "./SettingItem";
import UserProfileContainer from "./UserProfileContainer";
import LogoutIcon from "../../../../public/icons/LogoutIcon";
import GrayIconChevronRight from "../../../../public/icons/GrayIconChevronRight";
import CornerIcon from "../../../../public/icons/CornerIcon";

function UserProfilePanel() {
  const handleInquiry = () => {
    window.open("https://forms.gle/cSKrGxDtF3aYAnv56", "_blank");
  };

  const handlePrivacyPolicy = () => {
    window.open("https://soosanghanprivacy.notion.site/?pvs=143", "_blank");
  };

  const handleTermsOfService = () => {
    window.open("https://soosanghantermsofuse.notion.site/?source=copy_link", "_blank");
  };

  return (
    <div className="bg-white px-[42px] py-[54px] w-[571px] rounded-[20px]">
      <UserProfileContainer />
      <DivisionLine marginTop={28} marginBottom={24} />
      <SettingsLinkItem
        label={<div className="font-B01-M text-gray-950 pl-1">문의사항</div>}
        rightContent={<CornerIcon />}
        onClick={handleInquiry}
      />
      <SettingsLinkItem
        label={
          <div className="font-B01-M text-gray-950 pl-1">개인정보 처리방침</div>
        }
        rightContent={<CornerIcon />}
        onClick={handlePrivacyPolicy}
      />
      <SettingsLinkItem
        label={
          <div className="font-B01-M text-gray-950 pl-1">서비스 이용약관</div>
        }
        rightContent={<CornerIcon />}
        onClick={handleTermsOfService}
      />
      <SettingsLinkItem
        label={<div className="font-B01-M text-gray-950 pl-1">버전 정보</div>}
        rightContent={<div className="font-B02-R text-gray-300">v 0.0.1</div>}
        clickable={false}
      />
      <DivisionLine marginTop={20} marginBottom={20} />
      <SettingsLinkItem
        label={<div className="font-B01-M text-gray-950 pl-1">로그아웃</div>}
        rightContent={<LogoutIcon />}
      />
      <Link href="/mypage/withdraw" className="cursor-pointer">
        <SettingsLinkItem
          label={
            <div className="font-B01-M text-gray-500 pl-1">서비스 탈퇴하기</div>
          }
          rightContent={<GrayIconChevronRight />}
        />
      </Link>
    </div>
  );
}

export default UserProfilePanel;
