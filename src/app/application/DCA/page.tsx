import React from "react";
import WorkInformation from "./components/WorkInformation";
import TeamInformation from "./components/TeamInformation";
import BriefBoard from "./components/BriefBoard";
import PlanPart from "./components/PlanPart";
import VideoLink from "./components/VideoLink";
import SubmitButton from "./components/SubmitButton";
import Footer from "@/app/home/components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-[158px] flex flex-col items-start justify-center">
      <div className="flex flex-row justify-between w-full ">
        <div className="text-gray-900 font-T01-B px-[120px]">
          출품작을 업로드하고 <br /> 수상 리포트를 받아보세요
        </div>
        <Image
          src="/image/application/graphic.png"
          alt="그래픽이미지"
          width={704}
          height={128}
          quality={90}
          className="w-full sm:max-w-[493px] h-auto"
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
  );
};

export default page;
