"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { cn } from "@/utils/cn";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import ProfileDropdown from "./ProfileDropdown";
import { logout } from "@/app/_apis/auth";

interface HeaderProps {
  theme?: "dark" | "light";
}

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "홈", href: "/home" },
  { id: "application", label: "신청하기", href: "/application" },
  { id: "report", label: "내 리포트", href: "/report" },
];

function Header({ theme }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, profile } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const isHome = pathname === "/home";
  const appliedTheme = theme ?? (isHome ? "dark" : "light");

  const bgClass = appliedTheme === "dark" ? "bg-transparent" : "bg-white";

  const getItemClassName = (itemId: string) => {
    const isActive =
      itemId === "application"
        ? pathname.startsWith("/application")
        : pathname === NAV_ITEMS.find((item) => item.id === itemId)?.href;

    return cn(
      "px-[15px] py-[10px] font-B02-M",
      appliedTheme === "dark"
        ? "text-gray-200 hover:text-white"
        : "text-gray-500 hover:text-gray-900",
      isActive && ["font-B02-SB", "text-blue-main"]
    );
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      alert("로그아웃을 재시도 해주세요");
    }
    localStorage.removeItem("profileImage");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");

    window.location.href = "/login";
  };

  return (
    <header
      className={cn(
        "w-full flex justify-between px-4 py-3 sm:px-[106px] sm:py-5",
        bgClass
      )}
    >
      <div className="flex items-center">
        <div className="py-[6px] sm:py-[11px]">
          <Link href="/" className="cursor-pointer">
            <Logo theme={appliedTheme} />
          </Link>
        </div>

        <nav
          className="hidden sm:flex gap-3 sm:gap-5 sm:ml-[61px] ml-3"
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
      {isLoggedIn ? (
        <div className="relative group hidden sm:inline-block mr-[14px]">
          <img
            src={profile?.profileImage || "/default-profile.png"}
            alt="프로필"
            className="w-[38px] h-[38px] rounded-full object-cover cursor-pointer"
            onClick={() => setDropdownOpen((v) => !v)}
          />
          {dropdownOpen && (
            <ProfileDropdown
              dropdownRef={dropdownRef as React.RefObject<HTMLDivElement>}
              onLogout={handleLogout}
            />
          )}
        </div>
      ) : (
        <Link
          href="/login"
          className={cn(
            "px-[15px] py-[10px] font-B02-SB hidden sm:inline-block",
            appliedTheme === "dark"
              ? "text-gray-200 hover:text-white"
              : "text-gray-500 hover:text-gray-900"
          )}
          aria-label="로그인"
        >
          로그인
        </Link>
      )}
      {/* 모바일 메뉴 버튼 */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-9 h-9 ml-2"
        aria-label="메뉴 열기"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-gray-700 mb-1" />
        <span className="block w-6 h-0.5 bg-gray-700 mb-1" />
        <span className="block w-6 h-0.5 bg-gray-700" />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
          <div className="flex justify-between items-center px-4 py-3 bg-white">
            <Logo theme="light" />
            <button
              className="w-8 h-8 flex items-center justify-center"
              aria-label="메뉴 닫기"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="block w-6 h-0.5 bg-gray-700 rotate-45 absolute"
                style={{ marginTop: 12 }}
              />
              <span
                className="block w-6 h-0.5 bg-gray-700 -rotate-45 absolute"
                style={{ marginTop: 12 }}
              />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 py-6 bg-white flex-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "py-3 text-lg font-B02-M border-b border-gray-200",
                  pathname === item.href && "font-B02-SB text-blue-main"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {isLoggedIn ? (
              <div className="py-3 relative">
                <img
                  src={profile?.profileImage || "/default-profile.png"}
                  alt="프로필"
                  className="w-9 h-9 rounded-full object-cover border border-gray-300 cursor-pointer"
                  onClick={() => setDropdownOpen((v) => !v)}
                />
                {dropdownOpen && (
                  <ProfileDropdown
                    dropdownRef={dropdownRef as React.RefObject<HTMLDivElement>}
                    onLogout={handleLogout}
                  />
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="py-3 text-lg font-B02-SB text-gray-700"
                aria-label="로그인"
                onClick={() => setMenuOpen(false)}
              >
                로그인
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
