import React, { useState } from "react";
import { Checkbox } from "@/components/common/Checkbox";
import { StepLayout } from "../common/StepLayout";
import { StepNavigation } from "../common/StepNavigation";
import { agreeToTerms } from "@/app/_apis";

const TERMS = [
  {
    key: "service",
    label: "서비스 이용약관",
    required: true,
    link: "https://soosanghantermsofuse.notion.site/?source=copy_link",
  },
  {
    key: "privacy",
    label: "개인정보 처리방침",
    required: true,
    link: "https://soosanghanprivacy.notion.site/?pvs=143",
  },
  {
    key: "marketing",
    label: "마케팅 정보 수신 동의",
    required: false,
    link: "#",
  },
];

type Props = {
  onNext: (checked: { [key: string]: boolean }) => void;
};

export default function StepTerm({ onNext }: Props) {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({
    service: false,
    privacy: false,
    marketing: false,
  });
  const allChecked = TERMS.every((t) => checked[t.key]);
  const requiredChecked = TERMS.filter((t) => t.required).every(
    (t) => checked[t.key]
  );

  const handleAll = (v: boolean) => {
    setChecked({ service: v, privacy: v, marketing: v });
  };

  const handleNext = async () => {
    try {
      await agreeToTerms({
        isServiceAgreement: checked.service,
        isUserInfoAgreement: checked.privacy,
        isMarketingAgreement: checked.marketing,
      });
      onNext(checked);
    } catch {
      alert("약관 동의에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <StepLayout title="이용약관" width="w-[433px]">
      <div className="w-full">
        <label className="flex items-center gap-[13px] mb-6">
          <Checkbox
            checked={allChecked}
            onChange={handleAll}
            ariaLabel="전체 동의"
          />
          <span className="text-black font-B01-M">전체 동의</span>
        </label>
      </div>
      <hr className="w-full border-gray-100 mb-[27px] h-[1px]" />
      <div className="flex flex-col gap-[22px] w-full mb-8">
        {TERMS.map((term) => (
          <div
            key={term.key}
            className="flex items-center justify-between w-full"
          >
            <label className="flex items-center gap-3">
              <Checkbox
                checked={checked[term.key]}
                onChange={(v) =>
                  setChecked((prev) => ({ ...prev, [term.key]: v }))
                }
                ariaLabel={term.label}
              />
              <span className="font-B02-M text-black">
                {term.required ? "(필수)" : "(선택)"}
              </span>
              <span className="font-B02-R text-gray-700">{term.label}</span>
            </label>
            <a
              href={term.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-B03-M text-gray-400 underline ml-4 hover:text-gray-500"
            >
              보기
            </a>
          </div>
        ))}
      </div>
      <StepNavigation onNext={handleNext} disabled={!requiredChecked} />
    </StepLayout>
  );
}
