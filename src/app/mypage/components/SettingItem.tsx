import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
interface SettingsLinkItemProps {
  label: React.ReactNode;
  rightContent?: React.ReactNode;
  onClick?: () => void;
  clickable?: boolean;
}

export function SettingsLinkItem({
  label,
  rightContent,
  onClick,
  clickable = true,
}: SettingsLinkItemProps) {
  const Wrapper = clickable ? "button" : "div";
  const isMobile = useIsMobile();
  return (
    <Wrapper
      onClick={clickable ? onClick : undefined}
      className={`flex justify-between items-center w-full ${
        isMobile ? "py-[12px] px-[8px]" : "py-[13px] px-2"
      }  rounded-[10px]  ${
        clickable ? "cursor-pointer hover:bg-gray-50" : "cursor-default"
      }`}
    >
      <div>{label}</div>
      <div>{rightContent}</div>
    </Wrapper>
  );
}
