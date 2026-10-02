# theshaeffers.com

The family website for Matt and Sarah Shaeffer of Deatsville, Alabama — faith, family, homeschooling, and the things we're building.

**Live site:** [theshaeffers.com](https://theshaeffers.com)

## About

A small static site with no build step and no dependencies: plain HTML, CSS, and vanilla JavaScript.

- **Homepage** (`index.html`): a full-screen cinematic carousel. Cards expand from thumbnail to full-screen using [GSAP](https://gsap.com/), with swipe support on mobile and desktop. All CSS and JS are inline in the one file.
- **Interior pages** (`projects.html`, `curriculum.html`, `gapyear.html`): share a design system in `styles.css` (design tokens, bento grids, cards, nav) with `main.js` handling active nav state.
- **Installable PWA**: `manifest.json` and `sw.js` make the site installable and available offline.

## Run locally

Open any `.html` file in a browser, or serve the folder:

```sh
python3 -m http.server
```

## Adding a carousel slide

Add an entry to the `data` array in the inline script at the bottom of `index.html` with `section`, `title`, `title2`, `description`, and `image`. The carousel builds itself from `data.length`.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow (`.github/workflows/deploy-to-s3.yml`) that syncs the site to an S3 bucket and purges the Cloudflare cache. Credentials are stored as GitHub Actions secrets and are not part of the repo.

## Credits

Site by [Cristo Creative Tech](https://cristocreativetech.com).

© Matt and Sarah Shaeffer. Personal photos and text are not licensed for reuse.
