import React from "react";

interface MyReportIconProps {
  width?: number;
  height?: number;
}

const MyReportIcon = ({ width = 24, height = 28 }: MyReportIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 28"
      fill="none"
    >
      <rect width="24" height="28" rx="2.7871" fill="#256AFF" />
      <path
        d="M5.57422 6.03871H19.5097"
        stroke="#BBD1FF"
        strokeWidth="1.728"
        strokeLinecap="round"
      />
      <path
        d="M5.57422 10.8387H19.5097"
        stroke="#BBD1FF"
        strokeWidth="1.728"
        strokeLinecap="round"
      />
      <path
        d="M5.57422 15.6387H15.3291"
        stroke="#BBD1FF"
        strokeWidth="1.728"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MyReportIcon;
