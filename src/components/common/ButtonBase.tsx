type Size = "S" | "M" | "L";

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  size?: Size;
  className?: string;
}

const sizeClasses: Record<Size, string> = {
  S: "px-[22px] ",
  M: "px-[80px] ",
  L: "px-[156px]",
};

const ButtonBase = ({
  label,
  size = "M",
  className = "",
  ...props
}: ButtonBaseProps) => {
  return (
    <button
      className={`
        rounded-[10px] font-B02-SB bg-blue-main text-blue-50 py-3
        hover:bg-blue-600 disabled:bg-blue-200 disabled:cursor-default cursor-pointer
        ${sizeClasses[size]} ${className}
      `.trim()}
      {...props}
    >
      {label}
    </button>
  );
};

export const NextButton = (props: Omit<ButtonBaseProps, "label">) => (
  <ButtonBase {...props} label="다음" />
);

export const CompleteButton = (props: Omit<ButtonBaseProps, "label">) => (
  <ButtonBase {...props} label="완료" />
);

export default ButtonBase;
