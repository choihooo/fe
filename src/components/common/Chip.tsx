interface ChipProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  children,
  selected = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-5 py-[10px] rounded-[30px] border font-B02-SB cursor-pointer
        ${
          selected
            ? " border-blue-main text-blue-main bg-blue-50"
            : " border-gray-200 bg-white text-gray-800 hover:bg-gray-50 hover:text-gray-900"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Chip;
