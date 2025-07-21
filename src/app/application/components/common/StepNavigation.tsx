import React from "react";
import GrayButton from "@/components/common/GrayButton";
import { NextButton } from "@/components/common/ButtonBase";

type StepNavigationProps = {
  onNext: () => void;
  onPrev?: () => void;
};

export function StepNavigation({ onNext, onPrev }: StepNavigationProps) {
  return (
    <div className="flex w-full justify-center items-center mt-8">
      {onPrev && (
        <GrayButton
          label="이전"
          className="w-[88px] mr-[20px]"
          onClick={onPrev}
        />
      )}
      <NextButton size="S" onClick={onNext} />
    </div>
  );
}
