export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  tutorialCount?: number;
}

export interface Tutorial {
  slug: string;
  title: string;
  summary: string;
  body: string;
  youtubeId: string | null;
  difficulty: string;
  durationMinutes: number;
  order: number;
  category: Category;
  completed?: boolean;
}

export interface CheatSheet {
  slug: string;
  title: string;
  content: string;
  category: string;
}

export interface Resource {
  title: string;
  url: string;
  description: string;
  type: string;
}
