// app/page.tsx
import { Card } from "@/components/ui/card";
import { PersonalInfoForm } from "@/components/ui/editor/PersonalInfoForm";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 overflow-hidden">
        {/* LEFT: Editor Section */}
        <Card className="p-6 overflow-y-auto bg-white shadow-sm border-slate-200">
          <h2 className="text-xl font-semibold mb-4">Editor</h2>
          <PersonalInfoForm />
        </Card>

        {/* RIGHT: Live Preview Section */}
        <Card className="p-6 overflow-y-auto bg-white shadow-2xl border-slate-200 flex justify-center">
          <div className="w-[210mm] min-h-[297mm] bg-white shadow-md border p-10 scale-90 origin-top">
            {/* This simulates A4 Paper size */}
            <h1 className="text-4xl font-bold">Juan Dela Cruz</h1>
            <p className="text-slate-600">Software Engineer</p>
            <hr className="my-4" />
            <p>Waiting for data...</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
