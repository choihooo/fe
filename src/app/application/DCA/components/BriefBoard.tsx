"use client";
import React from "react";
import { useSubmitStore } from "@/store/useSubmitStore";
import FileDropBox from "@/components/common/FileDropBox";

const BriefBoard = () => {
  const setBriefUploaded = useSubmitStore((s) => s.setBriefUploaded);
  const setBriefBoardFile = useSubmitStore((s) => s.setBriefBoardFile);

  const handleFileChange = (uploadedFile: File | null) => {
    setBriefBoardFile(uploadedFile);
    setBriefUploaded(!!uploadedFile);
  };

  return (
    <div className="w-full px-[325px] mt-[130px]">
      <div className="text-gray-900 font-T02-B mb-6">
        브리프보드 제출<span className="text-blue-main">*</span>
      </div>

      <FileDropBox
        accept=".jpg,.jpeg"
        maxSizeMB={10}
        placeholder="마우스로 파일을 끌어오거나, 클릭해 업로드하세요"
        description="최대 3508x4960 픽셀, 10MB 이하의 JPG 파일"
        onFileChange={handleFileChange}
      />
    </div>
  );
};

export default BriefBoard;
