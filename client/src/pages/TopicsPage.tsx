import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../lib/data";

const iconMap: Record<string, string> = {
  cube: "◆",
  brush: "✦",
  film: "▶",
  sun: "☀",
  nodes: "⬡",
};

export function TopicsPage() {
  const categories = useMemo(() => getCategories(), []);

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-white mb-2">Topics</h1>
      <p className="text-gray-400 mb-8">
        Explore Blender by discipline — pick a path and dive into tutorials.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/tutorials?category=${cat.slug}`}
            className="group border border-cyber-cyan/20 bg-cyber-panel p-6 transition-all hover:border-cyber-magenta/50 hover:glow-magenta"
          >
            <span className="text-3xl text-cyber-cyan">{iconMap[cat.icon] ?? "●"}</span>
            <h2 className="mt-3 font-display text-xl font-semibold text-white group-hover:text-cyber-magenta">
              {cat.name}
            </h2>
            <p className="mt-2 text-gray-400">{cat.description}</p>
            <p className="mt-4 text-sm text-cyber-cyan">
              {cat.tutorialCount} tutorial{cat.tutorialCount !== 1 ? "s" : ""} →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
