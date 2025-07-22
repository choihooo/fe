"use client";

import React, { useEffect, useState } from "react";
import { useFunnel } from "@use-funnel/browser";
import { ContestSelectionStep } from "./components/steps/ContestSelectionStep";
import { Step1, Step2, Step3 } from "./components/steps";

export default function ApplicationFunnel() {
  const [mounted, setMounted] = useState(false);
  type StepKey = "contest-select" | "step1" | "step2" | "step3";

  const funnel = useFunnel<{
    "contest-select": Record<string, never>;
    step1: Record<string, never>;
    step2: Record<string, never>;
    step3: Record<string, never>;
  }>({
    id: "application-funnel-mixed",
    steps: {
      "contest-select": { parse: (v: unknown) => v as Record<string, never> },
      step1: { parse: (v: unknown) => v as Record<string, never> },
      step2: { parse: (v: unknown) => v as Record<string, never> },
      step3: { parse: (v: unknown) => v as Record<string, never> },
    },
    initial: {
      step: "contest-select" as StepKey,
      context: {},
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

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
