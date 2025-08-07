import React from "react";
import GrayButton from "@/components/common/GrayButton";
import { NextButton } from "@/components/common/ButtonBase";
import { useIsMobile } from "@/hooks/useIsMobile";

type StepNavigationProps = {
  onNext: () => void;
  onPrev?: () => void;
};

export function StepNavigation({ onNext, onPrev }: StepNavigationProps) {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex w-full justify-center items-center mt-8 ${
        isMobile ? "justify-end items-end pr-[20px] pb-[44px] min-h-[124px] h-[calc(100vh-599px)]" : ""
      }`}
    >
      {onPrev && (
        <GrayButton
          label="이전"
          className="w-[88px] mr-[20px]"
          onClick={onPrev}
        />
      )}
      <NextButton className="w-[100px]" size="S" onClick={onNext} />
    </div>
  );
}
