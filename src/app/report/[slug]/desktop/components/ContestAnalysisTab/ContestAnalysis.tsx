import React from "react";
import ReportHeader from "../ReportHeader";
import ContestCard from "./ContestCard";

function ContestAnalysis() {
  return (
    <div>
      <ReportHeader />
      <div className="w-full h-[1px] bg-gray-100 mt-[36px] mb-[52px]" />
      <div className="flex justify-between items-center w-full">
        <ContestCard title={"YCC"} />

      </div>
    </div>
  );
}

export default ContestAnalysis;
