import { Link, NavLink } from "react-router-dom";
import { GlowButton } from "./GlowButton";

const links = [
  { to: "/tutorials", label: "Tutorials" },
  { to: "/topics", label: "Topics" },
  { to: "/cheats", label: "Cheats" },
  { to: "/resources", label: "Resources" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyber-cyan/20 bg-cyber-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-widest text-cyber-cyan text-glow-cyan"
        >
          BLENDER<span className="text-cyber-magenta">CYBER</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-display text-sm uppercase tracking-wider transition-colors ${
                  isActive ? "text-cyber-cyan" : "text-gray-400 hover:text-cyber-cyan"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <GlowButton to="/dashboard" variant="cyan" className="!px-3 !py-1.5 !text-xs">
          Progress
        </GlowButton>
      </div>
    </header>
  );
}
