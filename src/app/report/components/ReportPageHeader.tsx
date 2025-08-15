import React from "react";

const ReportTableHeader = () => {
  return (
    <div className="hidden sm:flex w-full items-start sm:px-11 sm:mb-[15px] text-gray-700 font-B03-M truncate">
      <div className="w-[76px]">공모전</div>
      <div className="w-[347px]">제목</div>
      <div className="w-[163px]">기업</div>
      <div className="w-[234px]">참여자</div>
      <div className="w-[203px]">상태</div>
    </div>
  );
};

export default ReportTableHeader;
