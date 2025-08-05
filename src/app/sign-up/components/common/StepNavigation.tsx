import React from "react";
import { NextButton, CompleteButton } from "@/components/common/ButtonBase";
import GrayButton from "@/components/common/GrayButton";
import { useIsMobile } from "@/hooks/useIsMobile";

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
  nextButtonText,
}: StepNavigationProps) {
  const ButtonComponent = isLastStep ? CompleteButton : NextButton;
  const isMobile = useIsMobile();
  const GraybuttonClass = isMobile ? "flex-1 mr-[12px]" : "w-[88px] mr-[15px]";
  const NextbuttonClass = isMobile ? "flex-1 !px-0" : "";
  return (
    <div
      className={`flex w-full h-full justify-end ${
        isMobile ? "items-end" : "items-start"
      }`}
    >
      {onPrev && (
        <GrayButton label="이전" className={GraybuttonClass} onClick={onPrev} />
      )}
      <ButtonComponent
        className={NextbuttonClass}
        onClick={onNext}
        disabled={disabled}
      >
        {nextButtonText || (isLastStep ? "완료" : "다음")}
      </ButtonComponent>
    </div>
  );
}
