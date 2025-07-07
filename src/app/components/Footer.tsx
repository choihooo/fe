import Insta from "../assets/icons/Insta";
import TopRightArrow from "../assets/icons/TopRightArrow";

function Footer() {
  return (
    <div className="flex px-[120px] py-[70px] items-start flex-col">
      <div className="w-full justify-between flex flex-row">
        <div className="text-gray-800 font-T01-SB"> 수상한 녀석들</div>
        <a
          href="https://www.instagram.com/soosanghan.official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Insta />
        </a>
      </div>

      <a
        href="https://forms.gle/CRLShaTW7ECVggKXA"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-[52px] flex flex-row items-center cursor-pointer hover:text-gray-900 text-gray-600 font-B01-M"
      >
        문의사항
        <TopRightArrow />
      </a>

      <div className="mt-[10px] flex flex-row w-full justify-between">
        <div className="text-gray-800 flex flex-row font-B01-M gap-7 cursor-pointer">
          <a
            href="https://valley-tenor-1ca.notion.site/223f3199866980549056cc5ff8a4d6c0?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            개인정보 처리방침
          </a>
          <a
            href=" https://valley-tenor-1ca.notion.site/223f31998669801d99cdddfe1b4c4046?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            서비스 이용약관
          </a>
        </div>

        <p className="text-gray-600 font-B01-M">
          © 수상한 녀석들. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}

export default Footer;
