"use client";

import React from "react";
import { useFunnel } from "@use-funnel/browser";
import { ContestSelectionStep } from "./components/steps/ContestSelectionStep";
import { Step1, Step2, Step3 } from "./components/steps";

export default function ApplicationFunnel() {
  type StepKey = "contest-select" | "step1" | "step2" | "step3";

  const funnel = useFunnel<{
    "contest-select": {};
    step1: {};
    step2: {};
    step3: {};
  }>({
    id: "application-funnel-mixed",
    steps: {
      "contest-select": { parse: (v: unknown) => v as {} },
      step1: { parse: (v: unknown) => v as {} },
      step2: { parse: (v: unknown) => v as {} },
      step3: { parse: (v: unknown) => v as {} },
    },
    initial: {
      step: "contest-select" as StepKey,
      context: {},
    },
  });

  switch (funnel.step) {
    case "contest-select":
      return (
        <ContestSelectionStep
          onNext={() => funnel.history.push("step1" as StepKey, (prev) => prev)}
        />
      );
    case "step1":
      return (
        <Step1
          onNext={() => funnel.history.push("step2" as StepKey, (prev) => prev)}
          onPrev={() => funnel.history.back()}
          stepNumber={1}
          totalSteps={3}
        />
      );
    case "step2":
      return (
        <Step2
          onNext={() => funnel.history.push("step3" as StepKey, (prev) => prev)}
          onPrev={() => funnel.history.back()}
          stepNumber={2}
          totalSteps={3}
        />
      );
    case "step3":
      return (
        <Step3
          onPrev={() => funnel.history.back()}
          stepNumber={3}
          totalSteps={3}
        />
      );
    default:
      return null;
  }
}
