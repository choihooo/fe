import Header from "@/components/common/Header";
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
