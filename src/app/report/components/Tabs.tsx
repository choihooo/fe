"use client";
import React, { useEffect, useState } from "react";
import ReportCard, { ReportCardProps } from "./ReportCards";
import { GetReport } from "@/app/_apis/report";
import { ReportRequest } from "@/app/_apis/schemas/reportResponse";
import { NoReportIcon } from "../../../../public";
import Loading from "@/components/common/Loading";

const Tabs = () => {
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
          category: item.category,
          org: item.brand,
          participants: item.workMembers.join(", "),
          status: statusMap[item.reportStatus] ?? "제작중",
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
      <div className="mt-8 flex items-start gap-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 cursor-pointer ${
              activeTab === tab
                ? "text-blue-main font-B01-SB border-b-2 border-blue-main"
                : "text-gray-500 font-B01-M"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="mt-10 w-full">
        {loading ? (
          <div className="flex items-center justify-center mt-[175px]">
            <Loading />
          </div>
        ) : filteredCards.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-[175px]">
            <NoReportIcon />
            <div className=" text-gray-300 font-B01-M mt-[10px]">
              아직 신청한 리포트가 없어요
            </div>
          </div>
        ) : (
          filteredCards.map((card, idx) => <ReportCard key={idx} {...card} />)
        )}
      </div>
    </>
  );
};

export default Tabs;
