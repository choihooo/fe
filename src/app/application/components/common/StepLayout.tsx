import React from "react";
import { StepIndicator } from "./StepIndicator";
import { useIsMobile } from "@/hooks/useIsMobile";

type StepLayoutProps = {
  stepNumber?: number;
  totalSteps?: number;
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
};

export function StepLayout({
  stepNumber,
  totalSteps,
  title,
  subtitle,
  children,
}: StepLayoutProps) {
  const isMobile = useIsMobile();
  return (
    <div
      className={`${
        isMobile ? "flex flex-col justify-center items-center px-5" : ""
      }`}
    >
      {stepNumber && totalSteps && (
        <StepIndicator
          className={`${isMobile ? "mt-10 mb-[110px]" : ""}`}
          stepNumber={stepNumber}
          totalSteps={totalSteps}
        />
      )}
      <div
        className={`bg-white rounded-[20px] shadow-2 sm:p-[36px] p-[20px] ${
          isMobile ? "w-full  " : "w-[554px]"
        } mx-auto flex flex-col gap-[36px] items-center`}
      >
        {children}
        <div className="w-full">
          <div
            className={`text-gray-950 mb-4 self-start ${
              isMobile ? "font-B01-SB" : "font-T01-SB"
            }`}
          >
            {title}
          </div>

          <div
            className={`text-gray-700 self-start ${
              isMobile ? "font-C01-R" : "font-B01-R"
            }`}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
