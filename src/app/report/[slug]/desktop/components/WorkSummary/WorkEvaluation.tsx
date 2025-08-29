import React from "react";
import ReportHeader from "../ReportHeader";
import Summary from "./Summary";
import RadarChartComponent from "./RadarChartComponent.tsx";
import AllEvalution from "./AllEvalution";
import GrayButton from "@/components/common/GrayButton";
import ButtonBase from "@/components/common/ButtonBase";
import Strength from "./Strength";

interface WorkEvaluationProps {
  workName: string;
  contestName: string;
  brand: string;
  workMembers: string[];
  workId: number;
}

const WorkEvaluation = ({
  workName,
  contestName,
  brand,
  workMembers,
  workId,
}: WorkEvaluationProps) => {
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
      <Summary />
      <RadarChartComponent />
      <div className="w-full border-t border-gray-300 border-dashed mt-[108px] mb-[108px]" />
      <AllEvalution />
      <div className="flex flex-row items-center justify-end mt-20 w-full gap-[10px]">
        <GrayButton
          label="평가 기준 >"
          className="flex pt-3 pl-[22px] pr-4 cursor-pointer"
        />
        <ButtonBase label="점수 상세보기 >" size="S" />
      </div>
      <Strength />
    </div>
  );
};

export default WorkEvaluation;
