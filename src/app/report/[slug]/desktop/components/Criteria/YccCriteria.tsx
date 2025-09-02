"use client";
import React from "react";
import ScoreCalculationMethod from "./DCA/ScoreCalculationMethod";
import YccEvaluationCriteria from "./YCC/YccPossibility.tsx";
import YccMediaSelection from "./YCC/YccMediaSelection";
import SelectAgenda from "./YCC/SelectAgenda";
import Effect from "./YCC/Effect";
import Ability from "./YCC/Ability";
import GrayButton from "@/components/common/GrayButton";
import { useRouter } from "next/navigation";

const YccCriteria = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-row items-center w-full">
        <div className="text-gray-900 font-B01-M"> 공모전 </div>
        <span className="mx-3 text-gray-200">|</span>
        <div className="text-gray-700 font-B01-R">YCC</div>
      </div>
      <div className="text-gray-900 font-semibold text-4xl mt-4">평가 기준</div>

      <div className="w-full h-[1.2px] bg-gray-100 mt-[36px] mb-[52px]" />

      <ScoreCalculationMethod />
      <YccEvaluationCriteria />
      <YccMediaSelection />
      <SelectAgenda />
      <Effect />
      <Ability />
      <GrayButton
        label="리포트로 돌아가기"
        className="w-[175px] px-[30px] py-3 mt-[148px] self-center mb-[178px] cursor-pointer"
        onClick={() => router.push("/report")}
      />
    </div>
  );
};

export default YccCriteria;
