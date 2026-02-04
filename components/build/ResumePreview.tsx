import React from "react";
import type { PortfolioData, ResumePreviewProps } from "@/lib/types";

const NAVY = "#0f1b3d";
const WINE = "#7a1f2b";

export default function ResumePreview({ data, template = "classic" }: ResumePreviewProps) {
  if (template === "modern") {
    return <ModernResume data={data} />;
  }
  return <ClassicResume data={data} />;
}

function ClassicResume({ data }: { data: PortfolioData }) {
  const name = data.fullName?.trim() || "Your Name";
  const role = data.role?.trim() || "Your Role / Title";
  const email = data.email?.trim();
  const location = data.location?.trim();

  return (
    <div className="w-full">
      <header className="pb-4 border-b border-slate-200 print-avoid-break">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: NAVY }}>
          {name}
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-700">{role}</p>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600">
          {email ? <span>{email}</span> : null}
          {email && location ? <span className="text-slate-400">•</span> : null}
          {location ? <span>{location}</span> : null}
        </div>
      </header>

      <main className="pt-4 space-y-6">
        <section className="print-avoid-break">
          <SectionTitle title="Summary" />
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {data.summary?.trim()
              ? data.summary
              : "Write a short professional summary (2–4 lines)."}
          </p>
        </section>

        <section className="print-avoid-break">
          <SectionTitle title="Skills" />
          {data.skills?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {data.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700"
                  style={{ borderLeft: `3px solid ${WINE}` }}
                >
                  {s}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-sm text-slate-600">No skills added yet.</p>
          )}
        </section>

        <div className="hidden print:block print-page-break" />

        <section>
          <SectionTitle title="Projects" />
          {data.projects?.length ? (
            <div className="mt-3 space-y-4">
              {data.projects.map((p, idx) => (
                <div
                  key={p.id || idx}
                  className="pb-3 border-b border-slate-100 last:border-b-0 print-avoid-break"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold text-slate-900">
                      {p.title?.trim() ? p.title : `Project ${idx + 1}`}
                    </p>

                    {p.link?.trim() ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium hover:underline"
                        style={{ color: WINE }}
                      >
                        Link
                      </a>
                    ) : null}
                  </div>

                  {p.description?.trim() ? (
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {p.description}
                    </p>
                  ) : (
                    <p className="mt-1 text-sm text-slate-600">
                      Add a short description of what the project does.
                    </p>
                  )}

                  {p.tech?.trim() ? (
                    <p className="mt-1 text-xs text-slate-600">
                      <span className="font-semibold text-slate-700">Tech:</span>{" "}
                      {p.tech}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-sm text-slate-600">No projects added yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}

function ModernResume({ data }: { data: PortfolioData }) {
  const name = data.fullName?.trim() || "Your Name";
  const role = data.role?.trim() || "Your Role / Title";

  return (
    <div className="w-full">
      <header className="print-avoid-break">
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-5 text-white" style={{ backgroundColor: NAVY }}>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="mt-1 text-sm opacity-90">{role}</p>

            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm opacity-90">
              {data.email?.trim() ? <span>{data.email}</span> : null}
              {data.email?.trim() && data.location?.trim() ? <span>•</span> : null}
              {data.location?.trim() ? <span>{data.location}</span> : null}
            </div>
          </div>

          <div className="px-6 py-5 bg-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Left */}
              <div className="md:col-span-1 space-y-5">
                <section className="print-avoid-break">
                  <ModernTitle title="Skills" />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.skills?.length ? (
                      data.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full px-3 py-1 text-xs font-medium"
                          style={{ backgroundColor: `${WINE}15`, color: WINE }}
                        >
                          {s}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-slate-600">No skills yet.</p>
                    )}
                  </div>
                </section>
              </div>

              <div className="md:col-span-2 space-y-6">
                <section className="print-avoid-break">
                  <ModernTitle title="Summary" />
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {data.summary?.trim()
                      ? data.summary
                      : "Write a short professional summary (2–4 lines)."}
                  </p>
                </section>

                <section>
                  <ModernTitle title="Projects" />
                  <div className="mt-3 space-y-4">
                    {data.projects?.length ? (
                      data.projects.map((p, idx) => (
                        <div
                          key={p.id || idx}
                          className="rounded-xl border border-slate-200 p-4 print-avoid-break"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <p className="text-sm font-semibold text-slate-900">
                              {p.title?.trim() ? p.title : `Project ${idx + 1}`}
                            </p>
                            {p.link?.trim() ? (
                              <a
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium hover:underline"
                                style={{ color: WINE }}
                              >
                                Link
                              </a>
                            ) : null}
                          </div>

                          {p.description?.trim() ? (
                            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                              {p.description}
                            </p>
                          ) : (
                            <p className="mt-2 text-sm text-slate-600">
                              Add a short description of what the project does.
                            </p>
                          )}

                          {p.tech?.trim() ? (
                            <p className="mt-2 text-xs text-slate-600">
                              <span className="font-semibold text-slate-700">Tech:</span>{" "}
                              {p.tech}
                            </p>
                          ) : null}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-600">No projects added yet.</p>
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: WINE }} />
      <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">{title}</h2>
    </div>
  );
}

function ModernTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: WINE }} />
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
    </div>
  );
}
