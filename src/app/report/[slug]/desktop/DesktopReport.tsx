"use client";
import React, { useState } from "react";
import ContestAnalysis from "./components/ContestAnalysisTab/ContestAnalysis";
import DcaCriteria from "./components/Criteria/DcaCriteria";
import Footer from "@/app/home/components/Footer";

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

            {activeTab === "세부 과제 분석" && (
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">세부 과제 분석</h2>
                <p className="text-gray-600">
                  세부 과제 분석 내용이 여기에 표시됩니다.
                </p>
              </div>
            )}

            {activeTab === "개인 출품작 분석" && (
              <div>
                {/* <YccCriteria /> */}
                <DcaCriteria />
                {/* <YccScoreDetail /> */}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DesktopReport;
