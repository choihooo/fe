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
