"use client";
import React, { useState, useRef } from "react";
import {
  BlueFileIcon,
  CompleteFileIcon,
  DeleteIcon,
  FileIcon,
} from "../../../public";

interface FileDropBoxProps {
  accept: string;
  maxSizeMB: number;
  description: string;
  placeholder: string;
  onFileChange: (file: File | null) => void;
  required?: boolean;
  errorMessage?: string;
}

const FileDropBox = ({
  accept,
  maxSizeMB,
  description,
  placeholder,
  onFileChange,
}: FileDropBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    validateAndSetFile(dropped);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0];
    validateAndSetFile(uploaded);
  };

  const validateAndSetFile = (uploaded?: File) => {
    if (!uploaded) return;

    const fileSizeMB = uploaded.size / (1024 * 1024);
    const allowedTypes = accept?.split(",").map((type) => type.trim());

    const isValidType = allowedTypes.some((type) =>
      uploaded.type.includes(type.replace(".", ""))
    );
    const isValidSize = fileSizeMB <= maxSizeMB;

    if (!isValidType || !isValidSize) {
      setError(
        `파일은 ${maxSizeMB}MB 이내의 ${accept.replaceAll(
          ",",
          ", "
        )} 파일만 업로드할 수 있어요`
      );
      setFile(null);
      onFileChange(null);
      if (inputRef.current) inputRef.current.value = "";
    } else {
      setError(null);
      setFile(uploaded);
      onFileChange(uploaded);
    }
  };

  const handleDelete = () => {
    setFile(null);
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-center w-full h-[314px] rounded-[10px] border-2 border-dashed transition-colors cursor-pointer ${
          error
            ? "border-orange-point"
            : isDragging
            ? "border-blue-main bg-blue-50"
            : "border-gray-200 bg-white"
        }`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-3 pointer-events-none">
          {isDragging ? <BlueFileIcon /> : <FileIcon />}
          <div className="mt-[27px] text-gray-500 font-B01-M text-center">
            {placeholder}
          </div>
          <div className="text-gray-300 font-C01-M text-center">
            {description}
          </div>
        </div>
      </div>

      {file && (
        <div className="mt-[22px] h-[72px] w-full px-6 py-4 border border-gray-200 rounded-[10px] flex justify-between items-center">
          <div className="flex flex-row items-center justify-center gap-[14px]">
            <CompleteFileIcon />
            <div className="flex flex-col text-gray-900 font-B03-M">
              <span>{file.name}</span>
              <span className="text-gray-300 font-C01-R">
                {(file.size / (1024 * 1024)).toFixed(1)} MB
              </span>
            </div>
          </div>
          <button onClick={handleDelete} className="cursor-pointer">
            <DeleteIcon />
          </button>
        </div>
      )}

      {error && (
        <div className="text-orange-point mt-3 font-C01-R">{error}</div>
      )}

      <input
        type="file"
        accept={accept}
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default FileDropBox;
