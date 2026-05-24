import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getCategories, getTutorials } from "../lib/data";
import { useProgress } from "../hooks/useProgress";
import { GlowButton } from "../components/GlowButton";
import { TutorialCard } from "../components/TutorialCard";

export function LandingPage() {
  const { completedSlugs } = useProgress();
  const tutorials = useMemo(
    () => getTutorials(undefined, completedSlugs),
    [completedSlugs]
  );
  const categories = useMemo(() => getCategories(), []);
  const featured = tutorials.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden border border-cyber-cyan/30 bg-cyber-panel px-6 py-20 scanlines">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-2 font-display text-sm tracking-[0.3em] text-cyber-magenta uppercase">
            Neural learning grid
          </p>
          <h1
            className="glitch font-display text-4xl font-black tracking-tight text-white md:text-6xl"
            data-text="MASTER BLENDER"
          >
            MASTER BLENDER
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Tutorials, cheat sheets, and resources — all in one cyberpunk hub.
            Track your progress locally in your browser.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <GlowButton to="/tutorials">Start Learning</GlowButton>
            <GlowButton to="/dashboard" variant="magenta">
              View Progress
            </GlowButton>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl text-cyber-cyan mb-4">Topics</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/tutorials?category=${cat.slug}`}
              className="border border-cyber-purple/40 bg-cyber-panel px-4 py-2 text-sm text-gray-300 hover:border-cyber-purple hover:text-cyber-purple transition-colors"
            >
              {cat.name}
              <span className="ml-2 text-gray-500">({cat.tutorialCount})</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-xl text-cyber-cyan">Featured Tutorials</h2>
          <Link to="/tutorials" className="text-sm text-cyber-magenta hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((t) => (
            <TutorialCard key={t.slug} tutorial={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
