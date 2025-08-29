// 사용자 관련 훅들
export * from "./useAuth";
export * from "./useUser";
export * from "./useReport";

// 리포트 관련 쿼리 키
export const reportKeys = {
  all: ["report"] as const,
  detail: (workId: number) => [...reportKeys.all, "detail", workId] as const,
  list: (page: number) => [...reportKeys.all, "list", page] as const,
  dcaBriefEvaluation: (workId: number) => [...reportKeys.all, "dcaBriefEvaluation", workId] as const,
};