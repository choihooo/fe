"use client";

import React, { useState } from "react";
import { ContestCard } from "../common/ContestCard";
import ReportIcon from "../../../../../public/icons/ReportIcon";

type ContestSelectionStepProps = {
  selectedContest?: "daehong" | "hsad";
  onNext: (contest: "daehong" | "hsad") => void;
};

export function ContestSelectionStep({
  selectedContest,
  onNext,
}: ContestSelectionStepProps) {
  const [, setSelected] = useState<"daehong" | "hsad" | undefined>(
    selectedContest
  );

  const handleContestSelect = (contest: "daehong" | "hsad") => {
    setSelected(contest);
    // 카드 선택 시 바로 다음 단계로 이동
    onNext(contest);
  };

  return (
    <div className="flex flex-col gap-[38px]">
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px] font-T01-SB">
          <ReportIcon />
          수상 리포트 신청
        </div>
        <div className="text-gray-600 font-B01-M">
          출품하신 공모전을 선택해주세요
        </div>
      </div>
      <div className="flex gap-[30px]">
        <ContestCard
          type="daehong"
          onClick={() => handleContestSelect("daehong")}
        />
        <ContestCard type="hsad" onClick={() => handleContestSelect("hsad")} />
      </div>
    </div>
  );
}
