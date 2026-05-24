import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getTutorial } from "../lib/data";
import { useProgress } from "../hooks/useProgress";
import { VideoEmbed } from "../components/VideoEmbed";
import { GlowButton } from "../components/GlowButton";

export function TutorialDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { completedSlugs, toggleComplete } = useProgress();

  const tutorial = useMemo(
    () => (slug ? getTutorial(slug, completedSlugs) : null),
    [slug, completedSlugs]
  );

  if (!tutorial) {
    return <p className="text-cyber-magenta">Tutorial not found.</p>;
  }

  return (
    <article>
      <Link to="/tutorials" className="text-sm text-gray-500 hover:text-cyber-cyan">
        ← Back to tutorials
      </Link>

      <header className="mt-4 mb-8">
        <span className="text-xs uppercase tracking-wider text-cyber-magenta">
          {tutorial.category.name} · {tutorial.difficulty} · {tutorial.durationMinutes} min
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold text-white">{tutorial.title}</h1>
        <p className="mt-2 text-gray-400">{tutorial.summary}</p>

        <div className="mt-4">
          <GlowButton
            variant={tutorial.completed ? "outline" : "cyan"}
            onClick={() => toggleComplete(tutorial.slug)}
          >
            {tutorial.completed ? "Mark incomplete" : "Mark complete"}
          </GlowButton>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {tutorial.youtubeId && <VideoEmbed youtubeId={tutorial.youtubeId} />}
          <div className="markdown-body border border-cyber-cyan/20 bg-cyber-panel p-6">
            <ReactMarkdown>{tutorial.body}</ReactMarkdown>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="border border-cyber-purple/30 bg-cyber-panel p-4">
            <h3 className="font-display text-sm text-cyber-purple uppercase mb-2">
              Quick tips
            </h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                Press <kbd className="text-cyber-cyan">F3</kbd> to search commands
              </li>
              <li>
                Press <kbd className="text-cyber-cyan">Z</kbd> for shading modes
              </li>
              <li>
                Press <kbd className="text-cyber-cyan">Tab</kbd> for Edit mode
              </li>
            </ul>
          </div>
          <Link
            to="/cheats"
            className="block border border-cyber-cyan/20 p-4 text-sm text-cyber-cyan hover:glow-cyan"
          >
            View all cheat sheets →
          </Link>
        </aside>
      </div>
    </article>
  );
}
