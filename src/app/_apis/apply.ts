import axiosInstance from "./axiosInstance";
import { DCAapplyResponse, YCCapplyResponse } from "./schemas";

export async function DCAapply(form: FormData): Promise<DCAapplyResponse> {
  const res = await axiosInstance.post<DCAapplyResponse>(
    "/v1/works/dca",
    form,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
}

export async function YCCApply(form: FormData): Promise<YCCapplyResponse> {
  const res = await axiosInstance.post<YCCapplyResponse>(
    "/v1/works/ycc",
    form,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
}
