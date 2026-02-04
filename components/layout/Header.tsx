import Link from "next/link";

export default function Header() {
  return (
    <header className="print:hidden w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-blue-900">
          Rezume
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/builder"
            className="hover:text-blue-600 transition-colors"
          >
            Builder
          </Link>

          <Link
            href="/preview"
            className="hover:text-blue-600 transition-colors"
          >
            Preview
          </Link>
        </nav>
      </div>
    </header>
  );
}
