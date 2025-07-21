"use client";
import React, { useState } from "react";
import ButtonBase from "@/components/common/ButtonBase";
import { useSubmitStore } from "@/store/useSubmitStore";
import ConfirmModal from "@/components/common/ConfirmModal";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitClick = () => {
    if (!isDisabled) {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    setIsModalOpen(false);

    console.log("제출 완료");
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
    </>
  );
};

export default SubmitButton;
