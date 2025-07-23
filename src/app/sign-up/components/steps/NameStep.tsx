import React, { useState } from "react";
import { StepLayout } from "../common/StepLayout";
import { StepNavigation } from "../common/StepNavigation";
import TextInput from "@/components/common/TextInput";

interface NameStepProps {
  value: string;
  onNext: (name: string) => void;
}

export default function NameStep({ value, onNext }: NameStepProps) {
  const [name, setName] = useState(value);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!name.trim()) {
      setError("이름을 입력해 주세요.");
      return;
    }
    if (name.length > 20) {
      setError("이름은 20자 이하로 입력해 주세요.");
      return;
    }
    setError("");
    onNext(name.trim());
  };

  return (
    <StepLayout
      title={
        <>
          이름을 입력해 주세요
          <div className="mt-2 text-gray-300 font-B01-R">실명을 입력해주세요</div>
        </>
      }
    >
      <div className="w-full mb-6">
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해 주세요."
          maxLength={20}
          className="w-full"
        />
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
      <StepNavigation onNext={handleNext} disabled={!name.trim()} />
    </StepLayout>
  );
}
