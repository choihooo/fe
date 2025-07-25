import React from "react";
import TeamInformation from "../DCA/components/TeamInformation";
import SubmitButton from "../DCA/components/SubmitButton";
import Footer from "@/app/home/components/Footer";
import YCCWorkInfo from "./components/YCCWorkInfo";
import YCCPlanPart from "./components/YCCPlanPart";

const page = () => {
  return (
    <div className="mt-[158px] flex flex-col items-start justify-center">
      <div className="text-gray-900 font-T01-B px-[120px]">
        출품작을 업로드하고 <br /> 수상 리포트를 받아보세요
      </div>

      <YCCWorkInfo />
      <TeamInformation mode="ycc" />
      <YCCPlanPart />
      <SubmitButton mode="ycc" />
      <Footer />
    </div>
  );
};

export default page;
