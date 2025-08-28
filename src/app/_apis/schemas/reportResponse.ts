export interface ReportRequest {
  contestName: string;
  title: string;
  category: string;
  brand: string;
  workMembers: string[];
  reportStatus: "DONE" | "IN_PROGRESS";
  workId: number;
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
