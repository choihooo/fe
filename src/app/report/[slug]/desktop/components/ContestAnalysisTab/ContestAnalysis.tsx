import React from "react";
import ReportHeader from "../ReportHeader";
import ContestCard from "./ContestCard";
import ContestCapability from "./ContestCapability";
import AwardCriteria from "./AwardCriteria";

function ContestAnalysis() {
  return (
    <div>
      <ReportHeader />
      <div className="w-full h-[1px] bg-gray-100 mt-[36px] mb-[52px]" />
      <div className="flex justify-between items-center w-full">
        <ContestCard contest={"YCC"} />
        <ContestCapability contest={"YCC"} />
      </div>

      <div className="flex justify-between items-center w-full mt-[108px]">
        <AwardCriteria />
      </div>
    </div>
  );
}

export default ContestAnalysis;
