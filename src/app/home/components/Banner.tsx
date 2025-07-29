function Banner() {
  return (
    <div className="py-20 sm:py-[176px] flex justify-center font-bold text-[22px] sm:text-[36px] whitespace-pre font-default px-4 sm:px-0">
      <p className="text-gray-900 text-center sm:hidden">
        출품이 끝났다면, <br />
        <span className="text-blue-main">다음을 준비할 차례입니다.</span>
      </p>

      <div className="hidden sm:flex">
        <p className="text-gray-900">출품이 끝났다면, </p>
        <p className="text-blue-main">다음을 준비할 차례입니다.</p>
      </div>
    </div>
  );
}

export default Banner;
