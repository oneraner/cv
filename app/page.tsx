import Link from "next/link";
import { cvs } from "@/data";

const CONTACTS = [
  { label: "Email", href: "mailto:oneraner@gmail.com", text: "oneraner@gmail.com" },
  { label: "GitHub", href: "https://github.com/oneraner", text: "github.com/oneraner" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeffchao0823/",
    text: "linkedin.com/in/jeffchao0823",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Chih-Yuan Chao / 趙知遠</h1>
        <p className="text-gray-700 mt-2">
          Full Stack Engineer — React Native, React, Node.js, Go.
        </p>

        <div className="mt-2 text-gray-700 space-x-4 text-sm">
          {CONTACTS.map((c) => (
            <span key={c.label}>
              {c.label}:{" "}
              <a
                href={c.href}
                target="_blank"
                rel="noopener"
                className="text-gray-400 visited:text-gray-600 underline"
              >
                {c.text}
              </a>
            </span>
          ))}
        </div>

        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mt-8">
          Resumes / 履歷
        </h2>

        <ul className="mt-4 space-y-3">
          {Object.entries(cvs).map(([slug, cv]) => {
            const isZh = slug.endsWith("-zh");
            return (
              <li key={slug}>
                <Link
                  href={`/cv/${slug}`}
                  className="group flex items-baseline justify-between gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:border-black hover:bg-gray-50"
                >
                  <span>
                    <span className="font-semibold group-hover:underline">
                      {cv.title}
                    </span>
                    <span className="ml-2 rounded border border-gray-300 px-1.5 py-0.5 text-xs text-gray-600">
                      {isZh ? "中文" : "English"}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-sm text-gray-500">
                    /cv/{slug}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
