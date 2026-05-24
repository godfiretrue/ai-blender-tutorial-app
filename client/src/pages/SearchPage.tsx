import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchAll } from "../lib/data";
import { useProgress } from "../hooks/useProgress";
import { TutorialCard } from "../components/TutorialCard";

export function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";
  const { completedSlugs } = useProgress();

  const data = useMemo(
    () => (q ? searchAll(q, completedSlugs) : null),
    [q, completedSlugs]
  );

  if (!q) {
    return <p className="text-gray-500">Enter a search term above.</p>;
  }

  const hasResults =
    (data?.tutorials.length ?? 0) > 0 ||
    (data?.cheatsheets.length ?? 0) > 0 ||
    (data?.resources.length ?? 0) > 0;

  return (
    <div>
      <h1 className="font-display text-2xl text-white mb-6">
        Results for <span className="text-cyber-cyan">&quot;{q}&quot;</span>
      </h1>

      {!hasResults && <p className="text-gray-500">No results found.</p>}

      {data && data.tutorials.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-lg text-cyber-cyan mb-4">Tutorials</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {data.tutorials.map((t) => (
              <TutorialCard key={t.slug} tutorial={t} />
            ))}
          </div>
        </section>
      )}

      {data && data.cheatsheets.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-lg text-cyber-cyan mb-4">Cheat Sheets</h2>
          <ul className="space-y-2">
            {data.cheatsheets.map((c) => (
              <li key={c.slug}>
                <Link to="/cheats" className="text-cyber-magenta hover:underline">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {data && data.resources.length > 0 && (
        <section>
          <h2 className="font-display text-lg text-cyber-cyan mb-4">Resources</h2>
          <ul className="space-y-2">
            {data.resources.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-cyan hover:underline"
                >
                  {r.title} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
