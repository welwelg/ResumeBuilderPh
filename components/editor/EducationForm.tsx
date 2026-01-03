"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useResumeActions, useResumeData } from "@/lib/store";
import { PlusCircle, Trash2 } from "lucide-react";

export const EducationForm = () => {
  const { education } = useResumeData();
  const { addEducation, removeEducation, updateEducation } = useResumeActions();

  return (
    <div className="space-y-6 mt-8">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-slate-900">Education</h3>
        <Button
          onClick={addEducation}
          variant="outline"
          size="sm"
          className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          <PlusCircle className="w-4 h-4" /> Add School
        </Button>
      </div>

      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group"
          >
            {/* Delete Button */}
            <button
              onClick={() => removeEducation(edu.id)}
              className="absolute top-2 right-2 text-slate-400 hover:text-red-500 transition-colors p-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            {/* School & Degree */}
            <div className="grid grid-cols-1 gap-3 mb-3">
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-500">
                  School / University
                </Label>
                <Input
                  placeholder="University of the Philippines"
                  value={edu.school}
                  onChange={(e) =>
                    updateEducation(edu.id, "school", e.target.value)
                  }
                  className="bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs text-slate-500">
                  Degree / Course
                </Label>
                <Input
                  placeholder="BS Computer Science"
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(edu.id, "degree", e.target.value)
                  }
                  className="bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs text-slate-500">Year Graduated</Label>
                <Input
                  placeholder="2018 - 2022"
                  value={edu.year}
                  onChange={(e) =>
                    updateEducation(edu.id, "year", e.target.value)
                  }
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
