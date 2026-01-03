// types/resume.ts

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  jobTitle?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: string[];
  certificates: Certificate[];
}
