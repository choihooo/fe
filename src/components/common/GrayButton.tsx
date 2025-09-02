import React from "react";

interface GrayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
}

function GrayButton({ label, className = "", ...props }: GrayButtonProps) {
  return (
    <button
      className={`
        py-3 rounded-[10px] bg-gray-100 text-gray-700 font-B02-SB
        text-center hover:bg-gray-200
        ${className}
      `.trim()}
      {...props}
    >
      {label}
    </button>
  );
}

export default GrayButton;
