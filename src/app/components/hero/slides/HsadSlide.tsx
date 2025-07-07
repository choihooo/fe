import CTA from "@/components/common/CTA";

function HsadSlide() {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: "url(/image/background/hsad-bg.png)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.40) -11.42%, #000 104.99%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <img src="/image/logo/hsad.png" alt="hsad이미지" />
        <h1 className="text-white text-center font-default text-[50px] font-bold mt-[45.8px] mb-[30px] leading-[1.3]">
          제38회 HSAD
          <br />
          Young Creator&apos;s Competition
        </h1>
        <div className="text-center font-B04-SB text-gray-500 mb-[74px]">
          2025년 HSAD 영 크리에이터스 컴퍼티션
        </div>
        <CTA>리포트 신청하기</CTA>
      </div>
    </div>
  );
}

export default HsadSlide;
