import { useEffect, useState } from "react";
import BuilderForm from "@/components/build/BuilderForm";
import ResumePreview from "@/components/build/ResumePreview";
import { loadData, saveData, resetData } from "../lib/storage";
import type { PortfolioData } from "../lib/types";
import { DEFAULT_DATA } from "../lib/defaults"; 

export default function BuilderPage() {
  const [data, setData] = useState<PortfolioData>(DEFAULT_DATA);

  useEffect(() => {
    const stored = loadData();
    setData(stored);
  }, []);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const handleReset = () => {
    resetData();
    setData(DEFAULT_DATA);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Rezume Builder</h1>
          <p className="text-sm text-slate-600">
            Fill your details and see a live preview instantly.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex w-fit items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <BuilderForm data={data} onChange={setData} />
        </div>

       
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <ResumePreview data={data} />
        </div>
      </div>
    </div>
  );
}
