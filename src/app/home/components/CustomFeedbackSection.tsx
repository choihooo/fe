import Image from "next/image";

function CustomFeedbackSection() {
  return (
    <div className="my-12 sm:my-[120px] flex justify-center items-center flex-col px-4">
      <div className="text-center text-blue-main font-T01-SB text-base sm:text-lg">
        맞춤형 피드백
      </div>
      <div className="mt-4 sm:mt-11 text-gray-950 font-bold font-default text-[28px] sm:text-[50px]/[70px] text-center">
        내 출품작에 딱 맞춘 AI 피드백 제공
      </div>
      <div className="text-gray-600 font-T02-SB mt-3 sm:mt-[21px] text-sm sm:text-base text-center">
        OO 기술 활용으로 개인화된 피드백 및 개선점 도출
      </div>

      <div className="mt-8 sm:mt-[101px] flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[31px] w-full">
        <Image
          src="/image/landing/FeedbackLeftImg.png"
          alt="맞춤형피드백 왼쪽이미지"
          width={493}
          height={417}
          quality={90}
          className="w-full sm:max-w-[493px] h-auto"
        />
        <Image
          src="/image/landing/FeedbackRImg.png"
          alt="맞춤형피드백 오른쪽이미지"
          width={675}
          height={415}
          quality={90}
          className="w-full sm:max-w-[675px] h-auto"
        />
      </div>
    </div>
  );
}

export default CustomFeedbackSection;
