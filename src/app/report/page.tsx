import React from "react";
import MyReportIcon from "../../../public/icons/MyReportIcon";
import Tabs from "./components/Tabs";

const page = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen px-[120px] flex flex-col">
      <div className="pt-[156px] flex flex-row gap-5 items-center">
        <MyReportIcon />
        <div className="text-black font-T01-SB text-center">내 리포트</div>
      </div>

      <div className="mt-8 text-gray-600 font-B01-M">
        제출한 작품과 트렌드 리포트 현황을 확인하세요
      </div>

      <Tabs />
    </div>
  );
};

export default page;
