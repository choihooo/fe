import React from "react";
import { PurposeEnum } from "../../types/schemas";
import { RadioSelectionStep } from "../common/RadioSelectionStep";

const PURPOSES = [
  { key: PurposeEnum.Enum.AI_FEEDBACK, label: "AI 기반 피드백" },
  { key: PurposeEnum.Enum.TREND, label: "출품작 트렌드 확인" },
  { key: PurposeEnum.Enum.NEXT_CONTEST, label: "다음 공모전 준비" },
  { key: PurposeEnum.Enum.ETC, label: "기타", isEtc: true },
];

type Props = {
  value?: (typeof PurposeEnum.Enum)[keyof typeof PurposeEnum.Enum];
  etcValue?: string;
  onNext: (
    purpose: (typeof PurposeEnum.Enum)[keyof typeof PurposeEnum.Enum],
    etcValue?: string
  ) => void;
  onPrev: () => void;
};

export default function StepPurpose({
  value,
  etcValue,
  onNext,
  onPrev,
}: Props) {
  return (
    <RadioSelectionStep
      options={PURPOSES}
      value={value}
      etcValue={etcValue}
      onNext={onNext}
      onPrev={onPrev}
      title={
        <>
          수상한 녀석들을
          <br />
          활용하시는 목적이 무엇인가요?
        </>
      }
      placeholder="이유를 입력해 주세요."
    />
  );
}
