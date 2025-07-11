import React from "react";

interface RoundButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function RoundButton({ children, className = "", ...props }: RoundButtonProps) {
  return (
    <button
      className={`px-8 py-3 rounded-[30px] bg-blue-main font-T04-SB text-blue-50 hover:bg-blue-600 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default RoundButton;
