"use client";

import React, { useEffect, useState } from "react";
import { useFunnel } from "@use-funnel/browser";
import { ContestSelectionStep } from "./components/steps/ContestSelectionStep";
import { Step1, Step2, Step3 } from "./components/steps";

export default function ApplicationFunnel() {
  const [mounted, setMounted] = useState(false);

  const funnel = useFunnel<{
    "contest-select": Record<string, never>;
    step1: { contest: "daehong" | "hsad" };
    step2: { contest: "daehong" | "hsad" };
    step3: { contest: "daehong" | "hsad" };
  }>({
    id: "application-funnel-mixed",
    steps: {
      "contest-select": { parse: (v: unknown) => v as Record<string, never> },
      step1: { parse: (v: unknown) => v as { contest: "daehong" | "hsad" } },
      step2: { parse: (v: unknown) => v as { contest: "daehong" | "hsad" } },
      step3: { parse: (v: unknown) => v as { contest: "daehong" | "hsad" } },
    },
    initial: {
      step: "contest-select",
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
          onNext={(contest) => {
            funnel.history.push("step1", { contest });
          }}
        />
      );
    case "step1":
      return (
        <Step1
          onNext={() =>
            funnel.history.push("step2", { contest: funnel.context.contest })
          }
          onPrev={() => funnel.history.back()}
          stepNumber={1}
          totalSteps={3}
          contest={funnel.context.contest}
        />
      );
    case "step2":
      return (
        <Step2
          onNext={() =>
            funnel.history.push("step3", { contest: funnel.context.contest })
          }
          onPrev={() => funnel.history.back()}
          stepNumber={2}
          totalSteps={3}
          contest={funnel.context.contest}
        />
      );
    case "step3":
      return (
        <Step3
          onPrev={() => funnel.history.back()}
          stepNumber={3}
          totalSteps={3}
          contest={funnel.context.contest}
        />
      );
    default:
      return null;
  }
}
