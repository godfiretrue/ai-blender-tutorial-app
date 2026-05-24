import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "blender-cyber-completed";

function loadCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function saveCompleted(slugs: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...slugs]));
}

interface ProgressContextValue {
  completedSlugs: Set<string>;
  isCompleted: (slug: string) => boolean;
  toggleComplete: (slug: string) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(loadCompleted);

  const isCompleted = useCallback(
    (slug: string) => completedSlugs.has(slug),
    [completedSlugs]
  );

  const toggleComplete = useCallback((slug: string) => {
    setCompletedSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      saveCompleted(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ completedSlugs, isCompleted, toggleComplete }),
    [completedSlugs, isCompleted, toggleComplete]
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
