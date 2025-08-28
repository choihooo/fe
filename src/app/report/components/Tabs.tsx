"use client";
import React, { useEffect, useState } from "react";
import ReportCard, { ReportCardProps } from "./ReportCards";
import { GetReport } from "@/app/_apis/report";
import { ReportRequest } from "@/app/_apis/schemas/reportResponse";
import { NoReportIcon } from "../../../../public";
import Loading from "@/components/common/Loading";
import { useIsMobile } from "@/hooks/useIsMobile";
import ReportTableHeader from "./ReportPageHeader";

const Tabs = () => {
  const isMobile = useIsMobile();
  const tabs = ["전체", "DCA", "YCC"];
  const [activeTab, setActiveTab] = useState("전체");
  const [cards, setCards] = useState<ReportCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await GetReport(0);
        const dataList: ReportRequest[] = data.result.responseList;

        const statusMap: Record<string, "완료" | "제작중"> = {
          COMPLETED: "완료",
          IN_PROGRESS: "제작중",
        };

        const Cards: ReportCardProps[] = dataList.map((item) => ({
          type: item.contestName,
          title: item.title,
          org: item.brand,
          participants: item.workMembers.join(", "),
          status: statusMap[item.reportStatus] ?? "제작중",
          workId: item.workId,
        }));

        setCards(Cards);
      } catch (err) {
        console.error("리포트 불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const filteredCards =
    activeTab === "전체"
      ? cards
      : cards.filter((card) => card.type === activeTab);

  return (
    <>
      <div className="sm:mt-8 mt-6 px-4 sm:px-0 flex items-start gap-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 cursor-pointer ${
              activeTab === tab
                ? `text-blue-main ${
                    isMobile ? "font-B03-SB" : "font-B01-SB"
                  } border-b-2 border-blue-main`
                : `text-gray-500 ${isMobile ? "font-B03-R" : "font-B01-M"}`
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="sm:mt-10 w-full bg-gray-100 flex-1">
        {loading ? (
          <div className="flex items-center justify-center mt-[175px]">
            <Loading />
          </div>
        ) : filteredCards.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-[175px]">
            <NoReportIcon
              width={isMobile ? 70 : 80}
              height={isMobile ? 70 : 80}
            />
            <div
              className={`text-gray-300 ${
                isMobile ? "font-B02-M mt-[12px]" : "font-B01-M mt-[10px]"
              } `}
            >
              아직 신청한 리포트가 없어요
            </div>
          </div>
        ) : (
          <div className="mt-[30px] px-[20px] sm:px-0 sm:mt-0">
            {!isMobile && <ReportTableHeader />}
            {filteredCards.map((card, idx) => (
              <ReportCard key={idx} {...card} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Tabs;
