import React from "react";
import Tip from "../Tip";

interface NotesSectionProps {
  notes: string[];
  subBrands?: string[];
  tipContent: {
    title: string;
    content: string;
  };
}

function NotesSection({ notes, subBrands, tipContent }: NotesSectionProps) {
  return (
    <div className="mt-[40px]">
      <div className="p-[30px] border border-gray-200 rounded-[20px]">
        <div className="font-T03-SB text-gray-900 mb-[32px]">유의 및 참고사항</div>
        
        <div className="space-y-[8px]">
          {notes.map((note, index) => (
            <div key={index} className="font-T04-R text-gray-500">
              • {note}
            </div>
          ))}
        </div>
        
        {subBrands && (
          <div className="mt-[16px]">
            <div className="font-T04-SB text-gray-700 mb-[8px]">[서브 브랜드]</div>
            <div className="font-T04-R text-gray-500">
              {subBrands.join(", ")}
            </div>
          </div>
        )}
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

export default NotesSection;
