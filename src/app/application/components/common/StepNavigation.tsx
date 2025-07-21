import React from "react";
import GrayButton from "@/components/common/GrayButton";

type StepNavigationProps = {
  onNext: () => void;
  onPrev?: () => void;
  disabled?: boolean;
  nextButtonText?: string;
};

export function StepNavigation({ 
  onNext, 
  onPrev, 
  disabled = false,
  nextButtonText = "다음"
}: StepNavigationProps) {
  return (
    <div className="flex w-full justify-end mt-8">
      {onPrev && (
        <GrayButton
          label="이전"
          className="w-[88px] mr-[15px]"
          onClick={onPrev}
        />
      )}
      <button
        className={`px-6 py-2 rounded-lg font-semibold shadow ${
          disabled 
            ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={onNext}
        disabled={disabled}
      >
        {nextButtonText}
      </button>
    </div>
  );
} 