"use client";
import React, { useState } from "react";
import TextInput from "@/components/common/TextInput";

const VideoLink = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="w-full px-[325px] mt-[130px]">
      <div className="text-gray-900 font-T02-B mb-6">
        영상 링크 제출{" "}
        <span className="text-gray-500 font-T02-SB"> (선택)</span>
      </div>

      <TextInput
        placeholder="URL을 입력하세요."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full h-[48px]"
      />
    </div>
  );
};

export default VideoLink;
