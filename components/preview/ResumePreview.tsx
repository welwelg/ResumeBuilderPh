"use client";

import { useResumeStore } from "@/lib/store";

export const ResumePreview = () => {
  const personalInfo = useResumeStore((state) => state.resumeData.personalInfo);
  const skills = useResumeStore((state) => state.resumeData.skills);

  const initials = personalInfo.fullName
    ? personalInfo.fullName
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "ME";

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white text-slate-900 font-sans text-left p-10 shadow-lg">
      {/* --- HEADER SECTION --- */}
      <div className="border-b-2 border-slate-900 pb-6 mb-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-extrabold uppercase tracking-wide text-slate-900">
              {personalInfo.fullName || "Full Name"}
            </h1>
            <p className="text-lg text-slate-600 font-medium mt-1">
              Software Engineer
            </p>
          </div>
          <div className="h-16 w-16 bg-slate-900 text-white flex items-center justify-center text-2xl font-bold rounded-full">
            {initials}
          </div>
        </div>

        <div className="flex gap-6 mt-4 text-sm text-slate-600 flex-wrap">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <span>📧</span> {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <span>📱</span> {personalInfo.phone}
            </div>
          )}
          {personalInfo.address && (
            <div className="flex items-center gap-1">
              <span>📍</span> {personalInfo.address}
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
                className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md text-sm font-medium border border-slate-300 shadow-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* --- CERTIFICATES PLACEHOLDER --- */}
      <div className="mb-8 opacity-50">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
          Certificates
        </h3>
        <p className="text-sm text-slate-400 italic">
          (Certificates will appear here later...)
        </p>
      </div>
    </div>
  );
};
