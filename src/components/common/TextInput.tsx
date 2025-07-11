interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ className = "", ...props }) => {
  return (
    <input
      type="text"
      className={`
        pl-[18px] pr-[15px] py-3 rounded-[10px] border border-gray-200 font-B02-R
        text-gray-900 placeholder-gray-300
        hover:border-blue-main
        focus:outline-none focus:border-blue-main
        ${className}
      `}
      {...props}
    />
  );
};

export default TextInput;
