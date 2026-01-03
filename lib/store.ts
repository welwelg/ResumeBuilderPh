import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ResumeData,
  PersonalInfo,
  Experience,
  Education,
  Certificate,
} from "@/types/resume";

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

    addEducation: () => void;
    removeEducation: (id: string) => void;
    updateEducation: (
      id: string,
      field: keyof Education,
      value: string
    ) => void;

    addCertificate: () => void;
    removeCertificate: (id: string) => void;
    updateCertificate: (
      id: string,
      field: keyof Certificate,
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
    linkedin: "",
    github: "",
    portfolio: "",
    jobTitle: "",
  },
  education: [
    {
      id: "1",
      school: "",
      degree: "",
      year: "",
    },
  ],
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
  certificates: [
    {
      id: "1",
      name: "",
      issuer: "",
    },
  ],
};

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
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

        addEducation: () =>
          set((state) => ({
            resumeData: {
              ...state.resumeData,
              education: [
                ...state.resumeData.education,
                {
                  id: Math.random().toString(),
                  school: "",
                  degree: "",
                  year: "",
                },
              ],
            },
          })),

        removeEducation: (id) =>
          set((state) => ({
            resumeData: {
              ...state.resumeData,
              education: state.resumeData.education.filter(
                (edu) => edu.id !== id
              ),
            },
          })),

        updateEducation: (id, field, value) =>
          set((state) => ({
            resumeData: {
              ...state.resumeData,
              education: state.resumeData.education.map((edu) =>
                edu.id === id ? { ...edu, [field]: value } : edu
              ),
            },
          })),

        addCertificate: () =>
          set((state) => ({
            resumeData: {
              ...state.resumeData,
              certificates: [
                ...state.resumeData.certificates,
                { id: Math.random().toString(), name: "", issuer: "" },
              ],
            },
          })),

        removeCertificate: (id) =>
          set((state) => ({
            resumeData: {
              ...state.resumeData,
              certificates: state.resumeData.certificates.filter(
                (cert) => cert.id !== id
              ),
            },
          })),

        updateCertificate: (id, field, value) =>
          set((state) => ({
            resumeData: {
              ...state.resumeData,
              certificates: state.resumeData.certificates.map((cert) =>
                cert.id === id ? { ...cert, [field]: value } : cert
              ),
            },
          })),
      },
    }),
    {
      name: "resume-storage",
      skipHydration: true,
    }
  )
);

export const useResumeActions = () => useResumeStore((state) => state.actions);
export const useResumeData = () => useResumeStore((state) => state.resumeData);
