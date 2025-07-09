import { useState } from "react";
import { LeftArrow, NoFillStar, RightArrow, Star } from "../../../public";

const reviewData = [
  {
    title: "KoSAC 파이널리스트 수상",
    content:
      "출품 이후 최고의논문작가시가 공모전의 마무리라는 점을 알려주었습니다",
    university: "양지대학교",
    name: "이연주",
    rating: 5,
  },
  {
    title: "KoSAC 파이널리스트 수상",
    content:
      "출품 이후 최고의논문작가시가 공모전의 마무리라는 점을 알려주었습니다",
    university: "양지대학교",
    name: "이연주",
    rating: 3,
  },
  {
    title: "KoSAC 파이널리스트 수상",
    content:
      "출품 이후 회고하는과정까지가 공모전의 마무리라는 점을 알게되었습니다출품 이후 회고하는과정까지가 공모전의 마무리라는 점을 알게되었습니다",
    university: "양지대학교",
    name: "이연주",
    rating: 3,
  },
];

function BetaReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, reviewData.length - 1));
  };

  return (
    <div className="py-12 sm:py-[120px] px-4 sm:pl-[122px] sm:pr-[118px] flex flex-col w-full items-center sm:items-start justify-center gap-8 sm:gap-[36px]">
      <div className="w-full bg-blue-50 rounded-[20px] sm:rounded-[30px] pt-10 sm:pt-[65px] pb-8 sm:pb-[40px] overflow-hidden flex flex-col items-center">
        <div className="w-full flex flex-col sm:flex-row items-end justify-between px-0 sm:px-[58px] gap-4 sm:gap-0">
          <div className="text-black text-[22px] sm:text-[36px] font-default font-semibold text-center sm:text-left w-full">
            KoSAC 공모전 <br />
            출품자를 대상으로 <br />
            베타 테스트를 진행했습니다
          </div>
          <div className="flex flex-row gap-4 sm:gap-[21px] cursor-pointer justify-center sm:justify-end mt-4 sm:mt-0">
            <div onClick={handlePrev}>
              <LeftArrow />
            </div>
            <div onClick={handleNext}>
              <RightArrow />
            </div>
          </div>
        </div>

        <div className="relative mt-8 sm:mt-[45px] w-full flex flex-col items-center">
          <div className="hidden sm:block">
            <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-[#E9F0FF] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-[#E9F0FF] to-transparent z-10 pointer-events-none" />
            <div
              className="flex px-[58px] gap-10 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${
                  currentIndex * 530
                }px + 50% - 245px))`,
              }}
            >
              {reviewData.map((review, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={idx}
                    className={`shrink-0 rounded-2xl px-[30px] py-[26px] flex flex-col transition-all duration-300
                      ${
                        isActive
                          ? "w-[490px] h-[280px] bg-blue-main text-white font-T02-B"
                          : "w-[442px] h-[252px] bg-gray-200 text-gray-500 font-T03-B"
                      }`}
                  >
                    <div className="flex flex-col flex-1">
                      <div className="flex gap-[4px] mb-[8px]">
                        {Array.from({ length: 5 }).map((_, i) =>
                          i < review.rating ? (
                            <Star
                              key={i}
                              fill={isActive ? "#BBD1FF" : "#FAFAFA"}
                            />
                          ) : (
                            <StarNoFIll
                              key={i}
                              fill={isActive ? "#6D9BFF" : "#ECECEE"}
                            />
                          )
                        )}
                      </div>
                      <div
                        className={`${isActive ? "font-T02-B" : "font-T03-B"}`}
                      >
                        {review.title}
                      </div>
                      <div
                        className={`${
                          isActive
                            ? "mt-auto font-B02-M"
                            : "mt-[60px] font-B03-M"
                        }`}
                      >
                        {review.content}
                      </div>
                    </div>
                    <div
                      className={`${
                        isActive
                          ? "font-B02-M text-blue-100 text-end"
                          : "font-B03-M text-gray-300 text-end"
                      }`}
                    >
                      {review.university} | {review.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:hidden w-full flex items-center justify-center">
            {(() => {
              const review = reviewData[currentIndex];
              return (
                <div className="shrink-0 rounded-2xl px-4 py-6 flex flex-col w-[90%] max-w-[400px] h-auto bg-blue-main text-white font-T02-B transition-all duration-300 mx-auto">
                  <div className="flex flex-col flex-1">
                    <div className="flex gap-[4px] mb-[8px]">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < review.rating ? (
                          <Star key={i} fill="#BBD1FF" />
                        ) : (
                          <StarNoFIll key={i} fill="#6D9BFF" />
                        )
                      )}
                    </div>
                    <div className="font-T02-B text-center">{review.title}</div>
                    <div className="mt-auto font-B02-M text-center">
                      {review.content}
                    </div>
                  </div>
                  <div className="font-B02-M text-blue-100 text-end mt-2">
                    {review.university} | {review.name}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BetaReviewSection;
