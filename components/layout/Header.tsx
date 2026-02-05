import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const linkClass = (path: string) =>
    `transition-colors underline-offset-4 ${
      router.pathname === path
        ? "underline decoration-[#7a1f2b] text-[#7a1f2b]"
        : "text-gray-700 hover:text-blue-600 hover:underline decoration-slate-300 hover:decoration-[#7a1f2b]"
    }`;

  return (
    <header className="print:hidden w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-blue-900">
          Rezume
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/builder" className={linkClass("/builder")}>
            Builder
          </Link>

          <Link href="/preview" className={linkClass("/preview")}>
            Preview
          </Link>
        </nav>
      </div>
    </header>
  );
}
