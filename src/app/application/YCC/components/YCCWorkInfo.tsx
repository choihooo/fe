"use client";
import TextInput from "@/components/common/TextInput";
import { useSubmitStore } from "@/store/useSubmitStore";
import React, { useEffect, useState } from "react";

const YCCWorkInfo = () => {
  const [title, setTitle] = useState("");
  const setYccWorkInfoFilled = useSubmitStore(
    (state) => state.setYccWorkInfoFilled
  );

  useEffect(() => {
    setYccWorkInfoFilled(title.trim().length > 0);
  }, [title, setYccWorkInfoFilled]);

  return (
    <div className="w-full px-[325px] mt-[134px]">
      <div className="text-gray-900 font-T02-B">
        작품 정보 <span className="text-blue-main">*</span>
      </div>

      <div className="mt-[50px] flex flex-col gap-[10px]">
        <div className="text-gray-800 font-B01-M">작품 제목</div>
        <TextInput
          placeholder="작품의 제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default YCCWorkInfo;
