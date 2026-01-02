"use client";

import { Label } from "@/components/ui/label";
import { useResumeActions, useResumeData } from "@/lib/store";
import { ChangeEvent } from "react";

export const SkillsForm = () => {
  const { skills } = useResumeData();
  const { updateSkills } = useResumeActions();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    const skillsArray = value.split(",");

    updateSkills(skillsArray);
  };

  return (
    <div className="space-y-4 mt-6">
      <h3 className="text-lg font-medium text-slate-900">Technical Skills</h3>

      <div className="space-y-2">
        <Label htmlFor="skills">List your skills (Separate with commas)</Label>
        <p className="text-xs text-slate-500">
          Example: ReactJS, TypeScript, Tailwind CSS, Figma, Node.js
        </p>

        <textarea
          id="skills"
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Type skills here..."
          value={skills.join(",")}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
