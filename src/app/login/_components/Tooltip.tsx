import React from "react";
import CommentIcon from "../../../../public/icons/CommentIcon";
import { CloseIcon } from "../../../../public";

const ToolTip = ({ text }: { text: string }) => {
  return (
    <div className="relative">
      <CommentIcon />

      <div className="absolute inset-0 w-full flex items-center justify-between pl-[17px] pt-2 pb-3 pr-[15px] text-white font-C01-M">
        {text}

        <div className="flex items-center">
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
