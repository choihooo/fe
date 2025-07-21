import React from "react";

interface ReportIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const ReportIcon: React.FC<ReportIconProps> = ({
  width = 31,
  height = 35,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect y="5" width="26" height="30" rx="3" fill="#256AFF" />
      <path
        d="M5 12H21"
        stroke="#BBD1FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 17H21"
        stroke="#BBD1FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 22H16"
        stroke="#BBD1FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="26" cy="5" r="5" fill="#BBD1FF" />
      <path d="M24 5H28" stroke="#256AFF" strokeLinecap="round" />
      <path
        d="M25.9961 7.00391L25.9961 3.00391"
        stroke="#256AFF"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ReportIcon;
