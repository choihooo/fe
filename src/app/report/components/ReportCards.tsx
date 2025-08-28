import React, { useState } from "react";
import CheckBox from "../../../../public/icons/CheckBox";
import { ReportDelete } from "../../../../public";
import { useIsMobile } from "@/hooks/useIsMobile";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useRouter } from "next/navigation";

export interface ReportCardProps {
  type: string;
  title: string;
  org: string;
  participants: string;
  status: "완료" | "제작중";
  onDelete?: () => void;
  workId: number;
}

const ReportCard = ({
  type,
  title,
  org,
  participants,
  status,
  onDelete,
  workId,
}: ReportCardProps) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"simple" | "title-confirm">("simple");

  const handleDeleteClick = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    // 항상 simple 모달로 시작
    setModalType("simple");
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    onDelete?.();
  };

  const navigateToReport = () => {
    router.push(`/report/${workId}`);
  };

  if (isMobile) {
    return (
      <div className="rounded-[12px] bg-white p-5 w-full mb-6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between w-full">
            <div className="py-1 px-2 rounded-[4px] font-C01-M flex justify-center items-center bg-blue-50 text-blue-main">
              {type}
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div
                className={`font-C01-M ${
                  status === "완료" ? "text-gray-800" : "text-gray-500"
                }`}
              >
                {status}
              </div>
              {status === "완료" && <CheckBox />}
            </div>
          </div>
          <div className="text-gray-900 font-B02-SB mt-[16px]">{title}</div>
          <div className="text-gray-500 font-C01-R mt-[4px]">{org}</div>
          <div className="flex flex-row mt-[32px]">
            <div className="text-gray-900 font-C01-M">참여자</div>
            <div className="w-[1px] h-4 bg-gray-200 mx-2 mt-[2px]"></div>
            <div className="text-gray-700 font-C01-R">{participants}</div>
          </div>
          {status === "완료" && (
            <button onClick={navigateToReport} className="flex mt-[22px] items-center justify-center px-[22px] py-3 rounded-[10px] bg-blue-main cursor-pointer">
              <div className="text-white font-B03-M">리포트 보기</div>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <div onClick={navigateToReport} className="w-full flex flex-row items-start rounded-[6px] bg-gray-50 h-[72px] px-11 py-[23px] mb-[14px] cursor-pointer">
        <div className="text-gray-700 font-B02-M w-[76px]">{type}</div>
        <div className="w-[347px] text-black font-B01-R">{title}</div>
        <div className="w-[163px] text-gray-700 font-B02-R"> {org}</div>
        <div className="w-[234px] text-gray-700 font-B02-R"> {participants}</div>
        <div
          className={`font-B02-M w-[203px] ${
            status === "완료" ? "text-blue-main" : "text-gray-500"
          }`}
        >
          {status}
        </div>
        <div className="ml-auto" onClick={handleDeleteClick}>
          <ReportDelete />
        </div>
      </div>

      {/* 삭제 확인 모달 */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title={title}
        type={modalType}
      />
    </>
  );
};

export default ReportCard;
