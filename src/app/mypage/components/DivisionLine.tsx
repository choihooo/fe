import React from "react";

interface DivisionLineProps {
  marginTop?: number;
  marginBottom?: number;
  display?: boolean;
}

function DivisionLine({
  marginTop = 0,
  marginBottom = 0,
  display = true,
}: DivisionLineProps) {
  const style = {
    marginTop: `${marginTop}px`,
    marginBottom: `${marginBottom}px`,
  };

  return display ? (
    <div className="w-full h-[1.4px] bg-gray-100 select-none" style={style} />
  ) : null;
}

export default DivisionLine;
