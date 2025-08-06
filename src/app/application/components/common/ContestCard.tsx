import Image from "next/image";
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type ContestCardProps = {
  type: "daehong" | "hsad";
  onClick: () => void;
};

export function ContestCard({ type, onClick }: ContestCardProps) {
  const isMobile = useIsMobile();
  const contestData = {
    daehong: {
      logo: "/image/application/daehong.png",
      height: isMobile ? 130 : 166,
      width: isMobile ? 130 : 166,
      title: "제 42회 대홍기획 공모전",
      subtitle: "Daehong Creative Awards",
      period: "2025.03.01 ~ 2025.03.07",
      finalsAnnouncement: null,
      announcement: "2025.06",
      bgColor: "bg-[#ED1B23]",
    },
    hsad: {
      logo: "/image/application/HSAD.png",
      height: isMobile ? 40 : 70,
      width: isMobile ? 158 : 277.2,
      title: "제 38회 HSAD 공모전",
      subtitle: "Young Creator's Competition",
      period: "2025.07.07 ~ 2025.07.14",
      finalsAnnouncement: "2025.08",
      announcement: "2025.12",
      bgColor: "bg-black",
    },
  };

  const data = contestData[type];

  return (
    <div
      className={`flex flex-col cursor-pointer w-[272px] h-[353px] sm:w-[366px] sm:h-[458px] rounded-[20px] shadow-2 hover:shadow-3 transition-shadow`}
      onClick={onClick}
    >
      <div
        className={`${data.bgColor} w-[272px] h-[180px] sm:w-[366px] sm:h-[238px] rounded-t-[20px] flex justify-center items-center`}
      >
        <Image
          src={data.logo}
          alt={data.title}
          width={data.width}
          height={data.height}
        />
      </div>

      <div className="sm:px-[24px] px-[20px] sm:py-[30px] pt-[18px] pb-[30px] rounded-b-[20px] bg-white">
        <div
          className={`${
            isMobile ? "font-B02-SB" : "font-T01-B"
          } text-gray-950 mb-1`}
        >
          {data.title}
        </div>
        <div
          className={`${
            isMobile ? "font-B03-R" : "font-B01-R"
          } text-gray-700 sm:mb-10 mb-8`}
        >
          {data.subtitle}
        </div>
        <div>
          <div className="flex gap-3 mb-2">
            <div
              className={`${
                isMobile ? "font-C01-R" : "font-B02-R"
              } text-gray-700`}
            >
              출품기간
            </div>
            <div
              className={`${
                isMobile ? "font-C01-M" : "font-B02-M"
              } text-gray-950`}
            >
              {data.period}
            </div>
          </div>
          <div className="flex gap-[14px]">
            {data.finalsAnnouncement && (
              <div className="flex gap-3">
                <div
                  className={`${
                    isMobile ? "font-C01-R" : "font-B02-R"
                  } text-gray-700`}
                >
                  본선발표
                </div>
                <div
                  className={`${
                    isMobile ? "font-C01-M" : "font-B02-M"
                  } text-gray-950`}
                >
                  {data.finalsAnnouncement}
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <div
                className={`${
                  isMobile ? "font-C01-R" : "font-B02-R"
                } text-gray-700`}
              >
                수상발표
              </div>
              <div
                className={`${
                  isMobile ? "font-C01-M" : "font-B02-M"
                } text-gray-950`}
              >
                {data.announcement}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
