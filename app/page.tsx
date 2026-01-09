"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Card } from "@/components/ui/card";
import { PersonalInfoForm } from "@/components/editor/PersonalInfoForm";
import { ResumePreview } from "@/components/preview/ResumePreview";
import { SkillsForm } from "@/components/editor/SkillsForm";
import { ExperienceForm } from "@/components/editor/ExperienceForm";
import { EducationForm } from "@/components/editor/EducationForm";
import { CertificatesForm } from "@/components/editor/CertificatesForm";

export default function Home() {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Rogelio_Gallardo_Resume",

    pageStyle: `
      @page {
       size: A4 portrait; 
        margin: 0;         
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
          html, body {
          height: 100%; 
        }
      }
    `,
  });

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col p-4 md:p-6 lg:p-8 lg:h-screen">
      {/* Header */}
      <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center shrink-0">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-center sm:text-left">
          Resume Builder <span className="text-blue-600">PH</span>
        </h1>
        <button
          onClick={handlePrint}
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm flex items-center justify-center gap-2"
        >
          <span>🖨️</span> Download PDF
        </button>
      </header>

      {/* Main Workspace - Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1 lg:overflow-hidden">
        {/* LEFT: Editor Section */}
        <Card className="p-4 sm:p-6 bg-white shadow-sm border-slate-200 h-auto lg:h-full lg:overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Editor</h2>
          <PersonalInfoForm />
          <hr className="my-6 border-slate-200" />
          <SkillsForm />
          <hr className="my-6 border-slate-200" />
          <ExperienceForm />
          <hr className="my-6 border-slate-200" />
          <EducationForm />
          <hr className="my-6 border-slate-200" />
          <CertificatesForm />
        </Card>

        {/* RIGHT: Live Preview Section */}
        <Card className="p-4 sm:p-6 bg-slate-100 shadow-inner border-slate-200 flex flex-col items-center h-auto lg:h-full lg:overflow-y-auto relative min-h-[500px]">
          <h2 className="text-xl font-semibold mb-4 text-slate-500 w-full text-center sticky top-0 z-10 bg-slate-100/90 py-2">
            Live Preview
          </h2>

          <div
            className="transform origin-top transition-all duration-300
            scale-[0.35]      
            xs:scale-[0.40]   
            sm:scale-[0.55]   
            md:scale-[0.65]   
            lg:scale-[0.60]   
            xl:scale-[0.75]   
            2xl:scale-[0.85]  
          "
          >
            <ResumePreview ref={componentRef} />
          </div>
        </Card>
      </div>

      <footer className="mt-6 text-center shrink-0">
        <p className="text-sm text-slate-400 flex items-center justify-center gap-1">
          Built with <span className="text-red-500 animate-pulse"></span> by
          <a
            href="https://gallardoportfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-600 hover:text-blue-600 transition-colors underline decoration-dotted hover:decoration-solid underline-offset-4"
          >
            WelTechCode
          </a>
        </p>
      </footer>
    </main>
  );
}
