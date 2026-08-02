# Jevi Waugh — Personal Website

Research and engineering portfolio built with [Astro](https://astro.build/).

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Validate Astro and TypeScript |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build |

## Content

Structured Markdown content lives in `src/content/`:

- `projects/` — research, engineering, and analysis case studies
- `publications/` — manuscripts and publication notes
- `talks/` — presentations and recordings
- `teaching/` — UQ course pages

Profile, experience, metrics, and navigation data live in `src/data/profile.ts`.

Optimized source images live in `src/assets/media/`. PDFs are served from `static/uploads/`.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/publish.yaml`.
