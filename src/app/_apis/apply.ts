import axiosInstance from "./axiosInstance";
import { DCAapplyResponse } from "./schemas";

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
