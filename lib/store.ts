import { create } from "zustand";
import { ResumeData, PersonalInfo } from "@/types/resume";

interface ResumeStore {
  resumeData: ResumeData;
  actions: {
    updatePersonalInfo: (field: keyof PersonalInfo, value: string) => void;
    updateSkills: (skills: string[]) => void;
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
  certificates: [],
};

export const useResumeStore = create<ResumeStore>((set) => ({
  resumeData: initialData,

  actions: {
    updatePersonalInfo: (field, value) =>
      set((state) => {
        return {
          resumeData: {
            ...state.resumeData,
            personalInfo: {
              ...state.resumeData.personalInfo,
              [field]: value,
            },
          },
        };
      }),

    updateSkills: (skills) =>
      set((state) => ({
        resumeData: {
          ...state.resumeData,
          skills: skills,
        },
      })),
  },
}));

export const useResumeActions = () => useResumeStore((state) => state.actions);
export const useResumeData = () => useResumeStore((state) => state.resumeData);
