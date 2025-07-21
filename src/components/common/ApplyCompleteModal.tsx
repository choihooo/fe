import React from "react";
import ButtonBase from "./ButtonBase";
import { CheckIcon } from "../../../public";

interface ApplyComfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyComfirmModal = ({ isOpen, onClose }: ApplyComfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[342px] rounded-2xl bg-white px-5 pt-[26px] pb-5 shadow-shadow-1 flex items-center justify-center flex-col">
        <div className="flex justify-center mb-5">
          <CheckIcon />
        </div>
        <div className="text-black font-T03-B mb-6 text-center">
          리포트 신청이
          <br />
          완료되었습니다
        </div>
        <div className="flex px-[21px] py-[22px] flex-col justify-center items-start gap-[10px] rounded-[10px] bg-[#F5F5F5] text-gray-400 font-B03-M">
          리포트가 제작되면 입력한 메일로 안내드립니다.
          <br />
          현재 제출한 팀원들에게도 메일이 발송됩니다.
          <br />
          팀원들은 로그인 후 리포트 코드로
          <br />
          리포트를 확인할 수 있습니다.
        </div>

        <ButtonBase
          label="확인"
          size="S"
          onClick={onClose}
          className="mt-[30px] w-[100px]"
        />
      </div>
    </div>
  );
};

export default ApplyComfirmModal;
