import CTA from "@/components/common/CTA";

function HeroMainSlide() {
  return (
    <div
      className="w-full min-h-[400px] h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center px-4 sm:px-0"
      style={{ backgroundImage: "url(/image/background/main-bg.png)" }}
    >
      <h1 className="text-white font-default text-[32px] sm:text-[60px] font-bold mb-6 sm:mb-[35px] text-center leading-tight">
        공모전 수상의 비밀을 파헤치다
      </h1>
      <div className="text-center font-B01-R text-gray-500 mb-10 sm:mb-[79px] text-base sm:text-lg">
        <div>막연한 공모전을 수상으로 이끌 단 하나의 솔루션,</div>
        <div>
          실제 출품작을 분석해 완성한 실전형 수상 리포트를 체험해보세요.
        </div>
      </div>

      <CTA>신청하기</CTA>
    </div>
  );
}

export default HeroMainSlide;
