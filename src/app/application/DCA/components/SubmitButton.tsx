"use client";
import ButtonBase from "@/components/common/ButtonBase";
import { useSubmitStore } from "@/store/useSubmitStore";
import React from "react";

const SubmitButton = () => {
  const { workInfoFilled, teamInfoFilled, briefUploaded } = useSubmitStore();
  const isDisabled = !(workInfoFilled && teamInfoFilled && briefUploaded);

  return (
    <div className="mt-[130px] flex justify-center mb-[148px] w-full">
      <ButtonBase label="제출하기" size="M" disabled={isDisabled} />
    </div>
  );
};

export default SubmitButton;
