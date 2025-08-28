import React from "react";

type Item = {
  subject: string;
  value: number;
  description: string;
};

const items: Item[] = [
  {
    subject: "타겟 적합성",
    value: 7.5,
    description:
      "2039세대가 가진 ‘가치 중심 소비’와 ‘자기 투영’ 성향을 정확히 이해하고, 후원을 자신과 연결된 경험으로 해석하게끔 유도한 메시지 전략이 돋보임",
  },
  {
    subject: "브랜드 이해도",
    value: 8.0,
    description:
      "동물의 숲, 웹툰, 참여형 테스트 등 다양한 채널과 포맷에서 메시지를 자연스럽게 풀어낼 수 있는 구조로 설계되어 디지털 환경에서의 파급력이 높음",
  },
  {
    subject: "매체선정",
    value: 6.8,
    description:
      "TVC부터 굿즈 키트, 인터렉티브 광고까지 전 실행안이 ‘투영’이라는 중심 메시지를 흔들림 없이 유지하며, 유니세프의 브랜드 이미지와도 정서적으로 부합함",
  },
  {
    subject: "문제정의",
    value: 4.5,
    description:
      "캠페인의 문제 정의-인사이트-해결방안이 논리적으로 연결되어 있으며, 메시지 톤앤매너 또한 브랜드와 타깃에 맞춰 섬세하게 조율되어 있음",
  },
  {
    subject: "실현 가능성",
    value: 6.2,
    description:
      "자극적 동정심 유발에서 벗어나, 수혜자를 ‘나의 과거이자 또 다른 나’로 보게 만드는 새로운 시선 전환이 기획 전체에 신선함과 진정성을 부여함",
  },
];

const AllEvalution = () => {
  return (
    <div className="w-full flex flex-col items-start gap-12">
      {items.map((item) => (
        <div key={item.subject}>
          <div className="flex items-center gap-[10px]">
            <div className="inline-flex items-center justify-center rounded-[8px] bg-blue-50 text-blue-main px-3 py-[6px] text-[14px] font-medium leading-none">
              {item.value.toFixed(1)}
            </div>
            <div className="text-gray-800 font-T04-SB">{item.subject}</div>
          </div>

          <p className="mt-[14px] font-B01-M text-gray-800">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllEvalution;
