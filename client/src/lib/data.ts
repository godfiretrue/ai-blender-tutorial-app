import {
  categories as categoryDefs,
  rawTutorials,
  cheatSheets,
  resources,
} from "../data/content";
import type { Category, Tutorial, CheatSheet, Resource } from "./types";

const categoryMap = Object.fromEntries(
  categoryDefs.map((c) => [c.slug, { ...c }])
) as Record<string, Category>;

function buildTutorial(raw: (typeof rawTutorials)[number], completedSlugs: Set<string>): Tutorial {
  const category = categoryMap[raw.categorySlug];
  return {
    slug: raw.slug,
    title: raw.title,
    summary: raw.summary,
    body: raw.body,
    youtubeId: raw.youtubeId,
    difficulty: raw.difficulty,
    durationMinutes: raw.durationMinutes,
    order: raw.order,
    category,
    completed: completedSlugs.has(raw.slug),
  };
}

export function getCategories(): Category[] {
  const counts = new Map<string, number>();
  for (const t of rawTutorials) {
    counts.set(t.categorySlug, (counts.get(t.categorySlug) ?? 0) + 1);
  }
  return categoryDefs.map((c) => ({
    ...c,
    tutorialCount: counts.get(c.slug) ?? 0,
  }));
}

export function getTutorials(
  filters?: { category?: string; difficulty?: string; q?: string },
  completedSlugs: Set<string> = new Set()
): Tutorial[] {
  let list = rawTutorials.map((t) => buildTutorial(t, completedSlugs));

  if (filters?.category) {
    list = list.filter((t) => t.category.slug === filters.category);
  }
  if (filters?.difficulty) {
    list = list.filter((t) => t.difficulty === filters.difficulty);
  }
  if (filters?.q?.trim()) {
    const q = filters.q.toLowerCase();
    list = list.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.body.toLowerCase().includes(q)
    );
  }

  return list.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getTutorial(slug: string, completedSlugs: Set<string> = new Set()): Tutorial | null {
  const raw = rawTutorials.find((t) => t.slug === slug);
  if (!raw) return null;
  return buildTutorial(raw, completedSlugs);
}

export function getCheatSheets(): CheatSheet[] {
  return [...cheatSheets].sort((a, b) => a.title.localeCompare(b.title));
}

export function getResources(type?: string): Resource[] {
  let list = [...resources];
  if (type) list = list.filter((r) => r.type === type);
  return list.sort((a, b) => a.title.localeCompare(b.title));
}

export function searchAll(
  q: string,
  completedSlugs: Set<string> = new Set()
): {
  tutorials: Tutorial[];
  cheatsheets: CheatSheet[];
  resources: Resource[];
} {
  const query = q.trim().toLowerCase();
  if (!query) return { tutorials: [], cheatsheets: [], resources: [] };

  const tutorials = getTutorials({ q }, completedSlugs).slice(0, 10);

  const cheats = getCheatSheets()
    .filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.content.toLowerCase().includes(query)
    )
    .slice(0, 10);

  const res = getResources().filter(
    (r) =>
      r.title.toLowerCase().includes(query) ||
      r.description.toLowerCase().includes(query)
  ).slice(0, 10);

  return { tutorials, cheatsheets: cheats, resources: res };
}

export function getProgressStats(completedSlugs: Set<string>) {
  const total = rawTutorials.length;
  const completed = rawTutorials.filter((t) => completedSlugs.has(t.slug)).length;
  const all = getTutorials(undefined, completedSlugs);
  const completedList = all.filter((t) => t.completed);
  const resume = all.filter((t) => !t.completed).slice(0, 5);

  return {
    stats: {
      total,
      completed,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0,
    },
    completedTutorials: completedList,
    resume,
  };
}
