"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useReportDetail } from "@/hooks/queries";
import ContestAnalysis from "./components/ContestAnalysisTab/ContestAnalysis";
import DetailTaskAnalysis from "./components/DetailTaskAnalysisTab/DetailTaskAnalysis";
import DcaCriteria from "./components/Criteria/DcaCriteria";

const DesktopReport = () => {
  const [activeTab, setActiveTab] = useState("공모전 분석");
  const params = useParams() as { slug?: string };
  const workId = Number(params?.slug);

  const { data: reportData, isLoading, error } = useReportDetail(workId);
  const isYcc = reportData?.result?.contestName === "YCC";
  const tabs = isYcc
    ? ["공모전 분석", "개인 출품작 분석"]
    : ["공모전 분석", "세부 과제 분석", "개인 출품작 분석"];

  // 로딩 중일 때 스켈레톤 UI 표시
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center shadow-1-b px-[112px] h-[58px]">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="px-[17px] py-[17px] text-gray-300 font-B02-M"
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="w-full py-[86px]">
          <div className="w-[996px] mx-auto">
            <div className="mt-6">
              <div className="h-[400px] bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 에러 발생 시 에러 메시지 표시
  if (error) {
    return (
      <div className="w-full">
        <div className="text-red-500 text-center py-8">
          리포트 정보를 불러오는데 실패했습니다.
        </div>
      </div>
    );
  }

  // 데이터가 없거나 성공하지 않은 경우
  if (!reportData?.isSuccess || !reportData.result) {
    return (
      <div className="w-full">
        <div className="text-gray-500 text-center py-8">
          리포트 정보를 찾을 수 없습니다.
        </div>
      </div>
    );
  }

  const { contestName, brand, workName, workMembers } = reportData.result;

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
            {activeTab === "공모전 분석" && (
              <ContestAnalysis
                contestName={contestName}
                workId={workId}
                brand={brand}
                workName={workName}
                workMembers={workMembers}
              />
            )}

            {activeTab === "세부 과제 분석" && (
              <DetailTaskAnalysis
                contestName={contestName}
                workId={workId}
                brand={brand}
                workName={workName}
                workMembers={workMembers}
              />
            )}

            {activeTab === "개인 출품작 분석" && (
              <div>
                {/* <YccCriteria /> */}
                <DcaCriteria contestName={contestName} />
                {/* <WorkEvaluation
                  contestName={contestName}
                  workId={workId}
                  brand={brand}
                  workName={workName}
                  workMembers={workMembers}
                /> */}
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
