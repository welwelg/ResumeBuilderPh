"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useResumeActions, useResumeData } from "@/lib/store";

export const PersonalInfoForm = () => {
  const { personalInfo } = useResumeData();
  const { updatePersonalInfo } = useResumeActions();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-slate-900">
        Personal Information
      </h3>

      {/* Full Name  */}
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          placeholder="Juan Dela Cruz"
          value={personalInfo.fullName}
          onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
          className="text-slate-900"
        />
      </div>

      {/* Job Title */}
      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          placeholder="e.g. Senior Frontend Developer"
          value={personalInfo.jobTitle || ""}
          onChange={(e) => updatePersonalInfo("jobTitle", e.target.value)}
          className="text-slate-900 bg-white"
        />
      </div>

      {/* Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="juan@gmail.com"
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo("email", e.target.value)}
            className="text-slate-900"
          />
        </div>

        {/* Phone Number*/}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+63 912 345 6789"
            value={personalInfo.phone}
            onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            className="text-slate-900"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          placeholder="Makati City, Philippines"
          value={personalInfo.address}
          onChange={(e) => updatePersonalInfo("address", e.target.value)}
          className="text-slate-900"
        />
      </div>

      {/* SOCIALS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* LinkedIn */}
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn (URL)</Label>
          <Input
            id="linkedin"
            placeholder="linkedin.com/in/juan"
            value={personalInfo.linkedin || ""}
            onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
            className="text-slate-900 bg-white text-xs"
          />
        </div>

        {/* GitHub */}
        <div className="space-y-2">
          <Label htmlFor="github">GitHub (URL)</Label>
          <Input
            id="github"
            placeholder="github.com/juan"
            value={personalInfo.github || ""}
            onChange={(e) => updatePersonalInfo("github", e.target.value)}
            className="text-slate-900 bg-white text-xs"
          />
        </div>

        {/* Portfolio */}
        <div className="space-y-2">
          <Label htmlFor="portfolio">Portfolio (URL)</Label>
          <Input
            id="portfolio"
            placeholder="juandelacruz.com"
            value={personalInfo.portfolio || ""}
            onChange={(e) => updatePersonalInfo("portfolio", e.target.value)}
            className="text-slate-900 bg-white text-xs"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-slate-900"
          id="summary"
          placeholder="I am a passionate developer..."
          value={personalInfo.summary}
          onChange={(e) => updatePersonalInfo("summary", e.target.value)}
        />
      </div>
    </div>
  );
};
