import { Link } from "react-router-dom";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "cyan" | "magenta" | "outline";

const variants: Record<Variant, string> = {
  cyan: "bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan hover:bg-cyber-cyan/20 glow-cyan",
  magenta:
    "bg-cyber-magenta/10 text-cyber-magenta border-cyber-magenta hover:bg-cyber-magenta/20 glow-magenta",
  outline: "bg-transparent text-gray-300 border-gray-600 hover:border-cyber-cyan hover:text-cyber-cyan",
};

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  to?: string;
}

export function GlowButton({
  variant = "cyan",
  children,
  className = "",
  to,
  ...props
}: GlowButtonProps) {
  const classes = `inline-flex items-center justify-center px-5 py-2.5 border font-display font-semibold tracking-wider uppercase text-sm transition-all ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
