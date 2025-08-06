"use client";

import ApplicationFunnel from "./Funnel";

import Header from "@/components/common/Header";

export default function Application() {
  return (
    <div className="min-h-screen bg-white sm:bg-gray-100">
      <Header />
      <div className="flex sm:justify-center sm:items-center min-h-[calc(100vh-50px)]">
        <ApplicationFunnel />
      </div>
    </div>
  );
}
