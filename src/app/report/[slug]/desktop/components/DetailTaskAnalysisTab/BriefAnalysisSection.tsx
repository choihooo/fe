import React from "react";
import Tip from "../Tip";
import MarketSituationSection from "./MarketSituationSection";
import BrandTargetSection from "./BrandTargetSection";
import SolutionTasksSection from "./SolutionTasksSection";
import NotesSection from "./NotesSection";
import {
  defaultBrandData,
  tomsMarketData,
  tomsBrandTargetData,
  tomsSolutionData,
  tomsNotesData,
} from "./brandData";

interface BrandHistory {
  date: string;
  title: string;
  details: string[];
}

interface TipContent {
  title: string;
  content: string;
}

interface BriefAnalysisSectionProps {
  brandName: string;
  brandHistory: BrandHistory[];
  tipContent: TipContent;
}

function BriefAnalysisSection({
  brandName,
  brandHistory,
  tipContent,
}: BriefAnalysisSectionProps) {
  return (
    <div>
      <div className="text-gray-900 font-T02-B mt-[108px] mb-[52px]">
        브리프 분석
      </div>

      <div>
        {/* 브랜드 소개 섹션 */}
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">브랜드 소개</div>

          <div className="space-y-[20px]">
            {brandHistory.map((history, index) => (
              <div key={index} className="flex gap-[16px]">
                <div className="font-B01-M text-gray-500 min-w-[80px]">
                  {history.date}
                </div>
                <div className="flex-1">
                  <div className="font-B01-M text-gray-800 mb-[12px]">
                    {history.title}
                  </div>
                  <div className="space-y-[4px]">
                    {history.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="font-T04-R text-gray-500"
                      >
                        - {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          {/* 브랜드 소개 팁 */}
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> {tipContent.title}
            </div>
            <div className="font-B01-M text-gray-900">{tipContent.content}</div>
          </div>

          {/* 시장 상황 섹션 */}
          <MarketSituationSection
            marketConditions={tomsMarketData.marketConditions}
            tipContent={tomsMarketData.tipContent}
          />

          {/* 브랜드 상황 및 커뮤니케이션 타겟 섹션 */}
          <BrandTargetSection
            brandSituations={tomsBrandTargetData.brandSituations}
            tipContent={tomsBrandTargetData.tipContent}
          />

          {/* 해결 과제 섹션 */}
          <SolutionTasksSection
            tasks={tomsSolutionData.tasks}
            tipContent={tomsSolutionData.tipContent}
          />

          {/* 유의 및 참고사항 섹션 */}
          <NotesSection
            notes={tomsNotesData.notes}
            subBrands={tomsNotesData.subBrands}
            tipContent={tomsNotesData.tipContent}
          />
        </div>
      </div>
    </div>
  );
}

// 기본 브랜드 데이터를 사용하는 래퍼 컴포넌트
function BriefAnalysisSectionWithDefaults() {
  return <BriefAnalysisSection {...defaultBrandData} />;
}

export default BriefAnalysisSectionWithDefaults;
export { BriefAnalysisSection };
export type { BriefAnalysisSectionProps, BrandHistory, TipContent };
