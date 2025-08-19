import React from "react";
import Tip from "../Tip";

interface SolutionTasksSectionProps {
  tasks: string[];
  tipContent: {
    title: string;
    content: string;
  };
}

function SolutionTasksSection({ tasks, tipContent }: SolutionTasksSectionProps) {
  return (
    <div className="mt-[40px]">
      <div className="p-[30px] border border-gray-200 rounded-[20px]">
        <div className="font-T03-SB text-gray-900 mb-[32px]">해결 과제</div>
        
        <div className="space-y-[8px]">
          {tasks.map((task, index) => (
            <div key={index} className="font-T04-R text-gray-500">
              • {task}
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
        <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
          <Tip /> {tipContent.title}
        </div>
        <div className="font-B01-M text-gray-900">{tipContent.content}</div>
      </div>
    </div>
  );
}

export default SolutionTasksSection;
