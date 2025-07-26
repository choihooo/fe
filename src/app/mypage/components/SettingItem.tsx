import React from "react";

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

  return (
    <Wrapper
      onClick={clickable ? onClick : undefined}
      className={`flex justify-between items-center w-full py-[13px] px-2 rounded-[10px]  ${
        clickable ? "cursor-pointer hover:bg-gray-50" : "cursor-default"
      }`}
    >
      <div>{label}</div>
      <div>{rightContent}</div>
    </Wrapper>
  );
}
