import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { getCheatSheets } from "../lib/data";

export function CheatsPage() {
  const cheatsheets = useMemo(() => getCheatSheets(), []);

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-white mb-2">Cheat Sheets</h1>
      <p className="text-gray-400 mb-8">
        Essential Blender shortcuts — bookmark this page while you work.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {cheatsheets.map((cs) => (
          <div
            key={cs.slug}
            className="border border-cyber-cyan/20 bg-cyber-panel p-6 glow-cyan"
          >
            <span className="text-xs uppercase tracking-wider text-cyber-magenta">
              {cs.category}
            </span>
            <h2 className="mt-1 font-display text-lg text-white">{cs.title}</h2>
            <div className="markdown-body mt-4 text-sm">
              <ReactMarkdown>{cs.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
