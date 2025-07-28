"use client";
import TextInput from "@/components/common/TextInput";
import { useSubmitStore } from "@/store/useSubmitStore";
import React, { useEffect, useState } from "react";
import { DeleteIcon, HoverDelete, PlusIcon } from "../../../../../public";

interface TeamMember {
  name: string;
  email: string;
}

interface TeamInformationProps {
  mode: "dca" | "ycc";
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const TeamInformation = ({ mode }: TeamInformationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const setTeamInfoFilled = useSubmitStore((s) => s.setTeamInfoFilled);
  const setYccTeamInfoFilled = useSubmitStore((s) => s.setYccTeamInfoFilled);
  const setField = useSubmitStore((s) => s.setField);

  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [emailErrors, setEmailErrors] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const allMembers: TeamMember[] = [
      { name: applicantName, email: applicantEmail },
      ...teamMembers,
    ];

    if (mode === "dca") {
      setField("teamMembers", allMembers);
    } else {
      setField("members", allMembers);
    }
  }, [applicantName, applicantEmail, teamMembers, mode, setField]);

  useEffect(() => {
    const isApplicantValid =
      applicantName.trim() && isValidEmail(applicantEmail.trim());
    const areMembersValid = teamMembers.every(
      (m) => m.name.trim() && isValidEmail(m.email.trim())
    );
    const isValid = !!isApplicantValid && !!areMembersValid;

    if (mode === "dca") {
      setTeamInfoFilled(isValid);
    } else {
      setYccTeamInfoFilled(isValid);
    }
  }, [
    applicantName,
    applicantEmail,
    teamMembers,
    mode,
    setTeamInfoFilled,
    setYccTeamInfoFilled,
  ]);

  const handleAddMember = () => {
    if (teamMembers.length < 3) {
      setTeamMembers((prev) => [...prev, { name: "", email: "" }]);
    }
  };

  const handleMemberChange = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);

    if (field === "email") {
      setEmailErrors((prev) => ({
        ...prev,
        [`member-${index}`]: value ? !isValidEmail(value) : false,
      }));
    }
  };

  const handleRemoveMember = (index: number) => {
    setTeamMembers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleApplicantEmailChange = (value: string) => {
    setApplicantEmail(value);
    setEmailErrors((prev) => ({
      ...prev,
      applicant: value ? !isValidEmail(value) : false,
    }));
  };

  return (
    <div className="w-full px-[325px] mt-[134px]">
      <div className="text-gray-900 font-T02-B">
        팀원 정보<span className="text-blue-main">*</span>
      </div>
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
              onChange={(e) => handleApplicantEmailChange(e.target.value)}
              className="w-[486px]"
              error={emailErrors.applicant}
            />
            <div className="h-[20px]">
              {emailErrors.applicant && (
                <div className="text-orange-point font-C01-R">
                  올바른 이메일 주소를 입력해주세요.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[14px] space-y-[14px]">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-row w-full gap-5">
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
                  error={emailErrors[`member-${index}`]}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveMember(index)}
                  className="cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? <HoverDelete /> : <DeleteIcon />}
                </button>
              </div>
              <div className="h-[20px]">
                {emailErrors[`member-${index}`] && (
                  <div className="text-orange-point font-C01-R">
                    올바른 이메일 주소를 입력해주세요.
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {teamMembers.length < 3 && (
        <button
          onClick={handleAddMember}
          className="flex px-[22px] py-3 justify-center items-center gap-[10px] rounded-[10px] bg-gray-100 mt-[56px] cursor-pointer hover:bg-gray-200"
        >
          <PlusIcon />
          <span className="text-gray-700 font-B02-SB"> 참여자 추가 </span>
        </button>
      )}
    </div>
  );
};

export default TeamInformation;
