import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type StepLayoutProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  width?: string;
};

export function StepLayout({
  title,
  children,
  width = "w-[494px]",
}: StepLayoutProps) {
  const isMobile = useIsMobile(); // 모바일 여부 판별

  const containerClass = isMobile
    ? "bg-white w-full mx-auto flex flex-col items-center py-[50px] px-[20px]"
    : `bg-white rounded-[20px] shadow px-[40px] py-[52px] ${width} mx-auto flex flex-col items-center`;

  const titleClass = isMobile
    ? "text-gray-900 mb-[40px] self-start font-T03-SB"
    : "text-gray-900 mb-[38px] self-start font-T01-SB";

  return (
    <div className={containerClass}>
      <div className={titleClass}>{title}</div>
      {children}
    </div>
  );
}
