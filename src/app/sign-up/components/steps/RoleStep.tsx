import React, { useState } from "react";
import Chip from "@/components/common/Chip";
import { RoleEnum } from "../../types/schemas";
import { StepLayout } from "../common/StepLayout";
import { StepNavigation } from "../common/StepNavigation";

const ROLES = [
  { key: RoleEnum.Enum.STRUCTURE, label: "논리 구조 설계" },
  { key: RoleEnum.Enum.IDEATION, label: "아이데이션" },
  { key: RoleEnum.Enum.PRESENTATION, label: "발표" },
  { key: RoleEnum.Enum.RESEARCH, label: "자료 조사" },
  { key: RoleEnum.Enum.CONCEPTING, label: "컨셉 도출" },
  { key: RoleEnum.Enum.DESIGN, label: "디자인" },
];

type Props = {
  value: (typeof RoleEnum.Enum)[keyof typeof RoleEnum.Enum][];
  onNext: (roles: (typeof RoleEnum.Enum)[keyof typeof RoleEnum.Enum][]) => void;
  onPrev?: () => void;
};

export default function StepRole({ value, onNext, onPrev }: Props) {
  const [selected, setSelected] =
    useState<(typeof RoleEnum.Enum)[keyof typeof RoleEnum.Enum][]>(value);
  const toggle = (role: (typeof RoleEnum.Enum)[keyof typeof RoleEnum.Enum]) =>
    setSelected((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );

  return (
    <StepLayout
      title={
        <>
          공모전 팀 내에서
          <br />
          주로 맡는 역할은 무엇인가요?
        </>
      }
    >
      <div className="flex flex-wrap gap-3 mb-[47px] w-[409px]">
        {ROLES.map((r) => (
          <Chip
            key={r.key}
            selected={selected.includes(r.key)}
            onClick={() => toggle(r.key)}
          >
            {r.label}
          </Chip>
        ))}
      </div>
      <StepNavigation
        onNext={() => onNext(selected)}
        onPrev={onPrev}
        disabled={selected.length === 0}
      />
    </StepLayout>
  );
}
