import Image from "next/image";

function ExpertFeedbackSection() {
  return (
    <div className="flex pl-[120px]">
      <div className="flex-1 pt-[120px]">
        <div className="font-T01-SB text-blue-main">현업자 피드백</div>
        <div className="font-bold text-[50px] text-gray-950 font-default pt-11">
          광고 현업자가 직접 <br />
          개발에 참여한 리포트
        </div>
        <div className="font-T02-SB text-gray-600 pt-[27px]">
          생생한 현업 피드백을 반영한 리포트
        </div>
      </div>
      <div className="flex-1 py-[95px]">
        <Image
          src="/image/landing/ExpertFeedback.png"
          width={833.6}
          height={612}
          style={{ objectFit: "contain" }}
          alt="피드백 예시"
        />
      </div>
    </div>
  );
}

export default ExpertFeedbackSection;
