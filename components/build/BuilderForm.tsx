import { useState } from "react";
import type { BuilderProps, PortfolioData, Project } from "@/lib/types";

export default function BuilderForm({ data, onChange }: BuilderProps) {
  const [skillText, setSkillText] = useState("");

  const update = <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => {
    onChange({ ...data, [key]: value });
  };

  const addSkill = () => {
    const newSkill = skillText.trim();
    if (!newSkill) return;

    const exists = data.skills.some((skill) => skill.toLowerCase() === newSkill.toLowerCase());
    if (exists) return;

    update("skills", [newSkill, ...data.skills]);
    setSkillText("");
  };

  const removeSkill = (skill: string) => {
    update("skills", data.skills.filter((newSkill) => newSkill !== skill));
  };

  const addProject = () => {
    const newProject: Project = {
      title: "",
      description: "",
      link: "",
      tech: "",
      id:crypto.randomUUID(),
    };
    update("projects", [newProject, ...data.projects]);
  };

  const updateProject = (index: number, patch: Partial<Project>) => {
    const next = [...data.projects];
    next[index] = { ...next[index], ...patch };
    update("projects", next);
  };

  const removeProject = (index: number) => {
    update("projects", data.projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
     
      <section className="space-y-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Personal Info</h2>
          <p className="text-sm text-slate-600">This appears at the top of your Resume.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Full Name">
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
              value={data.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="e.g. Ismail Abdulmatiin"
            />
          </Field>

          <Field label="Role / Title">
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
              value={data.role}
              onChange={(e) => update("role", e.target.value)}
              placeholder="e.g. Frontend Developer"
            />
          </Field>

          <Field label="Email">
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@email.com"
            />
          </Field>

          <Field label="Location">
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
              value={data.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="Lagos, Nigeria"
            />
          </Field>
        </div>

        <Field label="Summary">
          <textarea
            className="w-full min-h-[110px] rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
            value={data.summary}
            onChange={(e) => update("summary", e.target.value)}
            placeholder="2–4 lines about you..."
          />
        </Field>
      </section>

     
      <section className="space-y-3 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Skills</h2>
            <p className="text-sm text-slate-600">Add and remove skills.</p>
          </div>
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
            value={skillText}
            onChange={(e) => setSkillText(e.target.value)}
            placeholder="Add skill e.g. React"
          />
          <button
            type="button"
            onClick={addSkill}
            className="rounded-lg bg-[#7a1f2b] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.skills.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => removeSkill(s)}
              className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
              title="Click to remove"
            >
              {s} <span className="text-slate-400">×</span>
            </button>
          ))}
        </div>
      </section>

      
      <section className="space-y-3 border-t border-slate-100 pt-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Projects</h2>
            <p className="text-sm text-slate-600">Add your best work.</p>
          </div>

          <button
            type="button"
            onClick={addProject}
            className="rounded-lg bg-[#0f1b3d] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Add Project
          </button>
        </div>

        <div className="space-y-4">
          {data.projects.map((p, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">Project #{data.projects.length - i}</p>
                <button
                  type="button"
                  onClick={() => removeProject(i)}
                  className="text-sm font-medium text-[#7a1f2b] hover:underline"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Title">
                  <input
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
                    value={p.title}
                    onChange={(e) => updateProject(i, { title: e.target.value })}
                    placeholder="e.g. Rezume Builder"
                  />
                </Field>

                <Field label="Link (optional)">
                  <input
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
                    value={p.link}
                    onChange={(e) => updateProject(i, { link: e.target.value })}
                    placeholder="e.g. https://github.com/..."
                  />
                </Field>
              </div>

              <Field label="Description">
                <textarea
                  className="w-full min-h-[90px] rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7a1f2b]/20"
                  value={p.description}
                  onChange={(e) => updateProject(i, { description: e.target.value })}
                  placeholder="What it does, your role, tools used..."
                />
              </Field>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}
