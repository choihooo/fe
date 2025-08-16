import React from "react";
import DesktopReport from "./components/desktop/DesktopReport";
import Header from "@/components/common/Header";

function page() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="min-h-[calc(100vh-80px)]">
        <DesktopReport />
      </div>
    </div>
  );
}

export default page;
