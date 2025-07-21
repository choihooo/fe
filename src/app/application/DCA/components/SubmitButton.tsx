"use client";
import ButtonBase from "@/components/common/ButtonBase";
import { useSubmitStore } from "@/store/useSubmitStore";
import React from "react";

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

  return (
    <div className="mt-[130px] flex justify-center mb-[148px] w-full">
      <ButtonBase label="제출하기" size="M" disabled={isDisabled} />
    </div>
  );
};

export default SubmitButton;
