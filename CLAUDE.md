# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static family website for the Shaeffer family — no build system, no framework, no dependencies. Open any `.html` file directly in a browser to preview. There is no dev server, no `npm install`, no compilation step.

## Architecture

Pure vanilla HTML/CSS/JS:

- `index.html` — home page
- `journal.html` — homeschooling journal with article grid + curriculum reviews
- `adventures.html` — Alabama adventures photo gallery
- `roots.html` — family roots/ancestry shell page
- `css/styles.css` — single stylesheet with all styles
- `js/main.js` — single script; sets `.active` on nav links based on `window.location.pathname`
- `images/` — all photos referenced inline in HTML
- `stitch_the_shaeffer_family_life/` — Stitch AI-generated design explorations and reference code (not live pages)

Every page duplicates the same `<nav>`, `<footer>`, and `.bottom-nav` markup — there is no templating or includes.

## Design System

The design spec lives in `stitch_the_shaeffer_family_life/heirloom_homestead/DESIGN.md`. Key rules:

**Typography:** Newsreader (serif, for headlines/display) + Plus Jakarta Sans (sans-serif, for body). Headlines are large and italic; body is left-aligned and never center-aligned for long text.

**Color tokens** (defined as CSS custom properties in `:root`):
- `--c-primary`: `#37553d` — Forest Canopy green
- `--c-secondary`: `#9d4224` — Terracotta Hearth (accents, hover states)
- `--c-tertiary`: `#28536b` — Horizon Blue
- `--c-bg` / `--c-surface`: `#fdf9f3` — Cream Canvas (never pure white or pure black)
- Text: always `--c-on-surface` (`#1c1c18`), never `#000000`

**No-line rule:** No `1px solid` borders for sectioning — use background shifts between surface tiers instead. Divider lines on cards are forbidden.

**Shadows:** Ambient only — high blur (40px+), very low opacity (6%). Never `box-shadow: 0 2px 4px rgba(0,0,0,0.5)`.

**Navigation:** Sticky top nav (desktop, glassmorphism) + fixed bottom nav (mobile). Bottom nav hides at `min-width: 768px`; top nav links show at `min-width: 768px`. Body gets `padding-bottom: 5rem` on mobile to clear the bottom nav.

**Glassmorphism pattern:** `background: rgba(253, 249, 243, 0.82); backdrop-filter: blur(20px)` — used on nav and bottom nav.

## CSS Organization

`styles.css` is organized by section with block comments. Order: design tokens → reset → top nav → bottom nav → material icons → desktop breakpoint → page-specific sections (hero, bento grid, journal grid, adventures grid, roots, footer, animations).

The `fadeUp` keyframe animation is used on hero sections site-wide via `animation: fadeUp 0.75s ease both` on content containers.

## Adding a New Page

1. Copy the nav/footer/bottom-nav boilerplate from an existing page
2. Add the page link to `.nav-links`, `.bottom-nav`, and `.footer-nav-col` in every existing page
3. Add any new CSS sections to `styles.css` following the existing block-comment structure
4. `js/main.js` will auto-apply `.active` to the correct nav links based on filename
