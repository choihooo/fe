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
import RoleStep from "./components/steps/RoleStep";
import PurposeStep from "./components/steps/PurposeStep";
import RouteStep from "./components/steps/RouteStep";
import TermsStep from "./components/steps/TermsStep";

export default function SignUpFunnelPage() {
  const [context, setContext] = useState<Partial<경로입력>>({});
  const [purposeEtc, setPurposeEtc] = useState<string>("");
  const [routeEtc, setRouteEtc] = useState<string>("");
  const [terms, setTerms] = useState<{ [key: string]: boolean }>({});

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
          onNext={(checked) => {
            setTerms(checked);
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
          onNext={(route, etc) => {
            setContext((prev) => ({ ...prev, route }));
            setRouteEtc(etc ?? "");
            alert(
              "제출 완료! " +
                JSON.stringify({
                  roles: context.roles!,
                  purpose: context.purpose!,
                  purposeEtc,
                  route,
                  routeEtc: etc,
                  terms,
                })
            );
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
