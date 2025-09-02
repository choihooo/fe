// src/app/hooks/queries.ts
import {
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import {
  GetReport,
  GetReportDetail,
  GetDcaBriefEvaluation,
  SubmitFeedback,
  ShareReport,
  WorkAllEvaluation,
  PersonalStrengths,
  PersonalWeakness,
  PersonalSummary,
  VerifyReportCode,
  DeleteReportVisibility,
  WorkYccEvaluation,
  PersonalDetailEvaluation,
} from "@/app/_apis/report";
import { reportKeys } from "./index";
import {
  EvaluationType,
  ScoreDetailResponse,
  WorkAllEvaluationResponse,
  WorkYCCEvaluationResponse,
} from "@/app/_apis/schemas/reportResponse";

/**
 * 리포트 목록 조회 쿼리 훅
 */
export function useReportList(page: number) {
  return useQuery({
    queryKey: reportKeys.list(page),
    queryFn: () => GetReport(page),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

/**
 * 리포트 상세 조회 쿼리 훅
 */
export function useReportDetail(workId: number) {
  return useQuery({
    queryKey: reportKeys.detail(workId),
    queryFn: () => GetReportDetail(workId),
    enabled: Number.isFinite(workId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

/**
 * DCA 브리프 해석 조회 쿼리 훅
 */
export function useDcaBriefEvaluation(workId: number) {
  return useQuery({
    queryKey: reportKeys.dcaBriefEvaluation(workId),
    queryFn: () => GetDcaBriefEvaluation(workId),
    enabled: Number.isFinite(workId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

/**
 * 피드백 제출 뮤테이션 훅
 */
export function useSubmitFeedback() {
  return useMutation({
    mutationFn: ({
      workId,
      score,
      content,
    }: {
      workId: number;
      score: number;
      content: string;
    }) => SubmitFeedback(workId, { score, content }),
  });
}

/**
 * 리포트 공유 뮤테이션 훅
 */
export function useShareReport() {
  return useMutation({
    mutationFn: (workId: number) => ShareReport(workId),
  });
}

/**
 * 리포트 총평 쿼리 훅
 */

type QueryOpts<T> = Omit<
  UseQueryOptions<T, unknown, T, QueryKey>,
  "queryKey" | "queryFn"
>;

export function useWorkAllEvaluation(
  workId: number,
  options?: QueryOpts<WorkAllEvaluationResponse>
) {
  return useQuery({
    queryKey: ["workAllEvaluation", workId],
    queryFn: () => WorkAllEvaluation(workId),
    enabled: Number.isFinite(workId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    ...options,
  });
}

export function useWorkYccEvaluation(
  workId: number,
  options?: QueryOpts<WorkYCCEvaluationResponse>
) {
  return useQuery({
    queryKey: ["WorkYccEvaluation", workId],
    queryFn: () => WorkYccEvaluation(workId),
    enabled: Number.isFinite(workId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    ...options,
  });
}

/**
 * 개인 강점/약점/요약 쿼리 훅
 */
export function usePersonalStrengths(workId: number) {
  return useQuery({
    queryKey: ["PersonalStrengths", workId],
    queryFn: () => PersonalStrengths(workId),
    enabled: Number.isFinite(workId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

export function usePersonalWeakness(workId: number) {
  return useQuery({
    queryKey: ["PersonalWeakness", workId],
    queryFn: () => PersonalWeakness(workId),
    enabled: Number.isFinite(workId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

export function usePersonalSummary(workId: number) {
  return useQuery({
    queryKey: ["PersonalSummary", workId],
    queryFn: () => PersonalSummary(workId),
    enabled: Number.isFinite(workId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

/**
 * 리포트 코드 인증 뮤테이션 훅
 */
export function useVerifyReportCode() {
  return useMutation({
    mutationFn: ({ workId, code }: { workId: number; code: string }) =>
      VerifyReportCode(workId, { code }),
  });
}

/**
 * 리포트 삭제(visibility) 뮤테이션 훅
 */
export function useDeleteReportVisibility() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ workId, title }: { workId: number; title: string }) =>
      DeleteReportVisibility(workId, { title }),
    onSuccess: () => {
      // 첫 페이지 목록 무효화 (필요시 확장)
      queryClient.invalidateQueries({ queryKey: reportKeys.list(0) });
    },
  });
}

export function useScoreDetail(
  workId: number,
  type: EvaluationType,
  options?: QueryOpts<ScoreDetailResponse>
) {
  return useQuery({
    queryKey: ["PersonalDetailEvaluation", workId, type],
    queryFn: () => PersonalDetailEvaluation(workId, type),
    enabled: !!workId && !!type,
    ...options,
  });
}
