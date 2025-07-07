import Insta from "../assets/icons/Insta";
import TopRightArrow from "../assets/icons/TopRightArrow";

function Footer() {
  return (
    <div className="flex px-[120px] py-[70px] items-start flex-col">
      <div className="w-full justify-between flex flex-row">
        <div className="text-gray-800 font-T01-SB"> 수상한 녀석들</div>
        <Insta />
      </div>

      <div className="mt-[52px] flex flex-row items-center cursor-pointer">
        <div className="text-gray-600 font-B01-M hover:text-gray-900">
          {" "}
          문의사항
        </div>
        <TopRightArrow />
      </div>

      <div className="mt-[10px] flex flex-row w-full justify-between">
        <div className="text-gray-800 flex flex-row font-B01-M gap-7 cursor-pointer">
          <p className="hover:underline"> 개인정보 처리방침</p>
          <p className="hover:underline"> 서비스 이용약관</p>
        </div>

        <p className="text-gray-600 font-B01-M">
          © 수상한 녀석들. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}

export default Footer;
