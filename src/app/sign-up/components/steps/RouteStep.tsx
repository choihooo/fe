import React from "react";
import { RouteEnum } from "../../types/schemas";
import { RadioSelectionStep } from "../common/RadioSelectionStep";

const ROUTES = [
  { key: RouteEnum.Enum.INSTA, label: "인스타그램" },
  { key: RouteEnum.Enum.SEARCH, label: "인터넷 서칭" },
  { key: RouteEnum.Enum.FRIEND, label: "지인 추천" },
  { key: RouteEnum.Enum.ETC, label: "기타", isEtc: true },
];

type Props = {
  value?: (typeof RouteEnum.Enum)[keyof typeof RouteEnum.Enum];
  etcValue?: string;
  onNext: (
    route: (typeof RouteEnum.Enum)[keyof typeof RouteEnum.Enum],
    etcValue?: string
  ) => void;
  onPrev: () => void;
};

export default function StepRoute({ value, etcValue, onNext, onPrev }: Props) {
  return (
    <RadioSelectionStep
      options={ROUTES}
      value={value}
      etcValue={etcValue}
      onNext={onNext}
      onPrev={onPrev}
      title={
        <>
          서비스를 알게 된 경로는
          <br />
          무엇인가요?
        </>
      }
      placeholder="경로를 입력해 주세요."
    />
  );
}
