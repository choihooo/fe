interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  className = "",
  error = false,
  ...props
}) => {
  return (
    <input
      type="text"
      className={`
        pl-[18px] pr-[15px] py-3 rounded-[10px]
        border ${
          error
            ? "border-orange-point hover:border-orange-point focus:border-orange-point"
            : "border-gray-200 hover:border-blue-main focus:border-blue-main"
        }
        font-B02-R text-gray-900 placeholder-gray-300
        focus:outline-none
        ${className}
      `}
      {...props}
    />
  );
};

export default TextInput;
