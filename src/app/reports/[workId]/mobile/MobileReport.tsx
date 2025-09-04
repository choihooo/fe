"use client";

import Header from "@/components/common/Header";
import Footer from "@/app/home/components/Footer";
import GrayButton from "@/components/common/GrayButton";
import { useRouter } from "next/navigation";

const MobileReport = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/reports");
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
        <div className="w-full max-w-[360px] bg-white rounded-[20px] shadow-sm p-8 text-center">
          <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
            <span className="text-blue-main text-[22px] leading-none">!</span>
          </div>
          <div className="text-gray-900 font-T04-SB mb-6">PC로 확인해주세요</div>
          <GrayButton
            label="돌아가기"
            className="w-[88px] mx-auto"
            onClick={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileReport;
