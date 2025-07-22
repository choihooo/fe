import { create } from "zustand";

interface SubmitStoreProps {
  workInfoFilled: boolean;
  teamInfoFilled: boolean;
  briefUploaded: boolean;
  setWorkInfoFilled: (v: boolean) => void;
  setTeamInfoFilled: (v: boolean) => void;
  setBriefUploaded: (v: boolean) => void;
  briefFile: File | null;
  setBriefFile: (file: File | null) => void;
  planFile: File | null;
  setPlanFile: (file: File | null) => void;

  // YCC
  yccWorkInfoFilled: boolean;
  yccTeamInfoFilled: boolean;
  yccBriefUploaded: boolean;
  setYccWorkInfoFilled: (v: boolean) => void;
  setYccTeamInfoFilled: (v: boolean) => void;
  setYccBriefUploaded: (v: boolean) => void;
  yccBriefFile: File | null;
  setYccBriefFile: (file: File | null) => void;
}

export const useSubmitStore = create<SubmitStoreProps>((set) => ({
  workInfoFilled: false,
  teamInfoFilled: false,
  briefUploaded: false,
  briefFile: null,
  setWorkInfoFilled: (v) => set({ workInfoFilled: v }),
  setTeamInfoFilled: (v) => set({ teamInfoFilled: v }),
  setBriefUploaded: (v) => set({ briefUploaded: v }),
  setBriefFile: (file) => set({ briefFile: file }),
  planFile: null,
  setPlanFile: (file) => set({ planFile: file }),

  // YCC
  yccWorkInfoFilled: false,
  yccTeamInfoFilled: false,
  yccBriefUploaded: false,
  setYccWorkInfoFilled: (v) => set({ yccWorkInfoFilled: v }),
  setYccTeamInfoFilled: (v) => set({ yccTeamInfoFilled: v }),
  setYccBriefUploaded: (v) => set({ yccBriefUploaded: v }),
  yccBriefFile: null,
  setYccBriefFile: (file) => set({ yccBriefFile: file }),
}));
