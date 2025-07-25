"use client";
import React, { useState } from "react";
import ButtonBase from "@/components/common/ButtonBase";
import { useSubmitStore } from "@/store/useSubmitStore";
import ConfirmModal from "@/components/common/ConfirmModal";
import ApplyComfirmModal from "@/components/common/ApplyCompleteModal";
import { DCAapply } from "@/app/_apis/apply";

interface SubmitButtonProps {
  mode: "dca" | "ycc";
}

const SubmitButton = ({ mode }: SubmitButtonProps) => {
  const {
    workInfoFilled,
    teamInfoFilled,
    briefUploaded,
    briefBoardFile,
    yccWorkInfoFilled,
    yccTeamInfoFilled,
    yccBriefUploaded,
    yccBriefFile,

    title,
    number,
    category,
    brand,
    teamMembers,
    additionalFile,
    youtubeUrl,
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
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleSubmitClick = () => {
    if (!isDisabled) {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = async () => {
    if (mode === "dca") {
      if (!briefBoardFile) {
        alert("브리프보드 파일이 없습니다.");
        return;
      }

      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("number", number);
        formData.append("category", category);
        formData.append("brand", brand);

        if (category === "Film" && youtubeUrl) {
          formData.append("youtubeUrl", youtubeUrl);
        }

        if (additionalFile) {
          formData.append("additionalFile", additionalFile);
        }

        formData.append("briefBoardFile", briefBoardFile);
        formData.append(
          "teamMembers",
          new Blob([JSON.stringify(teamMembers)], {
            type: "application/json",
          })
        );
        // formData.append("teamMembers", JSON.stringify(teamMembers));

        console.log(
          "최종 제출 FormData",
          Array.from(formData.entries()).map(([k, v]) =>
            v instanceof File
              ? `${k}: File(${v.name}, ${v.size} bytes)`
              : `${k}: ${v}`
          )
        );

        await DCAapply(formData);
        setIsModalOpen(false);
        setIsCompleteModalOpen(true);
        console.log("제출완료");
      } catch (err) {
        console.error("제출 실패", err);
        alert("제출 중 오류가 발생했습니다.");
      }
    }

    if (mode === "ycc") {
      if (!yccBriefFile) {
        alert("기획서 파일이 없습니다.");
        return;
      }

      alert("YCC 제출 기능은 아직 구현되지 않았습니다.");
    }
  };

  const handleCompleteClose = () => {
    setIsCompleteModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsCancelModalOpen(true);
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
        onClose={handleCancel}
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

      <ConfirmModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={() => setIsCancelModalOpen(false)}
        title="신청을 취소하시겠습니까?"
        description="현재 입력한 정보는 삭제됩니다."
        cancelText="취소"
        confirmText="계속 작성하기"
      />
    </>
  );
};

export default SubmitButton;
