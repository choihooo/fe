import { useIsMobile } from "@/hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-5 py-[10px] rounded-[30px] border ${
          isMobile ? "font-B03-M " : "font-B02-M"
        } cursor-pointer
        ${
          selected
            ? " border-blue-main text-blue-main bg-blue-50"
            : ` border-gray-200 text-gray-800 hover:bg-gray-50 hover:text-gray-900 ${
                isMobile ? "bg-gray-50 border-gray-200" : ""
              }`
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Chip;
