import React from "react";
import DesktopReport from "./desktop/DesktopReport";
import Header from "@/components/common/Header";
import Footer from "@/app/home/components/Footer";

function page() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="min-h-[calc(100vh-80px)]">
        <DesktopReport />
      </div>
      <Footer />
    </div>
  );
}

export default page;
