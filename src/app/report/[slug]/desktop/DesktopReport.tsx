"use client";
import React, { useState } from "react";
import ContestAnalysis from "./components/ContestAnalysisTab/ContestAnalysis";
import DetailTaskAnalysis from "./components/DetailTaskAnalysisTab/DetailTaskAnalysis";
import DcaCriteria from "./components/Criteria/DcaCriteria";

const DesktopReport = () => {
  const [activeTab, setActiveTab] = useState("공모전 분석");

  const tabs = ["공모전 분석", "세부 과제 분석", "개인 출품작 분석"];

  return (
    <div className="w-full">
      {/* 탭 네비게이션 */}
      <div className="flex items-center shadow-1-b px-[112px] h-[58px]">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-[17px] py-[17px] cursor-pointer transition-colors  ${
              activeTab === tab
                ? "text-blue-main border-b-2 border-blue-main font-B02-SB"
                : "text-gray-300 hover:text-gray-700 font-B02-M"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="w-full py-[86px]">
        <div className="w-[996px] mx-auto">
          {/* 탭 컨텐츠 영역 */}
          <div className="mt-6">
            {activeTab === "공모전 분석" && <ContestAnalysis />}

            {activeTab === "세부 과제 분석" && <DetailTaskAnalysis />}

            {activeTab === "개인 출품작 분석" && (
              <div>
                {/* <WorkEvaluation /> */}
                {/* <YccCriteria /> */}
                <DcaCriteria />
                {/* <YccScoreDetail /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopReport;
