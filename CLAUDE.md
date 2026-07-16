# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with live reload (eleventy --serve)
npm run build    # Build static output to /dist
npm run debug    # Run with Eleventy debug logging (DEBUG=Eleventy*)
```

## Architecture

Personal portfolio built with **Eleventy 3.x** (ES modules, `"type": "module"` in package.json). Single-page layout assembled from collections and component partials.

**Source → Output:** `src/` → `dist/` via `eleventy.config.js`

### Content model

Content lives in `src/content/` as markdown files with front matter. Eleventy collections are defined in `eleventy.config.js`:
- `collections.experience` — career history, sorted by front-matter `order` field
- `collections.current` — current work showcases, sorted by `order`

Templates iterate these collections to build the page — there's no CMS or database.

### Templating

- Layout: `src/_includes/layouts/base.html` wraps all pages
- Components: `src/_includes/components/` — modular sections included by `src/index.html`
- Engine: Nunjucks for HTML; markdown files are preprocessed through Nunjucks before rendering
- Shortcodes: `{% year %}` (current year), `{% svg "name" %}` (inlines SVGs from `src/img/svg/`)
- Filters: custom `where` filter for array filtering in templates

### CSS

CSS is processed as an Eleventy compile target (not a passthrough copy). `src/css/style.css` imports partials via `@import`. LightningCSS bundles and minifies for production, targeting Chrome 95+, Firefox 90+, Safari 14+.

Design tokens (colors, fonts, easing, z-index) are in `src/css/_tokens.css` — change values there to retheme.

### JavaScript

Vanilla JS in `src/js/` passed through as-is. Three interactive behaviors use `IntersectionObserver`:
- Logo reveal animation (triggers when showcase section crosses viewport midpoint)
- Nav active-state tracking (highlights current section)
- Dark mode toggle (activates when contact section is visible)
