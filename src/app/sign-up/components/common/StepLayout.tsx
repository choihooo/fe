import React from "react";

type StepLayoutProps = {
  stepNumber: number;
  totalSteps: number;
  title: React.ReactNode;
  children: React.ReactNode;
  width?: string;
};

export function StepLayout({ 
  stepNumber, 
  totalSteps, 
  title, 
  children, 
  width = "w-[494px]" 
}: StepLayoutProps) {
  return (
    <div className={`bg-white rounded-[20px] shadow px-[44px] py-[40px] ${width} mx-auto flex flex-col items-center`}>
      <div className="font-T03-SB text-gray-300 self-start mb-[29px]">
        {stepNumber}/{totalSteps}
      </div>
      <div className="text-gray-900 mb-[38px] self-start font-T01-SB">
        {title}
      </div>
      {children}
    </div>
  );
} 