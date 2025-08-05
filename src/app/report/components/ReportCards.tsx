import React from "react";
import CheckBox from "../../../../public/icons/CheckBox";
import { WhiteReportIcon } from "../../../../public";
import { useIsMobile } from "@/hooks/useIsMobile";

export interface ReportCardProps {
  type: string;
  title: string;
  org: string;
  participants: string;
  status: "완료" | "제작중";
}

const ReportCard = ({
  type,
  title,
  org,
  participants,
  status,
}: ReportCardProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="rounded-[12px] bg-white sm:h-[273px] p-5 sm:px-10 sm:pt-8 sm:pb-[35px] w-full mb-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full">
          <div
            className={`py-1 flex justify-center items-center bg-blue-50 text-blue-main ${
              isMobile
                ? "px-2 rounded-[4px] font-C01-M"
                : "px-3 w-[57px] rounded-[8px] font-B02-M"
            }`}
          >
            {type}
          </div>

          <div className="flex flex-row gap-2 items-center">
            <div
              className={`${isMobile ? "font-C01-M" : "font-B02-SB"} ${
                status === "완료" ? "text-gray-800" : "text-gray-500"
              }`}
            >
              {status}
            </div>
            {status === "완료" && <CheckBox />}
          </div>
        </div>

        <div
          className={`text-gray-900 ${
            isMobile ? "font-B02-SB mt-[16px]" : "font-T02-SB mt-[26px]"
          }`}
        >
          {title}
        </div>
        <div
          className={` text-gray-500 ${
            isMobile ? "font-C01-R mt-[4px]" : "font-B02-R mt-[9px]"
          }`}
        >
          {org}
        </div>

        <div className="flex flex-row justify-between w-full">
          <div
            className={`flex flex-row ${isMobile ? "mt-[32px]" : "mt-[54px]"}`}
          >
            <div
              className={`text-gray-900 ${
                isMobile ? "font-C01-M" : "font-B01-M"
              }`}
            >
              참여자
            </div>
            <div className="w-[1px] h-4 bg-gray-200 items-center justify-center sm:mx-3 mx-2 sm:mt-[5.5px] mt-[2px]"></div>
            <div
              className={`text-gray-700 ${
                isMobile ? "font-C01-R" : "font-B01-R"
              }`}
            >
              {participants}
            </div>
          </div>

          {status === "완료" && !isMobile && (
            <button className="flex flex-row gap-[9.5px] mt-[37px] items-center justify-center px-[22px] py-3 rounded-[10px] bg-blue-main cursor-pointer">
              <WhiteReportIcon />
              <div className="text-white font-B02-SB">리포트 보기</div>
            </button>
          )}
        </div>
        {status === "완료" && isMobile && (
          <button className="flex mt-[22px] items-center justify-center px-[22px] py-3 rounded-[10px] bg-blue-main cursor-pointer">
            <div className="text-white font-B03-M">리포트 보기</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
