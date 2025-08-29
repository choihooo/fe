import { useMutation, useQuery } from "@tanstack/react-query";
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
} from "@/app/_apis/report";
import { reportKeys } from "./index";

/**
 * 리포트 목록 조회 쿼리 훅
 */
export function useReportList(page: number) {
  return useQuery({
    queryKey: reportKeys.list(page),
    queryFn: () => GetReport(page),
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    gcTime: 10 * 60 * 1000, // 10분간 가비지 컬렉션
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
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    gcTime: 10 * 60 * 1000, // 10분간 가비지 컬렉션
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
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    gcTime: 10 * 60 * 1000, // 10분간 가비지 컬렉션
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
export function useWorkAllEvaluation(workId: number) {
  return useQuery({
    queryKey: ["workAllEvaluation", workId],
    queryFn: () => WorkAllEvaluation(workId),
  });
}

export function usePersonalStrengths(workId: number) {
  return useQuery({
    queryKey: ["PersonalStrengths", workId],
    queryFn: () => PersonalStrengths(workId),
  });
}

export function usePersonalWeakness(workId: number) {
  return useQuery({
    queryKey: ["PersonalWeakness", workId],
    queryFn: () => PersonalWeakness(workId),
  });
}

export function usePersonalSummary(workId: number) {
  return useQuery({
    queryKey: ["PersonalSummary", workId],
    queryFn: () => PersonalSummary(workId),
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
