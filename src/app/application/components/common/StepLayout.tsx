import React from "react";
import { StepIndicator } from "./StepIndicator";

type StepLayoutProps = {
  stepNumber?: number;
  totalSteps?: number;
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  width?: string;
};

export function StepLayout({
  stepNumber,
  totalSteps,
  title,
  subtitle,
  children,
  width = "w-[554px]",
}: StepLayoutProps) {
  return (
    <div>
      {stepNumber && totalSteps && (
        <StepIndicator stepNumber={stepNumber} totalSteps={totalSteps} />
      )}
      <div
        className={`bg-white rounded-[20px] shadow-lg p-[36px] ${width} mx-auto flex flex-col gap-[36px] items-center`}
      >
        {children}
        <div className="w-full">
          <div className="text-gray-950 mb-4 self-start font-T01-SB">
            {title}
          </div>

          <div className="text-gray-700 self-start font-B01-R ">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
