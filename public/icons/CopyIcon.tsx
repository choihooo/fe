import React from "react";

interface CopyIconProps {
  size?: number;
  className?: string;
}

const CopyIcon: React.FC<CopyIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="4.03203"
        y="6.53398"
        width="12.6"
        height="14.6"
        rx="1.3"
        fill="#F5F5F5"
        stroke="#95969B"
        strokeWidth="1.4"
      />
      <rect
        x="7.36797"
        y="3.2"
        width="12.6"
        height="14.6"
        rx="1.3"
        fill="#F5F5F5"
        stroke="#95969B"
        strokeWidth="1.4"
      />
    </svg>
  );
};

export default CopyIcon;
