"use client";

import ApplicationFunnel from "./Funnel";

export default function Application() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)] mt-[44px]">
        <ApplicationFunnel />
      </div>
    </div>
  );
}
