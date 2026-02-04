import { useEffect, useState } from "react";
import Link from "next/link";
import ResumePreview from "@/components/build/ResumePreview";
import { loadData, resetData } from "@/lib/storage";
import type { PortfolioData } from "@/lib/types";
import { DEFAULT_DATA } from "@/lib/defaults";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PreviewPage() {
  const [data, setData] = useState<PortfolioData>(DEFAULT_DATA);

  useEffect(() => {
    setData(loadData());
  }, []);

  const handleReset = () => {
    resetData();
    setData(DEFAULT_DATA);
  };

  const downloadPDF = async () => {
    const view = document.getElementById("pdf-area");
    if (!view) return;

    const canvas = await html2canvas(view, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${data.fullName || "rezume"}.pdf`);
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Preview</h1>
          <p className="text-sm text-slate-600">
            This is the final view of your Rezume.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/builder"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Back to Builder
          </Link>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={downloadPDF}
            className="inline-flex items-center justify-center rounded-lg bg-[#7a1f2b] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div
        id="pdf-area"
        className="rounded-xl border border-slate-200 bg-white p-5"
      >
        <ResumePreview data={data} />
      </div>
    </div>
  );
}
