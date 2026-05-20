# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static family website for Matt and Sarah Shaeffer (Prattville, Alabama). No build system, no dependencies, no package manager — plain HTML, CSS, and vanilla JS served directly from files.

## Architecture

There are two coexisting design systems in this repo, representing an evolution of the site:

**Current redesign (active branch):** `index.html` is a self-contained, full-screen cinematic carousel homepage. All its CSS and JS live inline in that single file. It uses GSAP (loaded from CDN) to animate cards that expand from thumbnail → full-screen as the carousel advances. Two `#details-even` / `#details-odd` panels alternate to cross-fade slide text without layout flicker.

**Interior pages** (`journal.html`, `adventures.html`, `roots.html`) use a separate shared design system:
- `css/styles.css` — full design token system (CSS custom properties at `:root`), plus all component styles for nav, bento grids, journal cards, adventure rows, curriculum tables, footer, and mobile bottom nav
- `js/main.js` — small IIFE that marks active nav links on page load
- Fonts: Newsreader (serif) + Plus Jakarta Sans (sans) via Google Fonts, plus Material Symbols Outlined icons

**`stitch_the_shaeffer_family_life/`** — archived design explorations from an earlier AI design tool (Stitch). These are reference/inspiration screenshots and code, not part of the live site.

**`german-style/`** and **`Animated Card Opening/`** — standalone design experiments, not linked from the main site.

## Design tokens (interior pages)

Primary palette defined in `css/styles.css`:
- `--c-primary`: forest green `#37553d`
- `--c-secondary`: terra cotta `#9d4224`  
- `--c-tertiary`: slate blue `#28536b`
- `--c-bg`: warm off-white `#fdf9f3`
- Fonts: `--font-serif` (Newsreader), `--font-sans` (Plus Jakarta Sans)

Homepage carousel uses its own independent token set inline:
- `--clay`: `#c05a35`, `--amber`: `#c8913a`, `--dark`: `#0e0c09`
- Fonts: Cormorant Garamond + DM Sans

## Adding a new slide to the homepage carousel

Edit the `data` array in the inline `<script>` at the bottom of `index.html`. Each entry needs `section`, `title`, `title2`, `description`, `cta`, and `image` fields. The carousel and `order` array are built from `data.length` automatically.

## Image inventory

All images live in `images/`. Currently: `mattandsarah.jpg`, `church.jpg`, `tree-kids.jpg`, `prattville.jpg`, `van-pic.jpg`, `sunset-grill.jpg`, `christmas-train.jpg`, `PresleyDigger.jpg`, `cow.jpg`. The crest image (`images/crest-option1.png`) referenced in interior page navs is deleted — the nav will show broken until a new crest image is added.

## Active nav highlighting

`js/main.js` handles active state for `.nav-links a`, `.footer-nav-col a`, and `.bottom-nav-item` by comparing `href` to `window.location.pathname`. Every interior page must include `<script src="js/main.js"></script>` before `</body>`.

## No build step

To preview: open any `.html` file in a browser, or run a simple local server (`python3 -m http.server` or `npx serve .`). There is no compilation, bundling, or deployment pipeline configured here.
