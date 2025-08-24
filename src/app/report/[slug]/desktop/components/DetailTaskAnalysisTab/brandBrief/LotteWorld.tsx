import Tip from "../../Tip";

function LotteWorld() {
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
                1989년
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  롯데월드 오픈
                </div>
                <div className="space-y-[4px]">
                  <div className="font-T04-R text-gray-500">
                    - 한국 최대 규모의 테마파크
                  </div>
                  <div className="font-T04-R text-gray-500">
                    - 가족과 친구들과 함께하는 즐거운 추억의 공간
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
              롯데월드는 모든 연령대가 함께 즐길 수 있는 테마파크로, 
              가족과 친구들과의 소중한 추억을 만들어주는 브랜드입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LotteWorld;
