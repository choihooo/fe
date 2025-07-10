import React, { useState } from "react";
import { RadioButton } from "@/components/common/RadioButton";
import TextInput from "@/components/common/TextInput";
import { StepLayout } from "./StepLayout";
import { StepNavigation } from "./StepNavigation";

type Option = {
  key: string;
  label: string;
  isEtc?: boolean;
};

type RadioStepProps<T extends string> = {
  options: Option[];
  value?: T;
  etcValue?: string;
  onNext: (value: T, etcValue?: string) => void;
  onPrev?: () => void;
  isLastStep?: boolean;
  placeholder?: string;
  stepNumber: number;
  totalSteps: number;
  title: React.ReactNode;
};

export function RadioSelectionStep<T extends string>({
  options,
  value,
  etcValue,
  onNext,
  onPrev,
  isLastStep = false,
  placeholder = "내용을 입력해 주세요.",
  stepNumber,
  totalSteps,
  title,
}: RadioStepProps<T>) {
  const [selected, setSelected] = useState<T | undefined>(value);
  const [etc, setEtc] = useState<string>(etcValue || "");

  const handleNext = () => {
    if (selected) {
      const selectedOption = options.find((opt) => opt.key === selected);
      const finalEtcValue = selectedOption?.isEtc ? etc : undefined;
      onNext(selected, finalEtcValue);
    }
  };

  const isValid =
    selected &&
    (!options.find((opt) => opt.key === selected)?.isEtc || etc.trim());

  return (
    <StepLayout
      stepNumber={stepNumber}
      totalSteps={totalSteps}
      title={title}
    >
      <div className="flex flex-col gap-[30px] w-full mb-4">
        {options.map((option) => {
          const isSelected = selected === option.key;
          return (
            <div key={option.key} className="w-full">
              <label className="flex items-center gap-[21px] cursor-pointer w-full">
                <input
                  type="radio"
                  name="radio-option"
                  value={option.key}
                  checked={isSelected}
                  onChange={() => setSelected(option.key as T)}
                  className="hidden"
                />
                <RadioButton
                  state={isSelected ? "selected" : "unselected"}
                  className="text-base"
                />
                <span>{option.label}</span>
              </label>
              {option.isEtc && isSelected && (
                <div className="w-full mt-2 pl-[43px]">
                  <TextInput
                    placeholder={placeholder}
                    value={etc}
                    onChange={(e) => setEtc(e.target.value)}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <StepNavigation
        onNext={handleNext}
        onPrev={onPrev}
        disabled={!isValid}
        isLastStep={isLastStep}
      />
    </StepLayout>
  );
}
