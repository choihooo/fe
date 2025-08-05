"use client";

import React from "react";
import MyReportIcon from "../../../public/icons/MyReportIcon";
import Tabs from "./components/Tabs";
import { AuthGuard } from "@/components/common/AuthGuard";
import Header from "@/components/common/Header";
import { useIsMobile } from "@/hooks/useIsMobile";

const page = () => {
  const isMobile = useIsMobile();
  return (
    <AuthGuard>
      <div className="bg-white sm:bg-gray-100 w-full min-h-screen">
        <Header />
        <div className="sm:px-[120px] min-h-[calc(100vh-50px)] flex flex-col sm:pt-20 pt-[34px]">
          <div className={`${isMobile ? "px-4" : ""}`}>
            <div className="flex flex-row gap-5 items-center">
              <MyReportIcon width={24} height={isMobile ? 24 : 28} />
              <div
                className={`${
                  isMobile ? "font-B01-SB" : "font-T01-SB"
                } text-black text-center`}
              >
                내 리포트
              </div>
            </div>

            <div
              className={`mt-3 text-gray-600 ${
                isMobile ? "font-B03-R" : "font-B01-M"
              }`}
            >
              제출한 작품과 트렌드 리포트 현황을 확인하세요
            </div>
          </div>
          <Tabs />
        </div>
      </div>
    </AuthGuard>
  );
};

export default page;
