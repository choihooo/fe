import React from "react";
import { StepLayout } from "../common/StepLayout";
import { StepNavigation } from "../common/StepNavigation";
import AP04 from "../../lotties/AP04";

type Step3Props = {
  onPrev: () => void;
  stepNumber?: number;
  totalSteps?: number;
};

export function Step3({ onPrev, stepNumber = 3, totalSteps = 3 }: Step3Props) {
  return (
    <div>
      <StepLayout
        stepNumber={stepNumber}
        totalSteps={totalSteps}
        title="이메일 안내"
        subtitle={
          <>
            ‘내 리포트’ 탭에서 완성된 수상 리포트를 확인할 수 있습니다.
            <br />
            리포트의 코드를 팀원들에게 전달해 공유할 수 있습니다.
          </>
        }
      >
        <div className="rounded-[20px] overflow-hidden">
          <AP04 />
        </div>
      </StepLayout>
      <StepNavigation onNext={() => {}} onPrev={onPrev} />
    </div>
  );
}
