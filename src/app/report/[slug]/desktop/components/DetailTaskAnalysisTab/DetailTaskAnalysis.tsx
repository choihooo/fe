import React from "react";
import ReportHeader from "../../components/ReportHeader";
import ReflectionConsistencySection from "./ReflectionConsistencySection";
import BriefInterpretationSection from "./BriefInterpretationSection";
import BriefAnalysisSection from "./BriefAnalysisSection";

function DetailTaskAnalysis() {
  return (
    <div>
      <ReportHeader />
      <div className="w-full h-[1.2px] bg-gray-100 mt-[36px] mb-[52px]" />
      <BriefInterpretationSection />

      <div
        className="w-full h-[1.2px] my-[42px]"
        style={{
          background:
            "repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 4px, transparent 4px, transparent 8px)",
        }}
      />
      {/* api 연결 필요 */}
      <ReflectionConsistencySection />

      {/*  */}
      <BriefAnalysisSection brandName="SBI 저축은행 사이다뱅크" />
    </div>
  );
}

export default DetailTaskAnalysis;
