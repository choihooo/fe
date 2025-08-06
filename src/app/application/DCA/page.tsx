"use client";
import React from "react";
import WorkInformation from "./components/WorkInformation";
import TeamInformation from "./components/TeamInformation";
import BriefBoard from "./components/BriefBoard";
import PlanPart from "./components/PlanPart";
import VideoLink from "./components/VideoLink";
import SubmitButton from "./components/SubmitButton";
import Footer from "@/app/home/components/Footer";
import Image from "next/image";
import Header from "@/components/common/Header";
import { useIsMobile } from "@/hooks/useIsMobile";

const page = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Header />
      <div className="mt-[74px] flex flex-col items-start justify-center">
        <div
          className={`flex ${
            isMobile ? "flex-row" : "flex-row"
          } justify-between items-center w-full px-5 sm:px-[120px] gap-6`}
        >
          <div
            className={`text-gray-900 ${
              isMobile ? "font-T04-SB" : "font-T01-B"
            }`}
          >
            출품작을 업로드하고 <br /> 수상 리포트를 받아보세요
          </div>

          <Image
            src="/image/application/graphicImg.png"
            alt="그래픽이미지"
            width={isMobile ? 128 : 704}
            height={128}
            quality={90}
            className={isMobile ? "w-[128px] h-auto" : "w-[493px] h-auto"}
          />
        </div>
        <WorkInformation />
        <TeamInformation mode="dca" />
        <BriefBoard />
        <PlanPart />
        <VideoLink />
        <SubmitButton mode="dca" />
        <Footer />
      </div>
    </>
  );
};

export default page;
