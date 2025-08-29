"use client";
import { useState } from "react";

const dummy = {
  strengths: [
    {
      score: "9 ",
      title: "타깃과의 접점 고려 여부",
      desc: "브리프에서 제시한 Gen-Z 타깃의 ‘익의성’, ‘디지털 감수성’, ‘감각적 경험’ 요소를 단순 반복이 아닌, 새롭게 재해석한 시도가 돋보입니다. 특히 ‘열어봐야 하는’ 형태로 구성된 매체는 타깃의 호기심과 상호작용 욕구를 반영한 훌륭한 인사이트 응용이라 볼 수 있습니다.",
    },
    {
      score: "9",
      title: "타깃과의 접점 고려 여부",
      desc: "브리프에서 제시한 Gen-Z 타깃의 ‘익의성’, ‘디지털 감수성’, ‘감각적 경험’ 요소를 단순 반복이 아닌, 새롭게 재해석한 시도가 돋보입니다. 특히 ‘열어봐야 하는’ 형태로 구성된 매체는 타깃의 호기심과 상호작용 욕구를 반영한 훌륭한 인사이트 응용이라 볼 수 있습니다.",
    },
    {
      score: "9",
      title: "타깃과의 접점 고려 여부",
      desc: "브리프에서 제시한 Gen-Z 타깃의 ‘익의성’, ‘디지털 감수성’, ‘감각적 경험’ 요소를 단순 반복이 아닌, 새롭게 재해석한 시도가 돋보입니다. 특히 ‘열어봐야 하는’ 형태로 구성된 매체는 타깃의 호기심과 상호작용 욕구를 반영한 훌륭한 인사이트 응용이라 볼 수 있습니다.",
    },
  ],
  improvements: [
    {
      score: "7",
      title: "타깃과의 접점 고려 여부",
      desc: "브리프에서 제시한 Gen-Z 타깃의 ‘익의성’, ‘디지털 감수성’, ‘감각적 경험’ 요소를 단순 반복이 아닌, 새롭게 재해석한 시도가 돋보입니다. 특히 ‘열어봐야 하는’ 형태로 구성된 매체는 타깃의 호기심과 상호작용 욕구를 반영한 훌륭한 인사이트 응용이라 볼 수 있습니다.",
    },
  ],
};

const Strength = () => {
  const [tab, setTab] = useState<"강점" | "보완점">("강점");
  const items = tab === "강점" ? dummy.strengths : dummy.improvements;

  return (
    <div className="flex flex-col mt-[108px] items-start w-full mb-[219px]">
      <div className="text-gray-900 font-T02-B">강점 및 보완점</div>

      <div className="mb-[29px] flex flex-row items-start gap-3 mt-[55px]">
        {(["강점", "보완점"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative rounded-[30px] px-[22px] py-[10px] items-center font-B01-M cursor-pointer ${
              tab === t
                ? "bg-blue-main text-white"
                : "bg-white border border-gray-200 text-gray-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        {items.map((card, id) => (
          <div
            key={id}
            className="flex h-full flex-col rounded-[10px] border border-blue-main bg-white pl-8 pr-[30px] pt-9 pb-[35px]"
          >
            <div className="mb-2 text-blue-main">
              <span className="font-B01-B">{card.score}</span>
              <span className="font-B01-R"> / 10점</span>
            </div>

            <div className="mb-[23px] text-gray-900 font-T04-SB">
              {card.title}
            </div>
            <p className="text-gray-500 font-B02-M text-justify">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strength;
