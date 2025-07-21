import React from "react";

type DashLineProps = {
  color?: string;
  width?: number;
  height?: number;
  dash?: number;
  gap?: number;
};

export function DashLine({
  color = "#DDDEE0",
  width = 39,
  height = 2,
  dash = 4,
  gap = 8,
}: DashLineProps) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <line
        y1={height / 2 + 0.1}
        x2={width}
        y2={height / 2 + 0.1}
        stroke={color}
        strokeWidth="1.8"
        strokeDasharray={`${dash} ${gap}`}
      />
    </svg>
  );
} 