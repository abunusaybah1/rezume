import type { PortfolioData, ResumePreviewProps } from "@/lib/types";

const NAVY = "#0f1b3d";
const WINE = "#7a1f2b";

export default function ResumePreview({ data }: ResumePreviewProps) {
  return <ModernResume data={data} />;
}

function ModernResume({ data }: { data: PortfolioData }) {
  const name = data.fullName?.trim() || "Your Name";
  const role = data.role?.trim() || "Your Role / Title";
  const yoe = data.yoe?.toString().trim();

  const hasLinks = !!(
    data.portfolio?.trim() ||
    data.github?.trim() ||
    data.linkedin?.trim()
  );

  return (
    <div className="w-full">
      <header className="print-avoid-break">
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div
            className="px-6 py-5 text-white"
            style={{ backgroundColor: NAVY }}
          >
            <h1 className="text-3xl font-bold">{name}</h1>

            <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <p className="text-sm opacity-90">{role}</p>
              {yoe ? (
                <span className="text-sm opacity-90">
                  • {yoe} {yoe === "1" ? "year" : "years"} experience
                </span>
              ) : null}
            </div>

            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm opacity-90">
              {data.email?.trim() ? <span>{data.email}</span> : null}
              {data.email?.trim() && data.phone?.trim() ? <span>•</span> : null}
              {data.phone?.trim() ? <span>{data.phone}</span> : null}
              {(data.email?.trim() || data.phone?.trim()) &&
              data.location?.trim() ? (
                <span>•</span>
              ) : null}
              {data.location?.trim() ? <span>{data.location}</span> : null}
            </div>

            {hasLinks ? (
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {data.portfolio?.trim() ? (
                  <ModernLinkItem label="Portfolio" href={data.portfolio} />
                ) : null}
                {data.github?.trim() ? (
                  <ModernLinkItem label="GitHub" href={data.github} />
                ) : null}
                {data.linkedin?.trim() ? (
                  <ModernLinkItem label="LinkedIn" href={data.linkedin} />
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="px-6 py-5 bg-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

                <section className="print-avoid-break">
                  <ModernTitle title="Languages" />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.languages?.length ? (
                      data.languages.map((l) => (
                        <span
                          key={l}
                          className="rounded-full px-3 py-1 text-xs font-medium"
                          style={{ backgroundColor: `${WINE}15`, color: WINE }}
                        >
                          {l}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-slate-600">No language yet.</p>
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
                                href={normalizeUrl(p.link)}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-[#7a1f2b]"
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
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-600">
                        No projects added yet.
                      </p>
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

function ModernTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: WINE }}
      />
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
    </div>
  );
}

function ModernLinkItem({ label, href }: { label: string; href: string }) {
  const safe = normalizeUrl(href);
  return (
    <a
      href={safe}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white"
    >
      {label}
    </a>
  );
}

function normalizeUrl(url: string) {
  const u = url.trim();
  if (!u) return u;
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return `https://${u}`;
}
