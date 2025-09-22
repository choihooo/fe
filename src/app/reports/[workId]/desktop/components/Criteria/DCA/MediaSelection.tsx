import React from "react";
import SectionBlock from "../SectionBlock";
import { useIsMobile } from "@/hooks/useIsMobile";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const MEDIA_SELECTION_ITEMS: Item[] = [
  {
    id: 1,
    title: "캠페인 목적에 적합한 매체 전략 선정 여부",
    desc: "인지도 제고, 행동 유도, 브랜드 경험 제공 등 캠페인의 핵심 목표에 부합하는 매체 유형과 포맷이 전략적으로 선정 되었는가.",
  },
  {
    id: 2,
    title: "매체 활용의 창의성 및 확장성",
    desc: "익숙한 매체를 새롭게 활용하거나, 타겟의 주목을 끌 수 있는 창의적 매체 기획 또는 새로운 미디어 접점 발굴이 이루어졌는가.",
  },
  {
    id: 3,
    title: "맥락 및 상황에 기반한 매체 활용 여부",
    desc: "타겟의 일상생활 동선, 특정 시간대, 장소, 행동 맥락을 고려하여 매체가 전략적으로 배치되고 활용되었는가.",
  },
  {
    id: 4,
    title: "채널 간 유기성 및 시너지 구조 (기획서 형식인 경우에만)",
    desc: "여러 채널로 구성되어 있을 경우, 다양한 채널이 각기 다른 역할을 맡으며, 하나의 캠페인 흐름 안에서 유기적으로 작동하도록 설계되었는가.",
  },
  {
    id: 5,
    title: "메시지 전달 방식의 직관성",
    desc: "매체를 통해 전달되는 콘텐츠(카피, 비주얼, 인터랙션 등)가 복잡한 해석 없이도 타겟이 즉시 이해하고 반응할 수 있도록 구성되었는가.",
  },
];

const MediaSelection = () => {
  const isMobile = useIsMobile();
  return (
    <div className={`${isMobile ? "mt-9" : "mt-[108px]"} flex flex-col`}>
      <SectionBlock
        heading="매체 선정"
        description={` 캠페인의 핵심 메시지와 타겟 특성, 브랜드 전략을 바탕으로, 적절하고 전략적인 매체를 선정했으며,
          그 활용 방식 또한 맥락에 맞고 창의적이며 목적 지향적으로 설계되었는지를 평가함..`}
        items={MEDIA_SELECTION_ITEMS}
      />
    </div>
  );
};

export default MediaSelection;
