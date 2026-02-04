import Link from "next/link";

const NAVY = "#0f1b3d";
const WINE = "#7a1f2b";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
    
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: WINE }} />
            Live preview • Auto-save • Clean output
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: NAVY }}>
            Rezume helps you build a clean, professional resume in minutes.
          </h1>

          <p className="text-base leading-relaxed text-slate-600">
            Enter your details, add skills and projects, and see your resume update instantly.
            Rezume saves your progress automatically, so you can pick up anytime.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/builder"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: WINE }}
            >
              Start Building
            </Link>

            <Link
              href="/preview"
              className="inline-flex items-center justify-center rounded-lg border border-wine bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              View Preview
            </Link>
          </div>
        </div>

       
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-xl p-5 text-white" style={{ backgroundColor: NAVY }}>
            <p className="text-xs opacity-90">Preview</p>
            <h2 className="mt-1 text-xl font-bold">Your Name</h2>
            <p className="text-sm opacity-90">Frontend Developer</p>

            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs opacity-90">
              <span>you@email.com</span>
              <span>•</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: WINE }} />
                <p className="text-sm font-semibold text-slate-900">Why Rezume?</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most resume tools feel heavy and confusing. Rezume keeps it simple:
                type your info, preview instantly, and keep things clean.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <FeatureMini title="Live Preview" desc="See changes instantly." />
              <FeatureMini title="Auto Save" desc="Your work stays safe." />
              <FeatureMini title="Clean Layout" desc="Professional output." />
              <FeatureMini title="Fast Editing" desc="Add skills/projects quick." />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Stat label="Built for speed" value="Instant updates" />
        <Stat label="Data safety" value="Auto-saved" />
        <Stat label="Output style" value="Clean & readable" />
      </section>

   
      <section className="mt-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900">Everything you need... Nothing you don&apos;t</h2>
          <p className="mt-2 text-slate-600">
            Rezume focuses on the core sections that make a resume strong: profile, summary, skills, and projects.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FeatureCard
            title="Personal information"
            desc="Name, role, email, and location appear neatly at the top."
          />
          <FeatureCard
            title="Summary that stands out"
            desc="Write a short professional summary with a clean, readable layout."
          />
          <FeatureCard
            title="Skills management"
            desc="Add and remove skills quickly — no duplicates, no mess."
          />
          <FeatureCard
            title="Project showcase"
            desc="Add your best projects with title, description, and optional link."
          />
        </div>
      </section>

   
      <section className="mt-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
          <p className="mt-2 text-slate-600">
            A simple workflow designed to help you finish faster.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <StepCard
            step="1"
            title="Enter your details"
            desc="Fill your personal info and summary in the builder."
          />
          <StepCard
            step="2"
            title="Add skills & projects"
            desc="Show your strongest skills and best work."
          />
          <StepCard
            step="3"
            title="Preview & polish"
            desc="Review your resume and adjust until it looks right."
          />
        </div>
      </section>
    
      <section className="mt-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <p className="mt-2 text-slate-600">
            Quick answers before you start.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FAQ
            q="Do I need an account?"
            a="No. Rezume stores your data in your browser automatically."
          />
          <FAQ
            q="Can I edit later?"
            a="Yes. Your data remains saved, so you can return and continue."
          />
          <FAQ
            q="Is it mobile friendly?"
            a="Yes. The builder and preview layout are responsive."
          />
          <FAQ
            q="Can I share my resume?"
            a="You can use the Preview page for a clean view. PDF export can be added next."
          />
        </div>
      </section>

      
      <section className="mt-16 rounded-2xl p-8 text-white" style={{ backgroundColor: NAVY }}>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold">Ready to build your resume?</h2>
          <p className="mt-2 text-sm opacity-90">
            Start now and watch your resume update in real time.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/builder"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: WINE }}
            >
              Start Building
            </Link>

            <Link
              href="/preview"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/15"
            >
              View Preview
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rezume. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/builder" className="hover:text-slate-700">Builder</Link>
            <Link href="/preview" className="hover:text-slate-700">Preview</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureMini({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="mt-2 text-lg font-bold text-slate-900">{value}</p>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
           style={{ backgroundColor: WINE }}>
        {step}
      </div>
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function TemplateMock({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
      <div className="mt-4 h-20 rounded-xl border border-slate-200 bg-white" />
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="text-sm font-semibold text-slate-900">{q}</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a}</p>
    </div>
  );
}
