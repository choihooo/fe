import CTA from "@/components/common/CTA";

function DaehongSlide() {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: "url(/image/background/daehong-bg.png)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.40) -11.42%, #000 104.99%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <img src="/image/logo/daehong.png" alt="대홍이미지" />
        <h1 className="text-white text-center font-default text-[50px] font-bold mt-[48px] mb-[30px] leading-[1.3]">
          제42회 DAEHONG
          <br />
          CREATIVE AWARDS
        </h1>
        <div className="text-center font-B04-SB text-gray-500 mb-[74px]">
          2025년 대홍기획 크리에이티브 어워즈
        </div>
        <CTA>리포트 신청하기</CTA>
      </div>
    </div>
  );
}

export default DaehongSlide;
