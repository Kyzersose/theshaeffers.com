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

Every push to `main` automatically deploys the site via a GitHub Actions workflow, [`.github/workflows/deploy-to-s3.yml`](.github/workflows/deploy-to-s3.yml). There is nothing to build, so the workflow just publishes the files as they are.

```
push to main → checkout → configure AWS credentials → upload changed files to S3 → purge Cloudflare cache
```

1. **Checkout** the repository with full history.
2. **Configure AWS credentials** (region `us-east-1`).
3. **Sync only what changed.** The workflow runs `git diff` between the previous and new commit, uploads added or modified files with `aws s3 cp`, and removes deleted files with `aws s3 rm`. `.github/` and `screenshots/` are never deployed. If there is no usable previous commit (first push or force push), it falls back to a full `aws s3 sync --delete`.
4. **Purge the Cloudflare cache** (`purge_everything`) so visitors get the new version right away. This is skipped when nothing was deployed.

### Required secrets

Set these under **Settings → Secrets and variables → Actions**. They are never stored in the repo.

| Secret | Purpose |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | AWS IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM user secret key |
| `AWS_S3_BUCKET` | Name of the S3 bucket hosting the site |
| `CLOUDFLARE_ZONE_ID` | Cloudflare zone for theshaeffers.com |
| `CLOUDFLARE_API_TOKEN` | Cloudflare token with cache purge permission |

## Credits

Site by [Cristo Creative Tech](https://cristocreativetech.com).

© Matt and Sarah Shaeffer. Personal photos and text are not licensed for reuse.
