import Image from "next/image";

function ExpertFeedbackSection() {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:pl-[120px] sm:pr-0 py-12 sm:py-0 items-center">
      <div className="flex-1 pt-6 sm:pt-[120px] w-full">
        <div className="font-T01-SB text-blue-main text-base sm:text-lg text-center sm:text-left">현업자 피드백</div>
        <div className="font-bold text-[28px] sm:text-[50px] text-gray-950 font-default pt-4 sm:pt-11 text-center sm:text-left">
          광고 현업자가 직접 <br />
          개발에 참여한 리포트
        </div>
        <div className="font-T02-SB text-gray-600 pt-3 sm:pt-[27px] text-sm sm:text-base text-center sm:text-left">
          생생한 현업 피드백을 반영한 리포트
        </div>
      </div>
      <div className="flex-1 py-8 sm:py-[95px] w-full flex justify-center items-center">
        <Image
          src="/image/landing/ExpertFeedback.png"
          width={220}
          height={160}
          style={{ objectFit: "contain" }}
          alt="피드백 예시"
          className="sm:w-[833.6px] sm:h-[612px] w-[220px] h-[160px]"
        />
      </div>
    </div>
  );
}

export default ExpertFeedbackSection;
