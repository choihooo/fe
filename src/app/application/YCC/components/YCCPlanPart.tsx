"use client";
import React, { useState } from "react";
import FileDropBox from "@/components/common/FileDropBox";
import { useSubmitStore } from "@/store/useSubmitStore";

const YCCPlanPart = () => {
  const [file, setFile] = useState<File | null>(null);
  const setYccBriefUploaded = useSubmitStore(
    (state) => state.setYccBriefUploaded
  );

  const handleFileChange = (uploadedFile: File | null) => {
    setFile(uploadedFile);
    setYccBriefUploaded(!!uploadedFile);
  };

  return (
    <div className="w-full px-[325px] mt-[130px]">
      <div className="text-gray-900 font-T02-B mb-6">
        기획서 제출 <span className="text-blue-main">*</span>
      </div>

      <FileDropBox
        accept=".pdf,.ppt,.pptx"
        maxSizeMB={10}
        placeholder="마우스로 파일을 끌어오거나, 클릭해 업로드하세요"
        description="10MB 이내의 PPT, PDF 파일"
        onFileChange={handleFileChange}
      />
    </div>
  );
};

export default YCCPlanPart;
