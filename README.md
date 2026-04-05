# Personal site (Astro)

Static portfolio and blog built with [Astro](https://astro.build/), Tailwind, and Preact islands. Deployed via GitHub Pages (see `.github/workflows`).

## Content

- **Home / About / Qualifications:** main landing sections.
- **Portfolio:** curated public repositories (Angular-first: habit-tracker, mini-scrum, blackjack; React: dailys-board). Copy lives in `public/lang/en.json` and `public/lang/es.json` (`data-i18n-key` attributes).
- **Blog:** MD/MDX under `src/content/blog/`.

## Adding a portfolio project

1. Add translation keys in `public/lang/en.json` and `public/lang/es.json` (title, description; reuse `code`, `demo` where needed).
2. Optionally add screenshots under `public/img/` (WebP recommended).
3. Register a `<ProjectCard />` in [`src/components/Portfolio.astro`](src/components/Portfolio.astro) with `codeUrl`, optional `demoUrl`, `tags`, and `placeholder` (`sky` | `violet` | `emerald` | `none`) if you have no image.

## Scripts

```bash
npm install
npm run dev    # local dev
npm run build  # output in dist/
npm run preview
```

After changes, run `npm run build` locally before pushing so CI stays green.
