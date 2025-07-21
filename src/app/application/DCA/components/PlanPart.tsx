"use client";
import React, { useState, DragEvent } from "react";
import { BlueFileIcon, FileIcon } from "../../../../../public";

const PlanPart = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      console.log("업로드된 파일:", files[0]);
    }
  };

  return (
    <div className="w-full px-[325px] mt-[130px]">
      <div className="text-gray-900 font-T02-B mb-6">
        기획서 제출 <span className="text-gray-500 font-T02-SB">(선택)</span>
      </div>

      <div
        className={`flex items-center justify-center w-full h-[314px] rounded-[10px] border-dashed 
          ${
            isDragging
              ? "border-blue-main bg-blue-50"
              : "border-gray-200 bg-white"
          } 
          border`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-3 pointer-events-none">
          {isDragging ? <BlueFileIcon /> : <FileIcon />}

          <div className="mt-[27px] text-gray-500 font-B01-M text-center">
            마우스로 파일을 끌어오거나, 클릭해 업로드하세요
          </div>
          <div className="text-gray-300 font-C01-M text-center">
            10mb 이내의 PPT, PDF 파일
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPart;
