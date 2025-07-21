import React from "react";
import WorkInformation from "./components/WorkInformation";
import TeamInformation from "./components/TeamInformation";
import BriefBoard from "./components/BriefBoard";
import PlanPart from "./components/PlanPart";

const page = () => {
  return (
    <div className="mt-[158px] flex flex-col items-start justify-center">
      <div className="text-gray-900 font-T01-B px-[120px]">
        출품작을 업로드하고 <br /> 수상 리포트를 받아보세요
      </div>

      <WorkInformation />
      <TeamInformation />
      <BriefBoard />
      <PlanPart />
    </div>
  );
};

export default page;
