"use client";
import React, { useState } from "react";
import ReportCard, { ReportCardProps } from "./ReportCards";
import MyReportIcon from "../../../../public/icons/MyReportIcon";

const Tabs = () => {
  const tabs = ["전체", "DCA", "YCC"];
  const [activeTab, setActiveTab] = useState("전체");

  const cards: ReportCardProps[] = [
    {
      type: "DCA",
      status: "완료",
      title: "너에게서 나를 보다",
      org: "유니세프",
      participants: "이현수, 신민서, 우준식, 김수연",
    },
    {
      type: "YCC",
      status: "제작중",
      title: "너에게서 나를 보다",
      org: "유니세프",
      participants: "이현수, 신민서, 우준식, 유은서",
    },
  ];

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
        {filteredCards.map((card, idx) => (
          <ReportCard key={idx} {...card} />
        ))}
      </div>
    </>
  );
};

export default Tabs;
