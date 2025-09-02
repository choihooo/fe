"use client";
import React from "react";
import ScoreList, {
  type ScoreItem,
  DCA_TYPES,
  YCC_TYPES,
  DCA_HEADINGS,
  YCC_HEADINGS,
  type Variant,
} from "./ScoreList";
import Loading from "@/components/common/Loading";
import {
  useScoreDetail,
  usePersonalStrengths,
  usePersonalWeakness,
} from "@/hooks/queries";
import { EvaluationType } from "@/app/_apis/schemas/reportResponse";

type ContestName = "DCA" | "YCC";

interface YccScoreDetailProps {
  contestName: ContestName;
  workName: string;
  workId: number;
}

type DetailItem = {
  type: EvaluationType;
  label: string;
  score: number;
  description: string;
};

const toArray = <T,>(value: T | T[] | undefined | null): T[] =>
  Array.isArray(value) ? value : value ? [value] : [];

const normalizeLabel = (label: string) => label.trim();

const YccScoreDetail = ({
  contestName,
  workName,
  workId,
}: YccScoreDetailProps) => {
  const types: EvaluationType[] = contestName === "DCA" ? DCA_TYPES : YCC_TYPES;
  const headings = contestName === "DCA" ? DCA_HEADINGS : YCC_HEADINGS;

  const detailQueryResults = types.map((type) => useScoreDetail(workId, type));
  const isAnyDetailLoading = detailQueryResults.some((q) => q.isLoading);
  const isAnyDetailError = detailQueryResults.some((q) => q.isError);

  const {
    data: strengthsResponse,
    isLoading: isStrengthsLoading,
    isError: isStrengthsError,
  } = usePersonalStrengths(workId);

  const {
    data: weaknessesResponse,
    isLoading: isWeaknessesLoading,
    isError: isWeaknessesError,
  } = usePersonalWeakness(workId);

  const isLoading =
    isAnyDetailLoading || isStrengthsLoading || isWeaknessesLoading;
  const isError = isAnyDetailError || isStrengthsError || isWeaknessesError;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-[108px]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-orange-point">점수 상세를 불러오지 못했어요.</div>
    );
  }

  const strengthItems = toArray(strengthsResponse?.result);
  const weaknessItems = toArray(weaknessesResponse?.result);

  const strengthLabels = new Set(
    strengthItems.map((item) => normalizeLabel(item.label))
  );
  const weaknessLabels = new Set(
    weaknessItems.map((item) => normalizeLabel(item.label))
  );

  const allScoreDetails: DetailItem[] = detailQueryResults.flatMap(
    (queryResult, index) => {
      const type = types[index];
      const detailArray = toArray(
        queryResult.data?.result.detailEvaluations as
          | { code: string; label: string; score: number; description: string }
          | Array<{
              code: string;
              label: string;
              score: number;
              description: string;
            }>
          | undefined
      );

      return detailArray.map((detail) => ({
        type,
        label: detail.label,
        score: detail.score,
        description: detail.description,
      }));
    }
  );

  const sectionData = types.map((type, index) => {
    const detailsForType = allScoreDetails.filter(
      (detail) => detail.type === type
    );

    const items: ScoreItem[] = detailsForType.map((detail) => ({
      order: `${detail.score}점`,
      title: detail.label,
      body: detail.description,
    }));

    const variants: Variant[] = detailsForType.map((detail) => {
      const label = normalizeLabel(detail.label);
      if (strengthLabels.has(label)) return "success";
      if (weaknessLabels.has(label)) return "warning";
      return "default";
    });

    return { items, variants, heading: headings[index] };
  });

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-row items-center">
        <div className="text-gray-900 font-B01-M">{workName}</div>
        <span className="mx-3 text-gray-300">|</span>
        <div className="text-gray-700 font-B01-R">{contestName}</div>
      </div>

      <div className="text-gray-900 font-semibold text-4xl mt-4">
        점수 상세보기
      </div>
      <div className="w-full h-[1.2px] bg-gray-100 mt-[36px] mb-[52px]" />

      <div className="flex py-6 px-9 flex-col items-start rounded-[12px] bg-gray-50 w-full gap-3 mb-10">
        <div className="text-gray-800 font-T02-B">Tip</div>
        <div className="text-gray-700 font-medium text-[20px]">
          강점과 보완점은 작품 분석 메인 페이지에서 한눈에 보실 수 있습니다.
        </div>
      </div>

      {sectionData.map((section, idx) => (
        <ScoreList
          key={types[idx]}
          heading={section.heading}
          items={section.items}
          variants={section.variants}
        />
      ))}
    </div>
  );
};

export default YccScoreDetail;
