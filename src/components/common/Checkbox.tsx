import React, { useState } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function Checkbox({
  checked,
  onChange,
  disabled = false,
  className,
  ariaLabel = "체크박스",
}: CheckboxProps) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!disabled) {
      onChange(!checked);
    }
  };

  let icon: React.ReactNode;
  if (checked) {
    icon = (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="26" height="26" rx="5" fill="#256AFF" />
        <path
          d="M7 12.4706L11.7143 17L19 10"
          stroke="#FAFAFA"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (hovered && !disabled) {
    icon = (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="25" height="25" rx="4.5" fill="#F5F5F5" />
        <rect
          x="0.5"
          y="0.5"
          width="25"
          height="25"
          rx="4.5"
          stroke="#DDDEE0"
        />
      </svg>
    );
  } else {
    icon = (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="25" height="25" rx="4.5" fill="#FAFAFA" />
        <rect
          x="0.5"
          y="0.5"
          width="25"
          height="25"
          rx="4.5"
          stroke="#DDDEE0"
        />
      </svg>
    );
  }

  return (
    <button
      role="checkbox"
      className={className}
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      tabIndex={0}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        outline: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
    </button>
  );
}
