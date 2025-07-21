import React from "react";
import { FileIcon } from "../../../../../public";

const PlanPart = () => {
  return (
    <div className="w-full px-[325px] mt-[130px]">
      <div className="text-gray-900 font-T02-B mb-6">
        기획서 제출 <span className="text-gray-500 font-T02-SB"> (선택)</span>
      </div>

      <div className="flex items-center justify-center w-full h-[314px] border border-dashed border-gray-200 rounded-[10px] bg-white">
        <div className="flex flex-col items-center justify-center gap-3">
          <FileIcon />

          <div className="mt-[27px] text-gray-500 font-B01-M">
            마우스로 파일을 끌어서 넣을 수 있어요
          </div>
          <div className="mt-[5px] text-gray-300 font-C01-M">
            10mb 이내의 PPT, PDF 파일
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPart;
