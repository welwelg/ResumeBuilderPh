import { Card } from "@/components/ui/card";
import { PersonalInfoForm } from "@/components/editor/PersonalInfoForm";
import { ResumePreview } from "@/components/preview/ResumePreview";
import { SkillsForm } from "@/components/editor/SkillsForm";
import { ExperienceForm } from "@/components/editor/ExperienceForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 h-screen flex flex-col">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Resume Builder <span className="text-blue-600">PH</span>
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Download PDF
        </button>
      </header>

      {/* Main Workspace - Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 overflow-hidden">
        {/* LEFT: Editor Section */}
        <Card className="p-6 overflow-y-auto bg-white shadow-sm border-slate-200 h-full">
          <h2 className="text-xl font-semibold mb-6">Editor</h2>
          <PersonalInfoForm />
          <hr className="my-6 border-slate-200" />
          <SkillsForm />
          <hr className="my-6 border-slate-200" />
          <ExperienceForm />
        </Card>

        {/* RIGHT: Live Preview Section */}
        <Card className="p-6 bg-slate-100 shadow-inner border-slate-200 flex flex-col items-center overflow-y-auto h-full relative">
          <h2 className="text-xl font-semibold mb-4 text-slate-500 w-full text-center">
            Live Preview
          </h2>
          {/* Scale Logic */}
          <div className="transform scale-[0.5] sm:scale-[0.6] md:scale-[0.65] lg:scale-[0.80] origin-top transition-all">
            <ResumePreview />
          </div>
        </Card>
      </div>
    </main>
  );
}
