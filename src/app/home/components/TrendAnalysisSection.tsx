import Image from "next/image";

function TrendAnalysisSection() {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:pl-[120px] sm:h-[661px] sm:pr-0 py-12 sm:py-0 items-center w-full bg-[#F5F5F5]">
      <div className="flex-1 pt-6 w-full ">
        <div className="font-T01-SB text-blue-main text-base sm:text-lg text-center sm:text-left">
          트렌드 분석
        </div>
        <div className="font-bold text-[28px] sm:text-[50px] text-gray-950 font-default pt-4 sm:pt-11 text-center sm:text-left">
          출품작을 분석해 <br />
          도출한 공모전 패턴
        </div>
        <div className="font-T02-SB text-gray-600 pt-3 sm:pt-[27px] text-sm sm:text-base text-center sm:text-left">
          실제 출품작을 수집·분석해 공모전 트렌드 분석
        </div>
      </div>
      <div className="flex-1 py-8 sm:py-[103px] w-full flex justify-center items-center">
        <div className="translate-x-[30px] sm:translate-x-[50px]">
          <Image
            src="/image/landing/2.png"
            width={852}
            height={455}
            alt="트렌드 분석 예시"
            className="h-auto"
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default TrendAnalysisSection;
