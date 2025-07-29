import { create } from "zustand";

export interface TeamMember {
  name: string;
  email: string;
}

interface SubmitStoreProps {
  workInfoFilled: boolean;
  teamInfoFilled: boolean;
  briefUploaded: boolean;
  briefBoardFile: File | null;
  additionalFile: File | null;

  yccWorkInfoFilled: boolean;
  yccTeamInfoFilled: boolean;
  yccBriefUploaded: boolean;
  yccBriefFile: File | null;

  title: string;
  number: string;
  category: string;
  brand: string;
  youtubeUrl: string;

  teamMembers: TeamMember[];
  members: TeamMember[];

  isWriting: boolean;

  setWorkInfoFilled: (v: boolean) => void;
  setTeamInfoFilled: (v: boolean) => void;
  setBriefUploaded: (v: boolean) => void;
  setBriefBoardFile: (file: File | null) => void;
  setadditionalFile: (file: File | null) => void;

  setYccWorkInfoFilled: (v: boolean) => void;
  setYccTeamInfoFilled: (v: boolean) => void;
  setYccBriefUploaded: (v: boolean) => void;
  setYccBriefFile: (file: File | null) => void;

  setIsWriting: (v: boolean) => void;

  setField: <T extends keyof SubmitStoreProps>(
    key: T,
    value: SubmitStoreProps[T]
  ) => void;
}

export const useSubmitStore = create<SubmitStoreProps>((set) => ({
  workInfoFilled: false,
  teamInfoFilled: false,
  briefUploaded: false,
  briefBoardFile: null,
  additionalFile: null,

  yccWorkInfoFilled: false,
  yccTeamInfoFilled: false,
  yccBriefUploaded: false,
  yccBriefFile: null,

  title: "",
  number: "",
  category: "",
  brand: "",
  youtubeUrl: "",

  teamMembers: [],
  members: [],

  isWriting: false,

  setWorkInfoFilled: (v) => set({ workInfoFilled: v }),
  setTeamInfoFilled: (v) => set({ teamInfoFilled: v }),
  setBriefUploaded: (v) => set({ briefUploaded: v }),
  setBriefBoardFile: (file) => set({ briefBoardFile: file }),
  setadditionalFile: (file) => set({ additionalFile: file }),

  setYccWorkInfoFilled: (v) => set({ yccWorkInfoFilled: v }),
  setYccTeamInfoFilled: (v) => set({ yccTeamInfoFilled: v }),
  setYccBriefUploaded: (v) => set({ yccBriefUploaded: v }),
  setYccBriefFile: (file) => set({ yccBriefFile: file }),

  setIsWriting: (v) => set({ isWriting: v }),

  setField: (key, value) => set((state) => ({ ...state, [key]: value })),
}));
