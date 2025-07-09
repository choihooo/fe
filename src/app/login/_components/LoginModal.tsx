import React from "react";

const LoginModal = () => {
  return (
    <div className="absolute right-0 mt-9 bg-white rounded-2xl w-[172px] z-50">
      <p className="px-4 pt-4 pb-3 flex items-start text-gray-800 font-C01-R hover:bg-gray-100 hover:font-B03-M">
        프로필 정보
      </p>
      <p className="px-4 pt-4 pb-3 flex items-start text-gray-800 font-C01-R hover:bg-gray-100 hover:font-B03-M">
        로그아웃{" "}
      </p>
    </div>
  );
};

export default LoginModal;
