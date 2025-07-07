import Image from "next/image";

function CustomFeedbackSection() {
  return (
    <div className="my-[120px] flex justify-center items-center flex-col">
      <div className="text-center text-blue-main font-T01-SB">
        {" "}
        맞춤형 피드백
      </div>
      <div className="mt-11 text-gray-950 font-bold text-[50px]/[70px]">
        내 출품작에 딱 맞춘 AI 피드백 제공
      </div>
      <div className="text-gray-600 font-T02-SB mt-[21px]">
        OO 기술 활용으로 개인화된 피드백 및 개선점 도출
      </div>

      <div className="mt-[101px] flex justify-center items-start gap-[31px]">
        <Image
          src="/image/landing/feedbackimg.png"
          alt="맞춤형피드백 왼쪽이미지"
          width={493}
          height={417}
        />
        <Image
          src="/image/landing/feedbackimgright.png"
          alt="맞춤형피드백 오른쪽이미지"
          width={675}
          height={415}
        />
      </div>
    </div>
  );
}

export default CustomFeedbackSection;
