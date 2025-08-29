import React from "react";

const Summary = () => {
  return (
    <div className="flex flex-col gap-[52px] items-start">
      <div className="text-gray-900 font-T02-B"> 작품 요약</div>
      <div className="flex px-[30px] py-[34px] flex-col items-start rounded-[12px] bg-gray-50 w-full gap-[46px]">
        <div className="flex flex-col gap-[14px]">
          <span className="text-blue-main font-T04-SB"> 타겟</span>
          <div className="text-gray-800 font-B01-M">
            정기 후원 참여율이 낮은 20~39세 MZ세대. 공감보다 자기 연결감을
            중시하며, 개인의 가치에 기반한 메세지에 반응한다
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <span className="text-blue-main font-T04-SB"> 인사이트</span>
          <div className="text-gray-800 font-B01-M">
            2030세대는 자신과 닮았다고 느끼는 대상에게 감정적으로 더 쉽게
            연결되며, ‘투영’을 통해 연대감을 느낀다.
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <span className="text-blue-main font-T04-SB"> 솔루션</span>
          <div className="text-gray-800 font-B01-M">
            수혜자에게 후원자의 어린 시절을 투영하게 하여, 정서적 연결을 통해
            기부 행동으로 자연스럽게 이어지도록 유도한다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
