import React from "react";

interface NoReportProps {
  width?: number;
  height?: number;
}

const NoReport = ({ width = 80, height = 80 }: NoReportProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="27.3633"
        y="12"
        width="40"
        height="46.6667"
        rx="4.64516"
        transform="rotate(4.13172 27.3633 12)"
        fill="#AAACB2"
      />
      <rect
        x="13"
        y="21.6662"
        width="40"
        height="46.6667"
        rx="4.64516"
        fill="#DDDEE0"
      />
      <path
        d="M22.2891 31.7321H45.5149"
        stroke="#AAACB2"
        strokeWidth="2.88"
        strokeLinecap="round"
      />
      <path
        d="M22.2891 39.7299H45.5149"
        stroke="#AAACB2"
        strokeWidth="2.88"
        strokeLinecap="round"
      />
      <path
        d="M22.2891 47.7318H38.5471"
        stroke="#AAACB2"
        strokeWidth="2.88"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NoReport;
