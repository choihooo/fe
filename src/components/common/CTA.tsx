import React from "react";

interface CTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function CTA({ children, className = "", ...props }: CTAProps) {
  return (
    <button
      className={`px-8 py-3 rounded-[30px] bg-blue-main font-T04-SB text-blue-50 hover:bg-blue-600 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default CTA;
