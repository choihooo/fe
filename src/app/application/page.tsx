"use client";

import ApplicationFunnel from "./Funnel";
import { AuthGuard } from "@/components/common/AuthGuard";
import Header from "@/components/common/Header";

export default function Application() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
          <ApplicationFunnel />
        </div>
      </div>
    </AuthGuard>
  );
}
