export interface DCAapplyRequest {
  title: string;
  number: string;
  category: string;
  brand: string;
  teamMembers: { name: string; email: string }[];
  additionalFile: string;
  youtubeUrl: string;
  briefBoardFile: string;
}

export interface DCAapplyResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: string;
}

export interface YCCapplyRequest {
  title: string;
  members: { name: string; email: string }[];
  planFile: string;
}

export interface YCCapplyResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: string;
}
