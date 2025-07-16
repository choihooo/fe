'use client'

import { Suspense } from "react";
import Loading from "@/components/common/Loading";
import OAuthCallbackClient from "./components/OAuthCallbackClient";

export default function OAuthCallbackPage() {
  return (
    <Suspense fallback={<Loading />}>
      <OAuthCallbackClient />
    </Suspense>
  );
}
