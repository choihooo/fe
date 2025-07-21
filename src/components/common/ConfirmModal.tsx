import React from "react";
import ButtonBase from "./ButtonBase";
import GrayButton from "./GrayButton";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "",
  description = "",
  cancelText = "",
  confirmText = "",
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full">
      <div className="w-[328px] rounded-2xl px-5 pb-5 pt-[30px] bg-white shadow-shadow-1">
        <div className="text-center text-black font-T03-B">{title}</div>
        <div className="text-center text-gray-500 font-B02-M mb-6">
          {description}
        </div>

        <div className="flex flex-row w-full gap-3 justify-center">
          <GrayButton
            label={cancelText}
            className="w-[88px] cursor-pointer"
            onClick={onClose}
          />
          <ButtonBase
            label={confirmText}
            size="M"
            className="w-[188px] whitespace-nowrap  flex items-center justify-center"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
