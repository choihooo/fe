import React from "react";
import { NextButton, CompleteButton } from "@/components/common/ButtonBase";
import GrayButton from "@/components/common/GrayButton";

type StepNavigationProps = {
  onNext: () => void;
  onPrev?: () => void;
  disabled?: boolean;
  isLastStep?: boolean;
  nextButtonText?: string;
};

export function StepNavigation({ 
  onNext, 
  onPrev, 
  disabled = false, 
  isLastStep = false,
  nextButtonText
}: StepNavigationProps) {
  const ButtonComponent = isLastStep ? CompleteButton : NextButton;
  
  return (
    <div className="flex w-full justify-end">
      {onPrev && (
        <GrayButton
          label="이전"
          className="w-[88px] mr-[15px]"
          onClick={onPrev}
        />
      )}
      <ButtonComponent
        className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow"
        onClick={onNext}
        disabled={disabled}
      >
        {nextButtonText || (isLastStep ? "완료" : "다음")}
      </ButtonComponent>
    </div>
  );
} 