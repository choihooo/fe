import React from "react";
import { WorkAllEvaluationResponse } from "@/app/_apis/schemas/reportResponse";
import { useWorkAllEvaluation } from "@/hooks/queries";
import Loading from "@/components/common/Loading";

type Item = { subject: string; value: number; description: string };
type AllEvalutionProps = { workId: number };

const AllEvalution = ({ workId }: AllEvalutionProps) => {
  const { data, isLoading, isError } = useWorkAllEvaluation(workId);
  const result: WorkAllEvaluationResponse["result"] | undefined = data?.result;

  if (!result) return <div className="text-gray-600">데이터가 없습니다.</div>;
  const items: Item[] = result
    ? [
        {
          subject: "타겟 적합성",
          value: result.targetScore,
          description: result.target,
        },
        {
          subject: "브랜드 이해도",
          value: result.brandScore,
          description: result.brand,
        },
        {
          subject: "매체 선정",
          value: result.mediaScore,
          description: result.media,
        },
        {
          subject: "문제정의",
          value: result.problemScore,
          description: result.problem,
        },
        {
          subject: "실현 가능성",
          value: result.feasibilityScore,
          description: result.feasibility,
        },
      ]
    : [];

  if (isLoading)
    return (
      <div className="flex items-center justify-center ">
        <Loading />
      </div>
    );
  if (isError)
    return (
      <div className="text-center text-red-500"> 에러가 발생했습니다.</div>
    );

  return (
    <div className="w-full flex flex-col items-start gap-12">
      {items.map((item) => (
        <div key={item.subject}>
          <div className="flex items-center gap-[10px]">
            <div className="inline-flex items-center justify-center rounded-[8px] bg-blue-50 text-blue-main px-3 py-[6px] text-[14px] font-medium leading-none">
              {item.value.toFixed(item.value % 1 === 0 ? 0 : 1)}
            </div>
            <div className="text-gray-800 font-T04-SB">{item.subject}</div>
          </div>
          <p className="mt-[14px] font-B01-M text-gray-800">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllEvalution;
