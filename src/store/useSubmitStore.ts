import { create } from "zustand";

interface SubmitStoreProps {
  workInfoFilled: boolean;
  teamInfoFilled: boolean;
  briefUploaded: boolean;
  setWorkInfoFilled: (v: boolean) => void;
  setTeamInfoFilled: (v: boolean) => void;
  setBriefUploaded: (v: boolean) => void;

  // YCC
  yccWorkInfoFilled: boolean;
  yccTeamInfoFilled: boolean;
  yccBriefUploaded: boolean;
  setYccWorkInfoFilled: (v: boolean) => void;
  setYccTeamInfoFilled: (v: boolean) => void;
  setYccBriefUploaded: (v: boolean) => void;
}

export const useSubmitStore = create<SubmitStoreProps>((set) => ({
  workInfoFilled: false,
  teamInfoFilled: false,
  briefUploaded: false,
  setWorkInfoFilled: (v) => set({ workInfoFilled: v }),
  setTeamInfoFilled: (v) => set({ teamInfoFilled: v }),
  setBriefUploaded: (v) => set({ briefUploaded: v }),

  // YCC
  yccWorkInfoFilled: false,
  yccTeamInfoFilled: false,
  yccBriefUploaded: false,
  setYccWorkInfoFilled: (v) => set({ yccWorkInfoFilled: v }),
  setYccTeamInfoFilled: (v) => set({ yccTeamInfoFilled: v }),
  setYccBriefUploaded: (v) => set({ yccBriefUploaded: v }),
}));
