import React from "react";
import CheckBox from "../../../../public/icons/CheckBox";
import { WhiteReportIcon } from "../../../../public";

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
  return (
    <div className="rounded-[12px] bg-white h-[273px] px-10 pt-8 pb-[35px] w-full mb-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full">
          <div className="py-1 px-3 w-[57px] flex justify-center items-center rounded-[8px] bg-blue-50 text-blue-main font-B02-M">
            {type}
          </div>

          <div className="flex flex-row gap-2 items-center">
            <div
              className={`font-B02-SB ${
                status === "완료" ? "text-gray-800" : "text-gray-500"
              }`}
            >
              {status}
            </div>
            {status === "완료" && <CheckBox />}
          </div>
        </div>

        <div className="text-gray-900 font-T02-SB mt-[26px]">{title}</div>
        <div className="mt-[9px] text-gray-500 font-B02-R">{org}</div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row mt-[54px]">
            <div className="text-gray-900 font-B01-M">참여자</div>
            <div className="w-[1px] h-4 bg-gray-200 items-center justify-center mx-3 mt-[5.5px]"></div>
            <div className="text-gray-700 font-B01-R">{participants}</div>
          </div>

          {status === "완료" && (
            <button className="flex flex-row gap-[9.5px] mt-[37px] items-center justify-center px-[22px] py-3 rounded-[10px] bg-blue-main cursor-pointer">
              <WhiteReportIcon />
              <div className="text-white font-B02-SB">리포트 보기</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
