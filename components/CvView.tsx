type WorkItem = {
  role: string;
  company: string;
  period: string;
  details?: string[];
};

type Project = {
  name: string;
  description: string;
  url?: string;
};

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details?: string[];
};

type Section = {
  heading: string;
  items: (string | WorkItem | Project | EducationItem)[];
};

type CVProps = {
  title: string;
  summary: string;
  sections: Section[];
  skills?: string[];
};

function highlightText(text: string) {
  const regex = /\*\*(.*?)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(regex)) {
    const [fullMatch, inner] = match;
    const start = match.index ?? 0;

    if (lastIndex < start) {
      parts.push(<span key={lastIndex}>{text.slice(lastIndex, start)}</span>);
    }

    parts.push(
      <span key={start} className="font-bold text-black">
        {inner}
      </span>
    );

    lastIndex = start + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
  }

  return parts;
}

export function CVView({ title, summary, sections, skills }: CVProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-black print:p-0 print:bg-white print:text-black">
      {/* Title & Summary */}
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-700 mt-2">{summary}</p>

      {/* Contact Info */}
      <div className="mt-2 text-gray-700 space-x-4 text-sm print:inline">
        <span>
          Email:{" "}
          <a
            href="mailto:oneraner@gmail.com"
            className="text-gray-400 visited:text-gray-600 underline print:text-black print:no-underline"
          >
            oneraner@gmail.com
          </a>
        </span>
        <span>
          GitHub:{" "}
          <a
            href="https://github.com/oneraner"
            target="_blank"
            rel="noopener"
            className="text-gray-400 visited:text-gray-600 underline print:text-black print:no-underline"
          >
            github.com/oneraner
          </a>
        </span>
        <span>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/jeffchao0823/"
            target="_blank"
            rel="noopener"
            className="text-gray-400 visited:text-gray-600 underline print:text-black print:no-underline"
          >
            linkedin.com/in/jeffchao0823
          </a>
        </span>
      </div>

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-gray-400 text-gray-800 text-xs px-2 py-1 rounded print:border-black print:text-black"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Sections */}
      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-xl font-semibold text-black">
              {section.heading}
            </h2>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              {section.items.map((item) => {
                if (typeof item === "string") return <li key={item}>{item}</li>;

                if ("role" in item && "company" in item) {
                  return (
                    <li key={item.company} className="space-y-1">
                      <div className="font-medium text-black">
                        {item.role} @ {item.company}{" "}
                        <span className="text-sm text-gray-500">
                          ({item.period})
                        </span>
                      </div>
                      {item.details && (
                        <ul className="list-[circle] pl-5 text-gray-700 text-sm">
                          {item.details.map((d) => (
                            <li key={d} className="leading-relaxed">
                              {highlightText(d)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                if ("school" in item && "degree" in item) {
                  return (
                    <li key={item.degree} className="space-y-1">
                      <div className="font-medium text-black">
                        {item.degree}, {item.school}{" "}
                        <span className="text-sm text-gray-500">
                          ({item.period})
                        </span>
                      </div>
                      {item.details && (
                        <ul className="list-[square] pl-5 text-gray-700 text-sm">
                          {item.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                if ("name" in item && "description" in item) {
                  return (
                    <li key={item.name} className="space-y-1">
                      <div className="font-medium text-black">
                        {item.name}{" "}
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            className="text-gray-400 visited:text-gray-600 underline print:text-black print:no-underline ml-1"
                          >
                            {item.url}
                          </a>
                        )}
                      </div>
                      <div className="text-gray-700 text-sm">
                        {item.description}
                      </div>
                    </li>
                  );
                }

                return null;
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
