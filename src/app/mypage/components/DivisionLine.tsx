import React from "react";

interface DivisionLineProps {
  marginTop?: number;
  marginBottom?: number;
}

function DivisionLine({ marginTop = 0, marginBottom = 0 }: DivisionLineProps) {
  const style = {
    marginTop: `${marginTop}px`,
    marginBottom: `${marginBottom}px`,
  };

  return (
    <div className="w-full h-[1.4px] bg-gray-100 select-none" style={style} />
  );
}

export default DivisionLine;
