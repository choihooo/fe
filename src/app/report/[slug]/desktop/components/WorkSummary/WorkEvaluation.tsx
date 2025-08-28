import React from "react";
import ReportHeader from "../ReportHeader";
import Summary from "./Summary";
import RadarChartComponent from "./RadarChartComponent.tsx";
import AllEvalution from "./AllEvalution";

const WorkEvaluation = () => {
  return (
    <div>
      <ReportHeader />
      <div className="w-full h-[1.2px] bg-gray-100 mt-[36px] mb-[52px]" />
      <Summary />
      <RadarChartComponent />
      <div className="w-full border-t border-gray-300 border-dashed mt-[108px] mb-[108px]" />
      <AllEvalution />
    </div>
  );
};

export default WorkEvaluation;
