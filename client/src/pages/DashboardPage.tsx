import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getProgressStats } from "../lib/data";
import { useProgress } from "../hooks/useProgress";
import { TutorialCard } from "../components/TutorialCard";

export function DashboardPage() {
  const { completedSlugs } = useProgress();
  const data = useMemo(() => getProgressStats(completedSlugs), [completedSlugs]);
  const stats = data.stats;

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-white mb-1">Your Progress</h1>
      <p className="text-gray-400 mb-8">Saved locally in your browser — no account needed.</p>

      <div className="mb-10 border border-cyber-cyan/30 bg-cyber-panel p-6 glow-cyan">
        <h2 className="font-display text-sm uppercase tracking-wider text-cyber-cyan mb-4">
          Completion
        </h2>
        <div className="flex items-end gap-4">
          <span className="font-display text-5xl font-bold text-white">
            {stats.percent}%
          </span>
          <span className="text-gray-400 pb-2">
            {stats.completed} / {stats.total} tutorials complete
          </span>
        </div>
        <div className="mt-4 h-2 bg-cyber-bg overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-magenta transition-all"
            style={{ width: `${stats.percent}%` }}
          />
        </div>
      </div>

      {data.resume.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-xl text-cyber-magenta mb-4">Continue learning</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.resume.map((t) => (
              <TutorialCard key={t.slug} tutorial={t} />
            ))}
          </div>
        </section>
      )}

      {data.completedTutorials.length > 0 && (
        <section>
          <h2 className="font-display text-xl text-cyber-cyan mb-4">Completed</h2>
          <ul className="space-y-2">
            {data.completedTutorials.map((t) => (
              <li key={t.slug}>
                <Link
                  to={`/tutorials/${t.slug}`}
                  className="text-gray-300 hover:text-cyber-cyan"
                >
                  ✓ {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.completedTutorials.length === 0 && data.resume.length === 0 && (
        <p className="text-gray-500">
          <Link to="/tutorials" className="text-cyber-cyan hover:underline">
            Browse tutorials
          </Link>{" "}
          to get started.
        </p>
      )}
    </div>
  );
}
