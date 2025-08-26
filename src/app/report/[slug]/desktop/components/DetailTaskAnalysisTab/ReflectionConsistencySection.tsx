import React from "react";

function ReflectionConsistencySection() {
  return (
    <div className="flex gap-[53px]">
      <div className="flex-1">
        <h3 className="font-T03-SB text-blue-main mb-[23px]">반영 일관성</h3>
        <p className="font-B01-R text-gray-800">
          기획 의도에서 제시한 &apos;허전함을 부드럽게 채운다&apos;는 콘셉트가 매체
          아이디어와 실행 과정 전반에 일관되게 드러난다. 버스 창문이 열리고
          닫히는 물리적 구조를 활용해 &apos;채워짐&apos;의 상징을 구현한 점은 브랜드
          자산과 브리프 요구를 효과적으로 시각화했다. 전반적으로 브랜드
          요구사항과 실행 아이디어가 잘 맞물린 사례로, 물리적 매체 특성을
          브랜드 자산과 연결한 점이 돋보인다.
        </p>
      </div>

      <div className="flex-1">
        <h3 className="font-T03-SB text-orange-point mb-[23px]">보완점</h3>
        <p className="font-B01-R text-gray-800">
          다만, 버스 창문이 닫힐 때 전달되는 &apos;채워짐&apos;의 순간은 시각적으로
          임팩트 있지만, 창문이 열리면 메시지가 단절되어 브랜드 기억 지속성이
          약할 수 있으며, QR코드 참여 방식의 참여 이유가 &apos;브랜드 경험&apos;보다
          개인적 재미에 치우쳐 브랜드 충성도나 구매로 이어지는 연결 고리가
          약함.
        </p>
      </div>
    </div>
  );
}

export default ReflectionConsistencySection;
