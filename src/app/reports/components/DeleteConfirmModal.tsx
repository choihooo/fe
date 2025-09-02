"use client";

import React, { useState, useEffect } from "react";
import ButtonBase from "@/components/common/ButtonBase";
import GrayButton from "@/components/common/GrayButton";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  type: "simple" | "title-confirm";
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  type,
}) => {
  const [inputTitle, setInputTitle] = useState("");
  const [currentType, setCurrentType] = useState<"simple" | "title-confirm">(
    type
  );

  // 모달이 열릴 때마다 상태 초기화
  useEffect(() => {
    if (isOpen) {
      setCurrentType(type);
      setInputTitle("");
    }
  }, [isOpen, type]);

  const handleConfirm = () => {
    if (currentType === "simple") {
      // simple 모달에서 삭제하기를 누르면 title-confirm 모달로 전환
      setCurrentType("title-confirm");
      return;
    }

    if (currentType === "title-confirm" && inputTitle !== title) {
      return; // 제목이 일치하지 않으면 삭제하지 않음
    }

    // 제목이 일치하면 실제 삭제 실행
    onConfirm();
    handleClose();
  };

  const handleClose = () => {
    onClose();
    setInputTitle(""); // 입력값 초기화
    setCurrentType(type); // 타입 초기화
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative  rounded-[10px] bg-white p-[20px] pt-[30px] shadow-lg">
        {/* 제목 */}
        <div className="mb-4">
          <h2 className="font-T03-B text-gray-900 text-center">
            {currentType === "simple" ? (
              "리포트를 삭제하시겠어요?"
            ) : (
              <>
                작품 제목을<br />
                정확하게 입력해 주세요
              </>
            )}
          </h2>
        </div>

        {/* 설명 */}
        <div className="mb-6">
          <p className="font-B02-M text-gray-500 text-center">
            {currentType === "simple"
              ? "삭제한 리포트는 복구할 수 없어요"
              : "정확한 제목 입력 후 삭제가 가능합니다"}
          </p>
        </div>

        {/* 제목 입력 필드 (title-confirm 타입일 때만) */}
        {currentType === "title-confirm" && (
          <div className="mb-6">
            <input
              type="text"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              placeholder={title}
              className="w-full rounded-[8px] border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 focus:border-blue-main focus:outline-none"
            />
          </div>
        )}

        {/* 버튼들 */}
        <div className="flex gap-3 justify-end">
          <ButtonBase size="S" label="취소" onClick={handleClose} />
          <GrayButton className="w-[188px]" label="삭제하기" onClick={handleConfirm} />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
