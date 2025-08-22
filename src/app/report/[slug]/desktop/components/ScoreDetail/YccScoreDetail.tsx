import React from "react";
import ScoreList, { type ScoreItem } from "./ScoreList";
import GrayButton from "@/components/common/GrayButton";

const YccScoreDetail = () => {
  const items: ScoreItem[] = [
    {
      order: "7점",
      title: "타겟 인사이트 도출 여부",
      body: "브리프에서 제시한 Gen-Z 타겟의 ‘의외성’, ‘디지털 감수성’, ‘감각적 경험’ 요소를 단순 반복이 아닌, 새롭게 재해석한 시도가 돋보입니다. 특히 ‘열어봐야 아는’ 형태로 구성된 매체는 타겟의 호기심과 상호작용 욕구를 반영한 훌륭한 인사이트 응용이라 볼 수 있습니다.",
    },
    {
      order: "8점",
      title: "아이디어의 타겟 연계성",
      body: "메인 메시지(과즙 탄산의 리뉴얼된 풍부함)를 ‘자극적이고 재미있는 비주얼’과 ‘가벼운 놀이 구조’로 풀어내며, 타겟의 행동방식과 감정선에 잘 들어맞습니다. 감각적이고 비가성비적인 소비를 즐기는 Gen-Z 성향과도 논리적·정서적으로 연결되어 있습니다.",
    },
    {
      order: "4점",
      title: "행동 유도 전략의 타겟화 여부",
      body: "작품은 스티커와 QR이라는 장치를 통해 물리적인 참여를 유도하고 있지만, 참여 이후의 동기 유발이나 반복 참여를 이끌 수 있는 추가적인 후속 장치(예: 공유 유도, 리워드 유인 등)는 다소 약합니다. 아이디어 실행에 있어 확장된 행동 설계는 아쉬운 부분입니다.",
    },
    {
      order: "9점",
      title: "타겟과의 접점 고려 여부",
      body: "작품은 스티커와 QR이라는 장치를 통해 물리적인 참여를 유도하고 있지만, 참여 이후의 동기 유발이나 반복 참여를 이끌 수 있는 추가적인 후속 장치(예: 공유 유도, 리워드 유인 등)는 다소 약합니다. 아이디어 실행에 있어 확장된 행동 설계는 아쉬운 부분입니다.",
    },
    {
      order: "6점",
      title: "타겟의 라이프스타일 접점 여부",
      body: "작품은 ‘재미있는 소비’, ‘감각적 경험’, ‘짧고 강한 메시지’ 등 Gen-Z의 소비·생활 패턴과 매우 잘 부합됩니다. 음료 자체를 단순 섭취 이상의 감각적 콘텐츠로 재해석한 구성은, 타겟의 라이프스타일 내에서 자연스럽게 어우러지는 방식이라 평가할 수 있습니다.",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-row items-center w-full">
        <div className="text-gray-900 font-B01-M">너에게서 나를 보다</div>
        <span className="mx-3 text-gray-200">|</span>
        <div className="text-gray-700 font-B01-R">YCC</div>
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

      <ScoreList
        heading="타겟 적합성"
        items={items}
        variants={["default", "success", "warning", "default", "default"]}
      />

      <ScoreList
        heading="브랜드 이해도"
        items={items}
        variants={["default", "default", "warning", "default", "default"]}
      />

      <ScoreList
        heading="매체 선정"
        items={items}
        variants={["default", "success", "default", "default", "default"]}
      />

      <ScoreList
        heading="문제 정의"
        items={items}
        variants={["default", "success", "default", "default", "default"]}
      />

      <ScoreList
        heading="실현 가능성"
        items={items}
        variants={["default", "default", "default", "warning", "default"]}
      />

      <GrayButton
        label="리포트로 돌아가기"
        className="w-[175px] px-[30px] py-3 mt-[148px] self-center mb-[23px] cursor-pointer"
      />
    </div>
  );
};

export default YccScoreDetail;
