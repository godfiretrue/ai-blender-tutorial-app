import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories, getTutorials } from "../lib/data";
import { useProgress } from "../hooks/useProgress";
import { TutorialCard } from "../components/TutorialCard";

export function TutorialsPage() {
  const [params, setParams] = useSearchParams();
  const { completedSlugs } = useProgress();
  const category = params.get("category") ?? undefined;
  const difficulty = params.get("difficulty") ?? undefined;
  const q = params.get("q") ?? undefined;

  const tutorials = useMemo(
    () => getTutorials({ category, difficulty, q }, completedSlugs),
    [category, difficulty, q, completedSlugs]
  );
  const categories = useMemo(() => getCategories(), []);

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-white mb-2">Tutorials</h1>
      <p className="text-gray-400 mb-8">Step-by-step Blender guides with video embeds.</p>

      <div className="mb-8 flex flex-wrap gap-4">
        <select
          value={category ?? ""}
          onChange={(e) => {
            const next = new URLSearchParams(params);
            if (e.target.value) next.set("category", e.target.value);
            else next.delete("category");
            setParams(next);
          }}
          className="border border-cyber-cyan/30 bg-cyber-panel px-3 py-2 text-gray-200"
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          value={difficulty ?? ""}
          onChange={(e) => {
            const next = new URLSearchParams(params);
            if (e.target.value) next.set("difficulty", e.target.value);
            else next.delete("difficulty");
            setParams(next);
          }}
          className="border border-cyber-cyan/30 bg-cyber-panel px-3 py-2 text-gray-200"
        >
          <option value="">All levels</option>
          <option value="beginner">Beginner</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((t) => (
          <TutorialCard key={t.slug} tutorial={t} />
        ))}
      </div>

      {tutorials.length === 0 && (
        <p className="text-gray-500">No tutorials match your filters.</p>
      )}
    </div>
  );
}
