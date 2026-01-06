"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useResumeActions, useResumeData } from "@/lib/store";
import { Trash2 } from "lucide-react"; // Icons

export const ExperienceForm = () => {
  // 1. GET DATA
  const { experience } = useResumeData();
  const { addExperience, removeExperience, updateExperience } =
    useResumeActions();

  return (
    <div className="space-y-6 mt-8">
      {/* HEADER NG SECTION */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-slate-900">Work Experience</h3>

        {/* ADD BUTTON */}
        <Button
          onClick={addExperience}
          variant="outline"
          size="sm"
          className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          Add Job
        </Button>
      </div>

      <div className="space-y-4">
        {/* LOOP: Gumawa ng Form para sa bawat trabaho sa listahan */}
        {experience.map((job) => (
          <div
            key={job.id}
            className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group transition-all hover:shadow-md"
          >
            {/* REMOVE BUTTON (Nasa Top Right) */}
            <button
              onClick={() => removeExperience(job.id)}
              className="absolute top-2 right-2 text-slate-400 hover:text-red-500 transition-colors p-1"
              title="Delete this job"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            {/* ROW 1: Job Title & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-500">Job Title</Label>
                <Input
                  placeholder="Software Engineer"
                  value={job.role}
                  onChange={(e) =>
                    updateExperience(job.id, "role", e.target.value)
                  }
                  className="bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs text-slate-500">Company Name</Label>
                <Input
                  placeholder="Tech Solutions Inc."
                  value={job.company}
                  onChange={(e) =>
                    updateExperience(job.id, "company", e.target.value)
                  }
                  className="bg-white"
                />
              </div>
            </div>

            {/* ROW 2: Duration */}
            <div className="space-y-1.5 mb-3">
              <Label className="text-xs text-slate-500">Date / Duration</Label>
              <Input
                placeholder="Jan 2023 - Present"
                value={job.duration}
                onChange={(e) =>
                  updateExperience(job.id, "duration", e.target.value)
                }
                className="bg-white"
              />
            </div>

            {/* ROW 3: Description */}
            <div className="space-y-1.5">
              <Label className="text-xs text-slate-500">
                Description / Achievements
              </Label>
              <textarea
                className="flex min-h-[100px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                placeholder="• Developed a web application using Next.js... (Press Enter for new bullets)"
                value={job.description}
                onChange={(e) =>
                  updateExperience(job.id, "description", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        {/* Empty State Message */}
        {experience.length === 0 && (
          <div className="text-center p-8 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <p>No experience listed yet.</p>
            <p className="text-xs mt-1">
              Click `Add Job` to start highlighting your career.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
