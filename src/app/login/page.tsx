"use client";

import React, { useEffect, useState } from "react";
import { Google, KaKao, Naver } from "../../../public";
import ToolTip from "./_components/Tooltip";

const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = () => {
  const [lastProvider, setLastProvider] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLastProvider(localStorage.getItem("socialLogin"));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[434px] h-[347px] rounded-[20px] px-[47px] py-[52px] flex flex-col gap-[15px]">
        <p className="text-gray-900 font-T01-SB mb-5"> 로그인 </p>

        <div
          className="relative group flex pl-5 pr-[127px] py-3 w-full items-center justify-between rounded-[10px] bg-[#FEE500] cursor-pointer"
          onClick={() => {
            window.location.href = `${BACKEND_URL}/oauth2/authorization/kakao`;
          }}
        >
          {lastProvider === "KAKAO" && (
            <div className="absolute -top-[44px] right-0 z-10">
              <ToolTip text="마지막으로 로그인한 계정이에요" />
            </div>
          )}
          <KaKao />
          <span className="text-black/85 text-center font-B02-M">
            카카오 로그인
          </span>
        </div>

        <div
          className="relative group flex pl-5 pr-[134px] py-3 w-full items-center justify-between rounded-[10px] bg-[#FFF] border border-[#E7E7E7] cursor-pointer"
          onClick={() => {
            window.location.href = `${BACKEND_URL}/oauth2/authorization/google`;
          }}
        >
          {lastProvider === "GOOGLE" && (
            <div className="absolute -top-[44px] right-0 z-10">
              <ToolTip text="마지막으로 로그인한 계정이에요" />
            </div>
          )}
          <Google />
          <span className="text-black/85 text-center font-B02-M">
            구글 로그인
          </span>
        </div>

        <div
          className="relative group flex pl-5 pr-[127px] py-3 w-full items-center justify-between rounded-[10px] bg-[#03C75A] cursor-pointer"
          onClick={() => {
            window.location.href = `${BACKEND_URL}/oauth2/authorization/naver`;
          }}
        >
          {lastProvider === "NAVER" && (
            <div className="absolute -top-[44px] right-0 z-10">
              <ToolTip text="마지막으로 로그인한 계정이에요" />
            </div>
          )}
          <Naver />
          <span className="text-white text-center font-B02-M">
            네이버 로그인
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
