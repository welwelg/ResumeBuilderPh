// lib/store.ts
import { create } from "zustand";
import { ResumeData } from "@/types/resume";

interface ResumeStore {
  resumeData: ResumeData;
  actions: {
    updatePersonalInfo: (field: string, value: string) => void;
  };
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  },
  education: [],
  experience: [],
  skills: [],
};

export const useResumeStore = create<ResumeStore>((set) => ({
  resumeData: initialData,
  actions: {
    updatePersonalInfo: (field, value) =>
      set((state) => ({
        resumeData: {
          ...state.resumeData,
          personalInfo: {
            ...state.resumeData.personalInfo,
            [field]: value,
          },
        },
      })),
  },
}));

// Helper hook para hindi paulit-ulit ang selector
export const useResumeActions = () => useResumeStore((state) => state.actions);
export const useResumeData = () => useResumeStore((state) => state.resumeData);
