import Image from "next/image";

function TrendAnalysisSection() {
  return (
    <div className="flex pl-[120px]">
      <div className="flex-1 pt-[162px]">
        <div className="font-T01-SB text-blue-main">트렌드 분석</div>
        <div className="font-bold text-[50px] text-gray-950 font-default pt-11">
          출품작을 분석해 <br />
          도출한 공모전 패턴
        </div>
        <div className="font-T02-SB text-gray-600 pt-[27px]">
          실제 출품작을 수집·분석해 공모전 트렌드 분석
        </div>
      </div>
      <div className="flex-1 py-[103px]">
        <Image
          src="/image/landing/TrendAnalysis.png"
          width={851.79}
          height={455}
          style={{ objectFit: "contain" }}
          alt="트렌드 분석 예시"
        />
      </div>
    </div>
  );
}

export default TrendAnalysisSection;
