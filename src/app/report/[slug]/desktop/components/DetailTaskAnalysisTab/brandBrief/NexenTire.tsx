import Tip from "../../Tip";

function NexenTire() {
  return (
    <div>
      <div className="text-gray-900 font-T02-B mt-[108px] mb-[52px]">
        브리프 분석
      </div>

      <div>
        {/* 브랜드 소개 섹션 */}
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">브랜드 소개</div>

          <div className="space-y-[20px]">
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                1942년
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  넥센타이어 설립
                </div>
                <div className="space-y-[4px]">
                  <div className="font-T04-R text-gray-500">
                    - 글로벌 타이어 제조업체
                  </div>
                  <div className="font-T04-R text-gray-500">
                    - 안전과 성능을 최우선으로 하는 기술력
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          {/* 브랜드 소개 팁 */}
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 브랜드 핵심 가치
            </div>
            <div className="font-B01-M text-gray-900">
              넥센타이어는 80년 이상의 역사를 바탕으로 
              안전과 성능을 최우선으로 하는 기술력을 바탕으로 한 글로벌 타이어 브랜드입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NexenTire;
