import React from "react";
import { FileIcon } from "../../../../../public";

const BriefBoard = () => {
  return (
    <div className="w-full px-[325px] mt-[130px]">
      <div className="text-gray-900 font-T02-B mb-6">브리프보드 제출</div>

      <div className="flex items-center justify-center w-full h-[314px] border border-dashed border-gray-200 rounded-[10px] bg-white">
        <div className="flex flex-col items-center justify-center gap-3">
          <FileIcon />

          <div className="mt-[27px] text-gray-500 font-B01-M">
            마우스로 파일을 끌어서 넣을 수 있어요
          </div>
          <div className="mt-[5px] text-gray-300 font-C01-M">
            최대 3508x4960 픽셀, 10MB 이하의 JPG 파일
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefBoard;
