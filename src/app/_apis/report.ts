import { authAxiosInstance } from "./axiosInstance";
import {
  ReportDetailResponse,
  ReportResponse,
  DcaBriefEvaluationResponse,
  SubmitFeedbackRequest,
  SubmitFeedbackResponse,
  ShareReportResponse,
  WorkAllEvaluationResponse,
  StrengthsResponse,
  WeaknessResponse,
  SummaryProps,
  VerifyReportCodeRequest,
  VerifyReportCodeResponse,
} from "./schemas/reportResponse";
export async function GetReport(page: number): Promise<ReportResponse> {
  const res = await authAxiosInstance.get<ReportResponse>("/v1/reports", {
    params: {
      page,
    },
  });
  return res.data;
}

export async function GetReportDetail(
  workId: number
): Promise<ReportDetailResponse> {
  const res = await authAxiosInstance.get<ReportDetailResponse>(
    `/v1/reports/${workId}`
  );
  return res.data;
}

export async function GetDcaBriefEvaluation(
  workId: number
): Promise<DcaBriefEvaluationResponse> {
  const res = await authAxiosInstance.get<DcaBriefEvaluationResponse>(
    `/v1/personal-works/dca/${workId}/brief-evaluation`
  );
  return res.data;
}

export async function SubmitFeedback(
  workId: number,
  body: SubmitFeedbackRequest
): Promise<SubmitFeedbackResponse> {
  const res = await authAxiosInstance.post<SubmitFeedbackResponse>(
    `/v1/feedback/${workId}`,
    body
  );
  return res.data;
}

export async function ShareReport(
  workId: number
): Promise<ShareReportResponse> {
  const res = await authAxiosInstance.post<ShareReportResponse>(
    `/v1/reports/${workId}`
  );
  return res.data;
}

export async function WorkAllEvaluation(
  workId: number
): Promise<WorkAllEvaluationResponse> {
  const res = await authAxiosInstance.get<WorkAllEvaluationResponse>(
    `/v1/personal-works/dca/${workId}/evaluation`
  );
  return res.data;
}

export async function PersonalStrengths(
  workId: number
): Promise<StrengthsResponse> {
  const res = await authAxiosInstance.get<StrengthsResponse>(
    `/v1/personal-works/${workId}/strengths`
  );
  return res.data;
}

export async function PersonalWeakness(
  workId: number
): Promise<WeaknessResponse> {
  const res = await authAxiosInstance.get<WeaknessResponse>(
    `/v1/personal-works/${workId}/weaknesses`
  );
  return res.data;
}

export async function PersonalSummary(workId: number): Promise<SummaryProps> {
  const res = await authAxiosInstance.get<SummaryProps>(
    `/v1/personal-works/${workId}/summary`
  );
  return res.data;
}

export async function VerifyReportCode(
  workId: number,
  body: VerifyReportCodeRequest
): Promise<VerifyReportCodeResponse> {
  const res = await authAxiosInstance.post<VerifyReportCodeResponse>(
    `/v1/reports/${workId}/verify-code`,
    body
  );
  return res.data;
}

export async function DeleteReportVisibility(workId: number, body: DeleteReportVisibilityRequest): Promise<DeleteReportVisibilityResponse> {
  const res = await authAxiosInstance.patch<DeleteReportVisibilityResponse>(
    `/v1/reports/${workId}/visibility`,
    body
  );
  return res.data;
}
