"use client";
import { useEffect, useRef, useState } from "react";
import { DropDownIcon } from "../../../public";

type DropDownInputProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  options: string[];
};

const DropDownInput = ({
  value,
  onChange,
  placeholder = "",
  options,
}: DropDownInputProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="flex items-center justify-between border border-gray-200 rounded-[10px] py-3 px-[18px] h-[48px] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className={value ? "text-gray-900" : "text-gray-300"}>
          {value || placeholder}
        </span>
        <div className={open ? "rotate-180" : ""}>
          <DropDownIcon />
        </div>
      </div>

      {open && (
        <div className="absolute z-10 mt-[10px] w-[380px] border border-gray-200 bg-white rounded-[10px] overflow-auto h-[240px]">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 pt-4 pb-3 hover:bg-gray-50 cursor-pointer text-gray-800 font-B02-R"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownInput;
