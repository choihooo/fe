import React from "react";
import { Google, KaKao, Naver } from "../../../public";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[434px] h-[347px] rounded-[20px] px-[47px] py-[52px]">
        <p className="text-gray-900 font-T01-SB"> 로그인 </p>

        <div className="mt-[34px]">
          <div className="flex pl-5 pr-[127px] py-3 w-full items-center justify-between rounded-[10px] bg-[#FEE500] cursor-pointer">
            <KaKao />
            <span className="text-black/85 text-center font-B02-M">
              {" "}
              카카오 로그인{" "}
            </span>
          </div>

          <div className="flex mt-[15px] pl-5 pr-[134px] py-3 w-full items-center justify-between rounded-[10px] bg-[#FFF] border border-[#E7E7E7] cursor-pointer">
            <Google />
            <span className="text-black/85 text-center font-B02-M">
              {" "}
              구글 로그인
            </span>
          </div>

          <div className="flex mt-[15px] pl-5 pr-[127px] py-3 w-full items-center justify-between rounded-[10px] bg-[#03C75A] cursor-pointer">
            <Naver />
            <span className="text-[#fff] text-center font-B02-M">
              {" "}
              네이버 로그인{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
