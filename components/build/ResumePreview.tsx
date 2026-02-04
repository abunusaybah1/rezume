import type { PortfolioData } from "@/lib/types";

type Props = {
  data: PortfolioData;
};

export default function ResumePreview({ data }: Props) {
  const name = data.fullName?.trim() || "Your Name";
  const role = data.role?.trim() || "Your Role / Title";
  const email = data.email?.trim() || "you@email.com";
  const location = data.location?.trim() || "Lagos, Nigeria";

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* Top Bar */}
        <div className="bg-[#0f1b3d] px-6 py-5 text-white">
          <h2 className="text-2xl font-bold leading-tight">{name}</h2>
          <p className="mt-1 text-sm opacity-90">{role}</p>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs opacity-90">
            <span>{email}</span>
            <span>•</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 px-6 py-6">
          {/* Summary */}
          <section>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7a1f2b]" />
              <h3 className="text-sm font-semibold text-slate-900">Summary</h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-700">
              {data.summary?.trim()
                ? data.summary
                : "Write 2–4 lines about yourself (your strengths, what you build, and what you’re looking for)."}
            </p>
          </section>

          {/* Skills */}
          <section>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7a1f2b]" />
              <h3 className="text-sm font-semibold text-slate-900">Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {data.skills?.length ? (
                data.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-[#7a1f2b]/10 px-3 py-1 text-xs font-medium text-[#7a1f2b]"
                  >
                    {s}
                  </span>
                ))
              ) : (
                <p className="text-sm text-slate-500">No skills added yet.</p>
              )}
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7a1f2b]" />
              <h3 className="text-sm font-semibold text-slate-900">Projects</h3>
            </div>

            <div className="space-y-3">
              {data.projects?.length ? (
                data.projects.map((p, idx) => (
                  <div
                    key={p.id || `${idx}`}
                    className="rounded-xl border border-slate-200 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-900">
                        {p.title?.trim() ? p.title : `Project #${idx + 1}`}
                      </p>

                      {p.link?.trim() ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-[#7a1f2b] hover:underline"
                        >
                          View
                        </a>
                      ) : null}
                    </div>

                    {p.description?.trim() ? (
                      <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                        {p.description}
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-slate-500">
                        Add a short description of what the project does.
                      </p>
                    )}

                    {/* Tech (optional) */}
                    {p.tech?.trim() ? (
                      <p className="mt-2 text-xs text-slate-600">
                        <span className="font-semibold text-slate-700">Tech:</span>{" "}
                        {p.tech}
                      </p>
                    ) : null}
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">No projects added yet.</p>
              )}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 px-6 py-4 text-xs text-slate-500">
          Generated with <span className="font-semibold text-[#7a1f2b]">Rezume</span>
        </div>
      </div>
    </div>
  );
}
