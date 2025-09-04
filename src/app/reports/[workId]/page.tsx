"use client";

import React from "react";
import DesktopReport from "./desktop/DesktopReport";
import Header from "@/components/common/Header";
import Footer from "@/app/home/components/Footer";
import MobileReport from "./mobile/MobileReport";
import { useIsMobile } from "@/hooks/useIsMobile";

function page() {
  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="min-h-[calc(100vh-80px)]">
        {isMobile ? <MobileReport /> : <DesktopReport />}
      </div>
      <Footer />
    </div>
  );
}

export default page;
