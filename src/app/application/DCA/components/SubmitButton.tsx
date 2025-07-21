"use client";
import React, { useState } from "react";
import ButtonBase from "@/components/common/ButtonBase";
import { useSubmitStore } from "@/store/useSubmitStore";
import ConfirmModal from "@/components/common/ConfirmModal";
import ApplyComfirmModal from "@/components/common/ApplyCompleteModal";

interface SubmitButtonProps {
  mode: "dca" | "ycc";
}

const SubmitButton = ({ mode }: SubmitButtonProps) => {
  const {
    workInfoFilled,
    teamInfoFilled,
    briefUploaded,
    yccWorkInfoFilled,
    yccTeamInfoFilled,
    yccBriefUploaded,
  } = useSubmitStore();

  const isDcaValid =
    mode === "dca" && workInfoFilled && teamInfoFilled && briefUploaded;

  const isYccValid =
    mode === "ycc" &&
    yccWorkInfoFilled &&
    yccTeamInfoFilled &&
    yccBriefUploaded;

  const isDisabled = !(isDcaValid || isYccValid);

  const [isModalOpen, setIsModalOpen] = useState(false); // ConfirmModal
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false); // ✅ SuccessModal

  const handleSubmitClick = () => {
    if (!isDisabled) {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsCompleteModalOpen(true);
    console.log("제출완료");
  };

  const handleCompleteClose = () => {
    setIsCompleteModalOpen(false);
  };

  return (
    <>
      <div className="mt-[130px] flex justify-center mb-[148px] w-full">
        <ButtonBase
          label="제출하기"
          size="M"
          disabled={isDisabled}
          onClick={handleSubmitClick}
        />
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        title="리포트를 신청하시겠습니까?"
        description="신청 후에는 작품을 변경할 수 없습니다."
        cancelText="취소"
        confirmText="신청하기"
      />

      <ApplyComfirmModal
        isOpen={isCompleteModalOpen}
        onClose={handleCompleteClose}
      />
    </>
  );
};

export default SubmitButton;
