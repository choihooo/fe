"use client";
import TextInput from "@/components/common/TextInput";
import { useSubmitStore } from "@/store/useSubmitStore";
import React, { useEffect, useState } from "react";
import { DeleteIcon, PlusIcon } from "../../../../../public";

interface TeamMember {
  name: string;
  email: string;
}

const TeamInformation = () => {
  const setTeamInfoFilled = useSubmitStore((s) => s.setTeamInfoFilled);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: "", email: "" },
  ]);

  useEffect(() => {
    const isApplicantFilled = applicantName.trim() && applicantEmail.trim();
    const areMembersFilled = teamMembers.every(
      (m) => m.name.trim() && m.email.trim()
    );

    setTeamInfoFilled(!!isApplicantFilled && !!areMembersFilled);
  }, [applicantName, applicantEmail, teamMembers]);

  const handleAddMember = () => {
    setTeamMembers((prev) => [...prev, { name: "", email: "" }]);
  };

  const handleMemberChange = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const handleRemoveMember = (index: number) => {
    setTeamMembers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full px-[325px] mt-[134px]">
      <div className="text-gray-900 font-T02-B">팀원 정보</div>
      <div className="mt-[14px] text-gray-300 font-B02-M">
        수상 리포트 제작이 완료되면 팀원들에게도 이메일로 리포트 코드를
        전달합니다.
      </div>

      <div className="mt-[50px]">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-[10px]">
            <div className="text-gray-800 font-B01-M">신청자 이름</div>
            <TextInput
              placeholder="이름을 입력하세요."
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              className="w-[237px]"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="text-gray-800 font-B01-M">신청자 이메일</div>
            <TextInput
              placeholder="이메일을 입력하세요"
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
              className="w-[486px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-11 space-y-11">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-row w-full gap-5">
            {/* 이름 */}
            <div className="flex flex-col gap-[10px]">
              <div className="text-gray-800 font-B01-M">이름</div>
              <TextInput
                placeholder="이름을 입력하세요."
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
                className="w-[237px]"
              />
            </div>

            <div className="flex flex-col gap-[10px] flex-1">
              <div className="text-gray-800 font-B01-M">이메일</div>
              <div className="flex items-center gap-[19px]">
                <TextInput
                  placeholder="이메일을 입력하세요."
                  value={member.email}
                  onChange={(e) =>
                    handleMemberChange(index, "email", e.target.value)
                  }
                  className="w-[486px]"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveMember(index)}
                  className="cursor-pointer"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddMember}
        className="flex px-[22px] py-3 justify-center items-center gap-[10px] rounded-[10px] bg-gray-100 mt-[56px] cursor-pointer"
      >
        <PlusIcon />
        <span className="text-gray-700 font-B02-SB"> 팀원 추가 </span>
      </button>
    </div>
  );
};

export default TeamInformation;
