"use client";
import React from "react";
import TextInput from "@/components/common/TextInput";
import { useSubmitStore } from "@/store/useSubmitStore";

const VideoLink = () => {
  const youtubeUrl = useSubmitStore((s) => s.youtubeUrl);
  const setField = useSubmitStore((s) => s.setField);
  const category = useSubmitStore((s) => s.category);

  return (
    <div className="w-full px-[325px] mt-[130px]">
      <div className="text-gray-900 font-T02-B mb-6">
        영상 링크 제출{" "}
        {category === "Film" ? (
          <span className="text-blue-main">*</span>
        ) : (
          <span className="text-gray-500 font-T02-SB">(선택)</span>
        )}
      </div>

      <TextInput
        placeholder="URL을 입력하세요."
        value={youtubeUrl}
        onChange={(e) => setField("youtubeUrl", e.target.value)}
        className="w-full h-[48px]"
      />
    </div>
  );
};

export default VideoLink;
