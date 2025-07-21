"use client";
import React, { useRef, useState, useEffect } from "react";
import { BlueFileIcon, FileIcon } from "../../../../../public";
import { useSubmitStore } from "@/store/useSubmitStore";

const BriefBoard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const setBriefUploaded = useSubmitStore((s) => s.setBriefUploaded);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0] || null;
    setFile(uploaded);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const dropped = e.dataTransfer.files?.[0] || null;
    if (dropped) setFile(dropped);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  useEffect(() => {
    setBriefUploaded(!!file);
  }, [file]);

  return (
    <div className="w-full px-[325px] mt-[130px]">
      <div className="text-gray-900 font-T02-B mb-6">브리프보드 제출</div>

      <div
        className={`flex items-center justify-center w-full h-[314px] border-2 border-dashed rounded-[10px] cursor-pointer transition-colors ${
          isDragOver
            ? "border-blue-main bg-blue-50"
            : "border-gray-200 bg-white"
        }`}
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          {isDragOver ? <BlueFileIcon /> : <FileIcon />}

          {file ? (
            <div className="mt-[27px] text-gray-600 font-B01-M">
              {file.name}
            </div>
          ) : (
            <>
              <div className="mt-[27px] text-gray-500 font-B01-M">
                마우스로 파일을 끌어서 넣을 수 있어요
              </div>
              <div className="text-gray-300 font-C01-M">
                최대 3508x4960 픽셀, 10MB 이하의 JPG 파일
              </div>
            </>
          )}
        </div>
      </div>

      <input
        type="file"
        accept=".jpg,.jpeg"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default BriefBoard;
