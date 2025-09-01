"use client";
import React, { useState } from "react";
import ReportHeader from "../ReportHeader";
import Summary from "./Summary";
import AllEvalution from "./AllEvalution";
import GrayButton from "@/components/common/GrayButton";
import ButtonBase from "@/components/common/ButtonBase";
import Strength from "./Strength";
import DcaCriteria from "../Criteria/DcaCriteria";
import YccScoreDetail from "../ScoreDetail/YccScoreDetail";
import RadarChartComponent from "./RadarChartComponent.tsx";

type ContestName = "DCA" | "YCC";

interface WorkEvaluationProps {
  contestName: ContestName;
  workId: number;
  brand: string;
  workName: string;
  workMembers: string[];
}

type View = "report" | "criteria" | "scoreDetail";

const WorkEvaluation = ({
  contestName,
  workId,
  brand,
  workName,
  workMembers,
}: WorkEvaluationProps) => {
  const [view, setView] = useState<View>("report");
  const isDCA = contestName === "DCA";
  const isYCC = !isDCA;

  if (view === "criteria") {
    return (
      <div>
        <DcaCriteria contestName={contestName} />
        <div className="flex justify-end mt-6">
          <ButtonBase
            label="돌아가기"
            size="S"
            onClick={() => setView("report")}
          />
        </div>
      </div>
    );
  }

  if (view === "scoreDetail") {
    return (
      <div>
        <YccScoreDetail />

        <div className="flex justify-end mt-6">
          <ButtonBase
            label="돌아가기"
            size="S"
            onClick={() => setView("report")}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <ReportHeader
        workName={workName}
        contestName={contestName}
        brand={brand}
        workMembers={workMembers}
        workId={workId}
      />

      <div className="w-full h-[1.2px] bg-gray-100 mt-[36px] mb-[52px]" />

      {/* ▼ 내부 컴포넌트들도 contestName을 받아 훅을 enabled로 분기하도록 */}
      <Summary workId={workId} />
      <RadarChartComponent workId={workId} contestName={contestName} />
      <div className="w-full border-t border-gray-300 border-dashed mt-[108px] mb-[108px]" />
      <AllEvalution workId={workId} contestName={contestName} />

      <div className="flex flex-row items-center justify-end mt-20 w-full gap-[10px]">
        <GrayButton
          label="평가 기준 >"
          className="flex pt-3 pl-[22px] pr-4 cursor-pointer"
          onClick={() => setView("criteria")}
        />
        <ButtonBase
          label="점수 상세보기 >"
          size="S"
          onClick={() => setView("scoreDetail")}
        />
      </div>

      <Strength workId={workId} />
    </div>
  );
};

export default WorkEvaluation;
