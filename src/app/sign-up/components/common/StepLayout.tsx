import React from "react";

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
  return (
    <div
      className={`bg-white rounded-[20px] shadow px-[40px] py-[52px] ${width} mx-auto flex flex-col items-center`}
    >
      <div className="text-gray-900 mb-[38px] self-start font-T01-SB">
        {title}
      </div>
      {children}
    </div>
  );
}
