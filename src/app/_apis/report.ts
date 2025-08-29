import { authAxiosInstance } from "./axiosInstance";
import { ReportDetailResponse, ReportResponse, DcaBriefEvaluationResponse, SubmitFeedbackRequest, SubmitFeedbackResponse } from "./schemas/reportResponse";

export async function GetReport(page: number): Promise<ReportResponse> {
  const res = await authAxiosInstance.get<ReportResponse>("/v1/reports", {
    params: {
      page,
    },
  });
  return res.data;
}

export async function GetReportDetail(workId: number): Promise<ReportDetailResponse> {
  const res = await authAxiosInstance.get<ReportDetailResponse>(
    `/v1/reports/${workId}`
  );
  return res.data;
}

export async function GetDcaBriefEvaluation(workId: number): Promise<DcaBriefEvaluationResponse> {
  const res = await authAxiosInstance.get<DcaBriefEvaluationResponse>(
    `/v1/personal-works/dca/${workId}/brief-evaluation`
  );
  return res.data;
}

export async function SubmitFeedback(workId: number, body: SubmitFeedbackRequest): Promise<SubmitFeedbackResponse> {
  const res = await authAxiosInstance.post<SubmitFeedbackResponse>(
    `/v1/feedback/${workId}`,
    body
  );
  return res.data;
}
