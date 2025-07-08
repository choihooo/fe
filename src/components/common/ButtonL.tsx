import React from "react";

interface ButtonLProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function ButtonL({ children, className = "", ...props }: ButtonLProps) {
  return (
    <button
      className={`text-center py-3 rounded-[10px] bg-blue-main font-B02-SB text-blue-50 hover:bg-blue-600 disabled:bg-blue-200 disabled:cursor-default cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonL;
