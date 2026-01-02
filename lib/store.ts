import { create } from "zustand";
import { ResumeData, PersonalInfo, Experience } from "@/types/resume";

interface ResumeStore {
  resumeData: ResumeData;
  actions: {
    updatePersonalInfo: (field: keyof PersonalInfo, value: string) => void;
    updateSkills: (skills: string[]) => void;
    addExperience: () => void;
    removeExperience: (id: string) => void;
    updateExperience: (
      id: string,
      field: keyof Experience,
      value: string
    ) => void;
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
  experience: [
    {
      id: "1",
      company: "",
      role: "",
      duration: "",
      description: "",
    },
  ],
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
    addExperience: () =>
      set((state) => ({
        resumeData: {
          ...state.resumeData,
          experience: [
            ...state.resumeData.experience,
            {
              id: Math.random().toString(),
              company: "",
              role: "",
              duration: "",
              description: "",
            },
          ],
        },
      })),
    removeExperience: (id) =>
      set((state) => ({
        resumeData: {
          ...state.resumeData,
          experience: state.resumeData.experience.filter(
            (exp) => exp.id !== id
          ),
        },
      })),
    updateExperience: (id, field, value) =>
      set((state) => ({
        resumeData: {
          ...state.resumeData,
          experience: state.resumeData.experience.map((exp) =>
            exp.id === id ? { ...exp, [field]: value } : exp
          ),
        },
      })),
  },
}));

export const useResumeActions = () => useResumeStore((state) => state.actions);
export const useResumeData = () => useResumeStore((state) => state.resumeData);
