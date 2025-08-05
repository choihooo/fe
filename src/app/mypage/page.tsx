"use client";

import UserProfilePanel from "./components/UserProfilePanel";
import Header from "@/components/common/Header";
import { useIsMobile } from "@/hooks/useIsMobile";

function page() {
  const isMobile = useIsMobile();
  return (
    <div className={`min-h-screen ${isMobile ? "bg-white" : "bg-gray-100"}`}>
      <Header />
      <div className="flex sm:items-center sm:justify-center min-h-[calc(100vh-80px)]">
        <UserProfilePanel />
      </div>
    </div>
  );
}

export default page;
