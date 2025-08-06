import React from "react";
import { DashLine } from "./DashLine";

interface StepIndicatorProps {
  stepNumber: number;
  totalSteps: number;
  className?: string;
}

export function StepIndicator({
  stepNumber,
  totalSteps,
  className,
}: StepIndicatorProps) {
  // 1-based stepNumber
  return (
    <div className={`flex items-center justify-center mb-10 ${className}`}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const isActive = i < stepNumber;
        const isLast = i === totalSteps - 1;
        return (
          <React.Fragment key={i}>
            <div
              className={`flex items-center justify-center rounded-full font-C01-M transition-all select-none
                ${
                  isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-white"
                }
                `}
              style={{ width: 26, height: 26 }}
            >
              {i + 1}
            </div>

            {!isLast && (
              <div
                className="mx-2 flex items-center"
                style={{ minWidth: 39, maxWidth: 39 }}
              >
                <DashLine color={i < stepNumber - 1 ? "#256AFF" : "#DDDEE0"} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
