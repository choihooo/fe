export interface ReportRequest {
  contestName: string;
  title?: string;
  workName: string;
  category: string;
  brand: string;
  workMembers: string[];
  workId: number;
  reportStatus: "DONE" | "IN_PROGRESS" | "COMPLETED";
  isDeletable?: boolean;
}

export interface ReportResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    responseList: ReportRequest[];
    size: number;
    hasNext: boolean;
    isFirst: boolean;
    isLast: boolean;
  };
}

export interface ReportDetailResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: ReportRequest;
}

export interface DcaBriefEvaluationResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    interpretation: string;
    consistency: string;
    weakness: string;
  };
}

// 피드백 제출
export interface SubmitFeedbackRequest {
  score: number; // 1~5
  content: string; // 후기 내용
}

export interface SubmitFeedbackResponse {
  isSuccess: boolean;
  code: number;
  message: string;
}

// 리포트 공유 응답
export interface ShareReportResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    workId: number;
    link: string;
    code: string;
  };
}

//DCA 출품작 전체 총평 응답
export interface WorkAllEvaluationResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    totalScore: number;
    targetScore: number;
    target: string;
    brandScore: number;
    brand: string;
    mediaScore: number;
    media: string;
    problemScore: number;
    problem: string;
    feasibilityScore: number;
    feasibility: string;
  };
}

//개인 출품작 강점 조회
export interface StrengthsResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    code: string;
    label: string;
    score: number;
    description: string;
  };
}

export interface WeaknessResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    code: string;
    label: string;
    score: number;
    description: string;
  };
}
