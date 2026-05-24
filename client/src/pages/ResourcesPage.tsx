import { useMemo, useState } from "react";
import { getResources } from "../lib/data";

const types = ["", "docs", "addon", "asset", "community"];

export function ResourcesPage() {
  const [type, setType] = useState("");
  const resources = useMemo(() => getResources(type || undefined), [type]);

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-white mb-2">Resources</h1>
      <p className="text-gray-400 mb-8">
        Curated links to docs, addons, assets, and the Blender community.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t || "all"}
            onClick={() => setType(t)}
            className={`border px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
              type === t
                ? "border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan"
                : "border-gray-700 text-gray-400 hover:border-cyber-cyan/50"
            }`}
          >
            {t || "All"}
          </button>
        ))}
      </div>

      <ul className="space-y-4">
        {resources.map((r) => (
          <li
            key={r.url}
            className="border border-cyber-cyan/20 bg-cyber-panel p-5 hover:border-cyber-magenta/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs uppercase text-cyber-purple">{r.type}</span>
                <h2 className="font-display text-lg text-white mt-1">{r.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{r.description}</p>
              </div>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 border border-cyber-cyan px-3 py-1 text-xs uppercase text-cyber-cyan hover:bg-cyber-cyan/10"
              >
                Open ↗
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
