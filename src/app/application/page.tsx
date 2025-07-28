"use client";

import ApplicationFunnel from "./Funnel";

import Header from "@/components/common/Header";

export default function Application() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <ApplicationFunnel />
      </div>
    </div>
  );
}
