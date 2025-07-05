"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { cn } from "@/utils/cn";

interface HeaderProps {
  theme?: "dark" | "light";
}

const NAV_ITEMS = [
  { id: "home", label: "홈", href: "/" },
  { id: "apply", label: "신청하기", href: "/apply" },
  { id: "report", label: "내 리포트", href: "/report" },
];

function Header({ theme = "dark" }: HeaderProps) {
  const pathname = usePathname();

  const getItemClassName = (itemId: string) => {
    const isActive =
      pathname === NAV_ITEMS.find((item) => item.id === itemId)?.href;
    return cn(
      "px-[15px] py-[10px] font-B02-M",
      theme === "dark"
        ? "text-gray-200 hover:text-white"
        : "text-gray-500 hover:text-gray-900",
      isActive && ["font-B02-SB", "text-blue-main"]
    );
  };

  return (
    <header
      className={"w-full flex px-[106px] py-5 justify-between bg-transparent"}
    >
      <div className="flex">
        <div className="py-[11px]">
          <Link href="/" className="cursor-pointer">
            <Logo theme={theme} />
          </Link>
        </div>
        <nav
          className="flex gap-5 ml-[61px]"
          role="navigation"
          aria-label="메인 네비게이션"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={getItemClassName(item.id)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <Link
        href="/login"
        className={cn(
          "px-[15px] py-[10px] font-B02-SB",
          theme === "dark"
            ? "text-gray-200 hover:text-white"
            : "text-gray-500 hover:text-gray-900"
        )}
        aria-label="로그인"
      >
        로그인
      </Link>
    </header>
  );
}

export default Header;
