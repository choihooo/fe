"use client";

import React, { useState } from "react";
import { useFunnel } from "@use-funnel/browser";

import {
  역할입력_Schema,
  목적입력_Schema,
  경로입력_Schema,
  역할입력,
  목적입력,
  경로입력,
  PurposeEnum,
  RouteEnum,
} from "./types/schemas";
import { onboardUser } from "../_apis";
import {
  PurposeStep,
  RoleStep,
  RouteStep,
  TermsStep,
} from "./components/steps";

export default function SignUpFunnelPage() {
  const [context, setContext] = useState<Partial<경로입력>>({});
  const [purposeEtc, setPurposeEtc] = useState<string>("");
  const [routeEtc, setRouteEtc] = useState<string>("");

  type StepKey = "약관동의" | "역할입력" | "목적입력" | "경로입력";
  type 약관동의타입 = { terms: { [key: string]: boolean } };

  const funnel = useFunnel<{
    약관동의: Partial<약관동의타입 & 역할입력 & 목적입력 & 경로입력>;
    역할입력: Partial<약관동의타입 & 역할입력 & 목적입력 & 경로입력>;
    목적입력: Partial<약관동의타입 & 역할입력 & 목적입력 & 경로입력>;
    경로입력: Partial<약관동의타입 & 역할입력 & 목적입력 & 경로입력>;
  }>({
    id: "sign-up-funnel",
    steps: {
      약관동의: { parse: (v: unknown) => v as 약관동의타입 },
      역할입력: { parse: 역할입력_Schema.parse },
      목적입력: { parse: 목적입력_Schema.parse },
      경로입력: { parse: 경로입력_Schema.parse },
    },
    initial: {
      step: "약관동의" as StepKey,
      context: { terms: {} },
    },
  });

  switch (funnel.step) {
    case "약관동의":
      return (
        <TermsStep
          onNext={() => {
            funnel.history.push("역할입력" as StepKey, (prev) => ({ ...prev }));
          }}
        />
      );
    case "역할입력":
      return (
        <RoleStep
          value={context.roles ?? []}
          onNext={(roles) => {
            setContext({ roles });
            setPurposeEtc("");
            funnel.history.push("목적입력" as StepKey, (prev) => ({
              ...prev,
              roles,
              purpose: PurposeEnum.Enum.CURRENT_ANALYSIS,
            }));
          }}
        />
      );
    case "목적입력":
      return (
        <PurposeStep
          value={context.purpose}
          etcValue={purposeEtc}
          onNext={(purpose, etc) => {
            setContext((prev) => ({ ...prev, purpose }));
            setPurposeEtc(etc ?? "");
            setRouteEtc("");
            funnel.history.push("경로입력" as StepKey, (prev) => ({
              ...prev,
              purpose,
              route: RouteEnum.Enum.INSTA,
            }));
          }}
          onPrev={() => {
            funnel.history.back();
            setPurposeEtc("");
          }}
        />
      );
    case "경로입력":
      return (
        <RouteStep
          value={context.route}
          etcValue={routeEtc}
          onNext={async (route, etc) => {
            setContext((prev) => ({ ...prev, route }));
            setRouteEtc(etc ?? "");
            try {
              await onboardUser({
                role: context.roles!,
                purpose: context.purpose!,
                purposeEtc,
                channel: route,
                channelEtc: etc,
              });
              window.location.href = "/home";
            } catch {
              alert("온보딩에 실패했습니다. 다시 시도해 주세요.");
              localStorage.removeItem("profileImage");
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              localStorage.removeItem("userId");
              window.location.href = "/login";
            }
          }}
          onPrev={() => {
            funnel.history.back();
            setRouteEtc("");
          }}
        />
      );
    default:
      return null;
  }
}
