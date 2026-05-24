# AI Blender Tutorial App

A static Blender learning site with cyberpunk UI — tutorials with YouTube embeds, topic guides, cheat sheets, resources, and **local progress tracking** (no server or database).

**Live repo:** https://github.com/godfiretrue/ai-blender-tutorial-app

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS 4
- All content in `client/src/data/content.ts`
- Progress saved in `localStorage`

## Run

```bash
git clone https://github.com/godfiretrue/ai-blender-tutorial-app.git
cd ai-blender-tutorial-app
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

Static output is in `client/dist/` — deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Edit content

Update [client/src/data/content.ts](client/src/data/content.ts) to add or change tutorials, cheat sheets, and resources.

## Features

- Landing page with featured tutorials and topic chips
- Tutorial list with category/difficulty filters
- Tutorial detail with markdown steps and YouTube embed
- Cheat sheets and curated resource links
- Search across all content
- Dashboard with progress bar (stored in your browser)
