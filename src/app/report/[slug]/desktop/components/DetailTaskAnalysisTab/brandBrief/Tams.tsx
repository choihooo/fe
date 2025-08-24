import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";

function Tams() {
  return (
    <div>
      <div className="text-gray-900 font-T02-B mt-[108px] mb-[52px]">
        브리프 분석
      </div>
      {/* 브랜드 소개 */}
      <div>
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">브랜드 소개</div>
          <div className="font-B01-M text-gray-800">
            크러시(KRUSH)는 반하다, 부수다 라는 뜻의 영단어  Crush 에
            롯데칠성음료의 맥주 브랜드 클라우드(Kloud)의 헤리티지를 담은 알파벳
            K를 더한 단어로, 낡은 관습을 부수고, 새로움으로 매혹한다는 뜻을 담은
            브랜드
          </div>
          <div className="space-y-[20px] mt-[20px]">
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                23년 11월
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  기존의 맥주 브랜드와 선을 긋는{" "}
                  <BlueSpan>나와 가장 가까운 4세대 맥주</BlueSpan> 라는 차별화된
                  컨셉으로 런칭
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>
                    제품 패키지에서도{" "}
                    <BlueSpan>탄산을 제대로 느낄 수 있는</BlueSpan>
                     숄더리스(shoulder-less) 병 디자인에 투명한 크리스탈 커팅을
                    적용하여 <BlueSpan>시각적 청량감</BlueSpan>을 극대화, 캔
                    표면에는 빙산과 눈의 질감을 감각적으로 느낄 수 있는   아이스
                    타일(Ice Tile) 로 눈 속에서 막 꺼낸 캔처럼 차가운 눈 결정의
                    촉감을 강조
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                25년 5월
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  새롭게 출시된 <BlueSpan>풀오픈캔</BlueSpan> 은 특히 일반적인
                  캔맥주와 다른 독특한 캡 구조가 적용됨
                  <br />캔 상단 탭 전체가 시원하게 열리는 형태라 마치{" "}
                  <BlueSpan>작은 맥주잔</BlueSpan>처럼 즐길 수 있고, 캔 입구가
                  넓어 얼음이나 소주, 레몬즙 등을
                  <BlueSpan>섞어 마시기</BlueSpan>에 좋음, 음용 시 맛과 함께
                  <BlueSpan>시각적인 즐거움</BlueSpan>도 느낄 수 있는 것이 특징
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>
                    자사 클라우드대비 22% 높아진 강탄산(탄산볼륨 3.3)으로,{" "}
                    <BlueSpan>국내 맥주 중 가장 높은 탄산압</BlueSpan>을
                    보유하고 있어, 강한 탄산과 시원하고 청량한 맛을 느낄 수 있음
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="font-B01-R text-gray-900">
              - 기존 맥주와 선을 달리하는 ‘4세대 맥주’
              <br />- 청략감과 탄산을 강조하는 패키지 디자인 & 국내 맥주 중 가장
              큰 탄산압
              <br />- 2025년 새롭게 출시된 ‘풀 오픈 캔’
              <br />
              <br /> → 4세대 맥주라는 워딩을 사용하며, 명확한 20대 젊은 세대를
              겨냥한 제품임을 알 수 있어요
              <br /> → 크러시의 가장 큰 제품 USP는 ‘탄산과 청량함’이라는 점을
              지속적으로 이야기해주고 있어요
              <br /> → 새롭게 리뉴얼 된 ‘풀 오픈 캔’ 패키지의 다양한 활용성을
              이야기하며 자랑하듯 이야기하고 있어요
            </div>
          </div>
        </div>
      </div>

      {/* 시장 상황 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">시장 상황</div>

          <div className="space-y-[20px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                국내 맥주시장은 경쟁사의 시장 점유율이 상위권을 차지하는
                양강체제를 이루고 있음
              </div>
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                특히 한국의 주류문화의 특성상 주로 술자리를 함께 하는 사람들
                <BlueSpan>
                  다수의 선호 의견에 따라서 주류 브랜드를 선택
                </BlueSpan>
                하거나,  <BlueSpan>주점에 입점되어있는 제품</BlueSpan> 중에
                고르는 <BlueSpan>관행적인 주문 상황</BlueSpan>이 주가 되어,
                시장에 새롭게 진입하는 제품의 음용 시도가 쉽지 않은 상황
              </div>
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>최근 젊은 층의 음주가 지속 줄어드는 현상을 보이고 있음</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px]">
              - 한국 주류 문화인 ‘다수결 주류 선택’, ‘입점 된 제품 중에 고르는
              관행’으로 인한 신제품의 시장 진입 어려움
              <br />
              - 줄어드는 젊은 세대의 음주
              <br />
              <br />
              → ‘마시던 것만 마시는’ 주류 문화의 관습을 이야기하며, ‘새로운
              제품에 대한 음용 시도’가 직면한 과제임을 유추할 수 있어요
              <br />→ 젊은 세대의 음주가 줄어들며 이러한 어려움을 더욱 키우고
              있다고 볼 수 있어요
            </div>
          </div>
        </div>
      </div>

      {/* 브랜드 상황 및 커뮤니케이션 타깃 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">
            브랜드 상황 및 커뮤니케이션 타깃
          </div>

          <div className="space-y-[20px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로(데이)는 남녀노소 누구나 인지하고 참여하는 문화였으나,
                <BlueSpan>데이마케팅에 대한 일부 소비자들의 피로도</BlueSpan>를
                확인
                <br /> → 이에 따라 데이 참여율이 정체되는 상황
                <br />
                <br />
                특히, <BlueSpan>영타겟(10~20대)</BlueSpan> 사이에서 브랜드의{" "}
                <BlueSpan>감성적 연결 및 선호도 제고</BlueSpan>, 그리고
                빼빼로데이에 대한 <BlueSpan>자발적 참여 유도</BlueSpan>가 핵심
                과제로 부상하고 있음
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div className="font-B01-R">
                높은 인지도와 비례하여 피로도 역시 증가, 부족한 영타겟 감성 연결
                → 빼뺴로 데이의 참여율 저하
              </div>
            </div>
            <br />
            <div className="font-B01-R text-gray-900">
              → 영 타깃이 빼빼로데이에 느끼는 감정, 심리를 분석하여 빼뺴로
              데이가 매력적이게 느껴지게 할 포인트를 찾아보세요
              <br />→ 익숙해진 빼빼로데이를 영 타깃이 신선하게 느낄 수 있는
              새로움이 필요하다는 말이기도 해요
            </div>
          </div>
        </div>
      </div>

      {/* 해결 과제 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">해결 과제</div>

          <div className="space-y-[8px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로데이 시즌(10~11월) 타겟들의 빼빼로데이 참여를 증대시킬 수
                있는 아이디어
              </div>
            </div>{" "}
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로 비시즌(1~9월)에도 브랜드에 활력을 부여하고 이슈업 시킬 수
                있는 아이디어
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              <div>1.&nbsp;</div>
              <div className="">빼빼로데이 참여 증대 아이디어</div>
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              <div>2.</div>
              <div className="">비시즌 브랜드 접점 확대/ 이슈화</div>
            </div>
            <div className="font-B01-R text-blue-main mt-[12px]">
              *1~2 연계 가능
            </div>
            <div className="font-B01-R text-gray-900 mt-[32px]">
              → 강점을 강화하려면 ‘데이’에 집중하거나, 감정을 전하는 타깃 심리에
              주목해볼 필요가 있어요
              <br /> → 약점을 보완하려면 ‘빼빼로’만이 가진 매력을 일상 속에
              자연스럽게 녹여내는 접점을 찾아 보세요
              <br /> <BlueSpan>• 둘 다 가능하면 더 좋겠죠?</BlueSpan>
            </div>
          </div>
        </div>
      </div>

      {/* 유의 및 참고사항 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">
            유의 및 참고사항
          </div>

          <div className="space-y-[8px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로(데이)가 가진{" "}
                <BlueSpan>본질적 가치인 “나눔/연결의 가치”</BlueSpan>는 유지
                필요
                <br />
                현재 빼빼로 브랜드 앰버서더인 스트레이 키즈(Stray Kids) 활용
                가능하나 <BlueSpan>모델 활용이 필수는 아님</BlueSpan>
                <br />
                국내 중심이나, 해외 글로벌 마케팅 확장 포인트가 있다면 추가
                아이디어도 제시 가능
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              <div>-</div>
              <div>
                나눔/연결의 가치 유지 필요, 모델 활용 가능하나 필수 x, 국내
                중심이지만 글로벌 확장 포인트 제시 가능
              </div>
            </div>

            <div className="font-B01-R text-gray-700 mt-[18px]">
              → 아이디어에 나눔/연결을 나타낼 수 있는 요소가 반영되었는지 체크!
              <br />
              → 모델 활용 가능하나, 필수가 아니라는 말은 모델을 굳이 고려할
              필요가 없다는 말으로 해석할 수 있어요.
              <br />→ 국내가 중심이지만 +@로 글로벌 확장도 가능하면 더 좋겠죠?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tams;
