import React, { useState } from "react";
import { StepLayout } from "../common/StepLayout";
import { StepNavigation } from "../common/StepNavigation";
import TextInput from "@/components/common/TextInput";
import { useIsMobile } from "@/hooks/useIsMobile";

interface NameStepProps {
  value: string;
  onNext: (name: string) => void;
}

export default function NameStep({ value, onNext }: NameStepProps) {
  const [name, setName] = useState(value);
  const [error, setError] = useState("");
  const isMobile = useIsMobile();
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
          이름을 알려주세요
          <div className={`mt-2 text-gray-300 ${isMobile ? "font-B03-R" : "font-B01-R"}`}>실명을 입력해주세요</div>
        </>
      }
    >
      <div className="w-full mb-6">
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해 주세요."
          maxLength={20}
          className={`w-full ${isMobile ? "font-B02-R" : ""}`}
        />
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
      <StepNavigation onNext={handleNext} disabled={!name.trim()} />
    </StepLayout>
  );
}
