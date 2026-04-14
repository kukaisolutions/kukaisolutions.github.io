# kukaisolutions.github.io

Company website for Kukai Solutions. Built with [Astro](https://astro.build), Tailwind CSS, and TypeScript.

## Project structure

```
src/
├── i18n/ui.ts               # All EN/PT/ES translation strings
├── layouts/Layout.astro
├── components/
│   ├── Navbar.astro          # Centered logo, nav links, language selector
│   ├── Hero.astro
│   ├── Services.astro
│   ├── About.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   └── ui/
│       ├── LanguageSelector.astro
│       ├── ToggleTheme.astro
│       ├── Button.astro
│       └── BackToTop.astro
└── pages/
    ├── index.astro           # /        (English)
    ├── pt/index.astro        # /pt/     (Portuguese)
    └── es/index.astro        # /es/     (Spanish)
```

## Local development

### Requirements

- [pnpm](https://pnpm.io) — install with `npm install -g pnpm`
- **Node.js 20+** is required to run the dev server (`pnpm dev`). Node 18 can only run `pnpm build`.

### Install dependencies

```bash
pnpm install
```

### Dev server (Node 20+ only)

```bash
pnpm dev
```

Opens at [http://localhost:4321](http://localhost:4321) with hot reload on every save.

To upgrade Node.js via nvm:

```bash
nvm install 20
nvm use 20
pnpm dev
```

### Build and preview (Node 18 compatible)

Build the static site into `dist/`:

```bash
pnpm build
```

Then serve the output with one of the following:

**Python (no install needed):**
```bash
python3 -m http.server 4321 -d dist
```

**npx serve:**
```bash
npx serve dist
```

Then open [http://localhost:4321](http://localhost:4321).

## Deployment

```bash
pnpm deploy
```

Builds the site and publishes `dist/` to GitHub Pages via `gh-pages`.
