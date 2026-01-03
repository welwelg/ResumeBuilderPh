"use client";

import { useResumeStore } from "@/lib/store";
import React, { forwardRef } from "react";

export const ResumePreview = forwardRef<HTMLDivElement>((props, ref) => {
  const personalInfo = useResumeStore((state) => state.resumeData.personalInfo);
  const skills = useResumeStore((state) => state.resumeData.skills);
  const experience = useResumeStore((state) => state.resumeData.experience);
  const education = useResumeStore((state) => state.resumeData.education);
  const certificates = useResumeStore((state) => state.resumeData.certificates);

  const initials = personalInfo.fullName
    ? personalInfo.fullName
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "ME";

  return (
    <div
      ref={ref}
      {...props}
      className="
    w-[210mm] min-h-[297mm] bg-white text-slate-900 font-sans text-left shadow-lg
    
    /* PADDING SETUP */
    p-10              /* Padding sa Screen */
    print:p-10!      /* Padding sa Print (IMPORTANT: Wag gawing p-0) */
    
    /* PRINT RESET */
    print:shadow-none 
    print:w-auto 
    print:h-auto 
    print:overflow-visible
  "
    >
      {/* --- HEADER SECTION --- */}
      <div className="border-b-2 border-slate-900 pb-6 mb-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-extrabold uppercase tracking-wide text-slate-900">
              {personalInfo.fullName || "Full Name"}
            </h1>
            <p className="text-lg text-slate-600 font-medium mt-1">
              {personalInfo.jobTitle || "Job Title"}
            </p>
          </div>
          <div className="h-16 w-16 bg-slate-900 text-white flex items-center justify-center text-2xl font-bold rounded-full">
            {initials}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-slate-600">
          {/* Email */}
          {personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">📧</span> {personalInfo.email}
            </div>
          )}

          {/* Phone */}
          {personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">📱</span> {personalInfo.phone}
            </div>
          )}

          {/* Address */}
          {personalInfo.address && (
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">📍</span> {personalInfo.address}
            </div>
          )}

          {/* Divider (Optional: Visual separation kung gusto mo) */}
          {(personalInfo.linkedin || personalInfo.github) && (
            <span className="hidden sm:inline text-slate-300">|</span>
          )}

          {/* LinkedIn */}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-blue-700 bg-blue-50 px-1 rounded text-xs">
                in
              </span>
              <span className="hover:underline cursor-pointer">
                {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
              </span>
            </div>
          )}

          {/* GitHub */}
          {personalInfo.github && (
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900 bg-slate-100 px-1 rounded text-xs">
                GH
              </span>
              <span className="hover:underline cursor-pointer">
                {personalInfo.github.replace(/^https?:\/\/(www\.)?/, "")}
              </span>
            </div>
          )}

          {/* Portfolio */}
          {personalInfo.portfolio && (
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">🌐</span>
              <span className="hover:underline cursor-pointer">
                {personalInfo.portfolio.replace(/^https?:\/\/(www\.)?/, "")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* --- SUMMARY SECTION --- */}
      {personalInfo.summary && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
            Professional Summary
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed text-justify">
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* --- SKILLS SECTION --- */}
      {skills && skills.length > 0 && skills[0] !== "" && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md text-sm font-medium border border-slate-300 shadow-sm
                print:bg-transparent!
                print:border-none!
                print:shadow-none!
                print:p-0!
              print:text-black!
                print:mr-2"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* --- Work Experience Section --- */}
      {experience && experience.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-1">
            Work Experience
          </h3>

          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.id}>
                {/* Row1 Job Title (left) - Date (right) */}
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-900 text-lg">
                    {job.role || "Job Title"}
                  </h4>
                  <span className="text-sm text-slate-500 font-medium italic">
                    {job.duration || "Date Period"}
                  </span>
                </div>

                {/* Row2 Company Name*/}
                <div className="text-slate-700 font-medium mb-2">
                  {job.company || "Company Name"}
                </div>

                {/* Row3 Job Description */}
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                  {job.description || "Description of your achievements..."}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- Education Section --- */}
      {education && education.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-1">
            Education
          </h3>

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                {/* School Name & Date Split */}
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-900 text-base">
                    {edu.school || "University Name"}
                  </h4>
                  <span className="text-sm text-slate-500 font-medium italic">
                    {edu.year || "Year"}
                  </span>
                </div>

                {/* Degree */}
                <div className="text-slate-700 text-sm">
                  {edu.degree || "Degree / Course"}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- CERTIFICATES PLACEHOLDER --- */}
      {certificates && certificates.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-1">
            Certificates
          </h3>

          <div className="space-y-4">
            {certificates.map((cert) => (
              <div key={cert.id}>
                {/* Certificate Name & Issuer Split */}
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-900 text-base">
                    {cert.name || "Certificate Name"}
                  </h4>
                  <span className="text-sm text-slate-500 font-medium italic">
                    {cert.issuer || "Issuing Organization"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

ResumePreview.displayName = "ResumePreview";
