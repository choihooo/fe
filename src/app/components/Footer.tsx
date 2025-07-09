import { Insta, TopRightArrow } from "../../../public";

function Footer() {
  return (
    <div className="flex px-4 sm:px-[120px] py-8 sm:py-[70px] items-start flex-col w-full">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
        <div className="text-gray-800 font-T01-SB text-base sm:text-lg"> 수상한 녀석들</div>
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
        className="mt-6 sm:mt-[52px] flex flex-row items-center cursor-pointer hover:text-gray-900 text-gray-600 font-B01-M text-sm sm:text-base"
      >
        문의사항
        <TopRightArrow />
      </a>

      <div className="mt-2 sm:mt-[10px] flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-0">
        <div className="text-gray-800 flex flex-col sm:flex-row font-B01-M gap-2 sm:gap-7 cursor-pointer text-xs sm:text-base">
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

        <p className="text-gray-600 font-B01-M text-xs sm:text-base">
          © 수상한 녀석들. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}

export default Footer;
