import { create } from "zustand";

interface SubmitStoreProps {
  workInfoFilled: boolean;
  teamInfoFilled: boolean;
  briefUploaded: boolean;
  setWorkInfoFilled: (v: boolean) => void;
  setTeamInfoFilled: (v: boolean) => void;
  setBriefUploaded: (v: boolean) => void;
}

export const useSubmitStore = create<SubmitStoreProps>((set) => ({
  workInfoFilled: false,
  teamInfoFilled: false,
  briefUploaded: false,
  setWorkInfoFilled: (v) => set({ workInfoFilled: v }),
  setTeamInfoFilled: (v) => set({ teamInfoFilled: v }),
  setBriefUploaded: (v) => set({ briefUploaded: v }),
}));
