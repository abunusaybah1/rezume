import type { PortfolioData } from "@/lib/types";

type Props = { data: PortfolioData };

const NAVY = "#0f1b3d";
const WINE = "#7a1f2b";

export default function ResumePreview({ data }: Props) {
  const name = data.fullName?.trim() || "Your Name";
  const role = data.role?.trim() || "Your Role / Title";

  const email = data.email?.trim();
  const location = data.location?.trim();

  return (
    <div className="w-full print:text-black">
      {/* Resume "paper" */}
      <div className="mx-auto w-full bg-white">
        {/* Header */}
        <header className="pb-4 border-b border-slate-200">
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

        {/* Body */}
        <main className="pt-4 space-y-6">
          {/* Summary */}
          <section>
            <SectionTitle title="Summary" />
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              {data.summary?.trim()
                ? data.summary
                : "Write a short professional summary (2–4 lines)."}
            </p>
          </section>

          {/* Skills */}
          <section>
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

          {/* Projects */}
          <section>
            <SectionTitle title="Projects" />
            {data.projects?.length ? (
              <div className="mt-3 space-y-4">
                {data.projects.map((p, idx) => (
                  <div key={p.id || idx} className="pb-3 border-b border-slate-100 last:border-b-0">
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
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{p.description}</p>
                    ) : (
                      <p className="mt-1 text-sm text-slate-600">
                        Add a short description of what the project does.
                      </p>
                    )}

                    {p.tech?.trim() ? (
                      <p className="mt-1 text-xs text-slate-600">
                        <span className="font-semibold text-slate-700">Tech:</span> {p.tech}
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
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#7a1f2b" }} />
      <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">{title}</h2>
    </div>
  );
}
