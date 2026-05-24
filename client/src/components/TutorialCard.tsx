import { Link } from "react-router-dom";
import type { Tutorial } from "../lib/types";

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link
      to={`/tutorials/${tutorial.slug}`}
      className="group block border border-cyber-cyan/20 bg-cyber-panel p-5 transition-all hover:border-cyber-cyan/50 hover:glow-cyan"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs uppercase tracking-wider text-cyber-magenta">
          {tutorial.category.name}
        </span>
        {tutorial.completed && (
          <span className="text-xs text-cyber-cyan">✓ Done</span>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold text-white group-hover:text-cyber-cyan">
        {tutorial.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-gray-400">{tutorial.summary}</p>
      <div className="mt-4 flex gap-3 text-xs text-gray-500">
        <span className="capitalize">{tutorial.difficulty}</span>
        <span>·</span>
        <span>{tutorial.durationMinutes} min</span>
        {tutorial.youtubeId && (
          <>
            <span>·</span>
            <span className="text-cyber-cyan">Video</span>
          </>
        )}
      </div>
    </Link>
  );
}
