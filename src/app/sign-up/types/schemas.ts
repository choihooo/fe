import { z } from "zod";

export const RoleEnum = z.enum([
  "STRUCTURE",
  "IDEATION",
  "PRESENTATION",
  "RESEARCH",
  "CONCEPTING",
  "DESIGN",
]);

export const PurposeEnum = z.enum([
  "CURRENT_ANALYSIS",
  "AI_FEEDBACK",
  "TREND",
  "NEXT_CONTEST",
  "ETC",
]);

export const RouteEnum = z.enum(["INSTA", "SEARCH", "FRIEND", "ETC"]);

export const 역할입력_Schema = z.object({
  name: z.string().min(1, "이름을 입력해 주세요.").max(20, "이름은 20자 이하로 입력해 주세요."), // 이름 필드 추가
  roles: z.array(RoleEnum).min(1).optional(),
  purpose: PurposeEnum.optional(),
  route: RouteEnum.optional(),
});

export const 목적입력_Schema = 역할입력_Schema.extend({
  purpose: PurposeEnum,
});

export const 경로입력_Schema = 목적입력_Schema.extend({
  route: RouteEnum,
});

export type 역할입력 = z.infer<typeof 역할입력_Schema>;
export type 목적입력 = z.infer<typeof 목적입력_Schema>;
export type 경로입력 = z.infer<typeof 경로입력_Schema>; 