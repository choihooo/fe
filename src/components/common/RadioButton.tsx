import React from "react";

// 상태 타입 정의
export type RadioButtonState = "unselected" | "selected";

interface RadioButtonProps {
  state: RadioButtonState;
  className?: string;
}

export function RadioButton({ state, className }: RadioButtonProps) {
  if (state === "selected") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="11" cy="11" r="10.5" fill="#FAFAFA" stroke="#DDDEE0" />
        <circle cx="11" cy="11" r="6" fill="#256AFF" />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="11" cy="11" r="10.5" fill="#FAFAFA" stroke="#DDDEE0" />
    </svg>
  );
}
