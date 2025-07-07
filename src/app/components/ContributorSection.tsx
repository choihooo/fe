import Image from "next/image";

const contributors = [
  {
    name: "이현수",
    message: (
      <>
        공모전 출품 환경을 <br />
        개선하고 싶었습니다
      </>
    ),
    imageSrc: "/image/landing/HSpic.png",
    imageAlt: "현수사진",
    description: (
      <>
        프로젝트 리더 <br />
        DCA, KoSAC 등 국내 공모전 수상 경험
      </>
    ),
  },
  {
    name: "우준식",
    message: (
      <>
        가장 중요한 것은 <br />
        탈락 이후의 선택
      </>
    ),
    imageSrc: "/image/landing/JSpic.png",
    imageAlt: "준식사진",
    description: (
      <>
        한광아 9기 최우수 졸업생 <br />
        국내 공모전 수상경력 11회 <br />
        클리오, 뉴욕 페스티벌, 몽트뢰 국제광고제 수상
      </>
    ),
  },
  {
    name: "신민서",
    message: (
      <>
        수상 뒤에는 철저한 <br />
        분석이 따라야 합니다
      </>
    ),
    imageSrc: "/image/landing/MSpic.png",
    imageAlt: "민서사진",
    description: (
      <>
        연합 광고동아리 애드컬리지 66대 회장 <br />
        연합 공모전 동아리 빅프라이즈 9기 회장 <br />
        국내 공모전 수상경력 9회 <br />
        클리오, 뉴욕 페스티벌, 몽트뢰 국제광고제 수상
      </>
    ),
  },
];

function ContributorSection() {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 py-[150px] px-[120px]">
      <div className="text-black font-bold font-default text-[50px]/[70px]">
        수상한 녀석들을 소개합니다
      </div>
      <div className="text-gray-600 font-T02-SB mt-6">
        출품자였던 대학생 3인의 경험을 담아 출품자들을 위한 리포트를
        제작했습니다.
      </div>

      <div className="mt-20 flex items-center gap-[30px] w-[1200px]">
        {contributors.map((c, i) => (
          <div
            key={i}
            className="w-[380px] h-[502px] rounded-[20px] bg-white shadow-custom-light flex justify-center"
          >
            <div className="flex flex-col mt-9 items-center">
              <div className="w-[62px] h-8 py-1 px-[10px] rounded-[8px] bg-blue-50 flex items-center justify-center">
                <p className="text-blue-main font-B02-M">{c.name}</p>
              </div>
              <p className="mt-5 text-black font-T02-B text-center">
                {c.message}
              </p>

              <div className="mt-11 w-[130px] h-[130px] bg-blue-100 rounded-full relative overflow-hidden">
                <Image
                  src={c.imageSrc}
                  alt={c.imageAlt}
                  width={105}
                  height={121}
                  className={`absolute left-1/2 -translate-x-1/2 ${
                    c.name === "우준식" ? "bottom-[-11px]" : "bottom-0"
                  }`}
                />
              </div>

              <div className="mt-10 text-gray-300 font-B02-M text-start">
                {c.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[124px] w-[1200px]">
        <div className="flex items-start justify-between">
          <div className="text-black font-semibold font-default text-[36px]">
            <span className="text-blue-main">현업자의 시선을 반영해</span>{" "}
            <br />
            실전에서 통하는 리포트를 <br />
            완성했습니다
          </div>

          <div className="flex pl-[49px] w-[706px] h-[318px] items-start flex-row rounded-[30px] bg-white shadow-custom-light">
            <div className="flex flex-col flex-1 mt-10">
              <div className="w-[184px] h-10 py-2 px-[14px] rounded-[12px] bg-blue-50 flex items-center justify-center">
                <p className="text-blue-main font-B02-M">
                  ThePR (PR대행사) 대표
                </p>
              </div>

              <div className="mt-[19px] text-black font-default font-bold text-[40px]">
                김진희
              </div>

              <div className="mt-10 text-gray-600 font-B01-M">
                <div className="flex gap-[14px] truncate">
                  <span>-</span>
                  <span>브랜드 PR 20년, 클라이언트 OO여개</span>
                </div>
                <div className="flex gap-[14px]">
                  <span>-</span>
                  <span>현 서울시 브랜드 홍보 위원</span>
                </div>
                <div className="flex gap-[14px]">
                  <span>-</span>
                  <span>다수 광고, PR 공모전 심사 참여</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/image/landing/JHpic.png"
                alt="진희님사진"
                width={372}
                height={318}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributorSection;
