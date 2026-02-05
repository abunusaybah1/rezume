import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ResumePreview from "@/components/build/ResumePreview";
import { loadData, resetData } from "@/lib/storage";
import type { PortfolioData } from "@/lib/types";
import { DEFAULT_DATA } from "@/lib/defaults";

export default function PreviewPage() {
  const [data, setData] = useState<PortfolioData>(DEFAULT_DATA);

  useEffect(() => {
    setData(loadData());
  }, []);

  const handleReset = () => {
    resetData();
    setData(DEFAULT_DATA);
  };

  const downloadPDF = () => {
    window.print();
  };

  const title = data.fullName?.trim() ? `${data.fullName} – Rezume` : "Rezume";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="mx-auto w-full max-w-6xl px-4 py-8 print:max-w-none print:p-0">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Preview</h1>
            <p className="text-sm text-slate-600">
              Tip: In print settings, turn off "Headers and footers" for a clean
              PDF.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/builder"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Back to Builder
            </Link>

            <button
              type="button"
              onClick={downloadPDF}
              className="inline-flex items-center justify-center rounded-lg bg-[#7a1f2b] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Download PDF
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-3xl print:max-w-none">
          <div
            id="pdf-area"
            className="bg-white border border-slate-200 rounded-xl p-6 print:border-0 print:rounded-none print:p-0"
          >
            <ResumePreview data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
