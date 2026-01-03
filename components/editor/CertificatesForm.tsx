"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useResumeActions, useResumeData } from "@/lib/store";
import { PlusCircle, Trash2 } from "lucide-react";

export const CertificatesForm = () => {
  const { certificates } = useResumeData();
  const { addCertificate, removeCertificate, updateCertificate } =
    useResumeActions();

  return (
    <div className="space-y-6 mt-8">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-slate-900">
          Certificates & Awards
        </h3>
        <Button
          onClick={addCertificate}
          variant="outline"
          size="sm"
          className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          <PlusCircle className="w-4 h-4" /> Add Item
        </Button>
      </div>

      <div className="space-y-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group"
          >
            {/* Delete Button */}
            <button
              onClick={() => removeCertificate(cert.id)}
              className="absolute top-2 right-2 text-slate-400 hover:text-red-500 transition-colors p-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-500">
                  Certificate Name / Award
                </Label>
                <Input
                  placeholder="AWS Certified Solutions Architect"
                  value={cert.name}
                  onChange={(e) =>
                    updateCertificate(cert.id, "name", e.target.value)
                  }
                  className="bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs text-slate-500">
                  Issuing Org & Date
                </Label>
                <Input
                  placeholder="Amazon Web Services - 2023"
                  value={cert.issuer}
                  onChange={(e) =>
                    updateCertificate(cert.id, "issuer", e.target.value)
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
