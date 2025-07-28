import { authAxiosInstance } from "./axiosInstance";
import { ReportResponse } from "./schemas/reportResponse";

export async function GetReport(page: number): Promise<ReportResponse> {
  const res = await authAxiosInstance.get<ReportResponse>("/v1/reports", {
    params: {
      page,
    },
  });
  return res.data;
}
