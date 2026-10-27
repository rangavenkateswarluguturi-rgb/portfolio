# Ranga Venkateswarlu Guturi — Portfolio

A lightweight, responsive portfolio built with semantic HTML, CSS, and vanilla JavaScript. No build step or package installation is required.

## Run locally

Open `index.html` in a browser, or start a local static server from this folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize before publishing

Edit the `siteConfig` object near the top of `script.js`:

- Set `email` to the address you want recruiters to use.
- Set `projectRepositories.llm` and `projectRepositories.abap` when those repository URLs are available. The project cards show a clear unavailable state until then.

The résumé at `resume.html` is based only on the information supplied so far. Use **Print / save as PDF** in a browser to create a PDF. Add verified education details and an email address there when ready; no employment, awards, or certifications have been invented.

## Deploy

For GitHub Pages, push these files to a repository, then in GitHub open **Settings → Pages**, choose **Deploy from a branch**, select the branch and `/ (root)` folder, and save. The site is entirely static and needs no server-side configuration. A custom domain can be added in the same Pages settings when available.

## Files

- `index.html` — portfolio content and accessible page structure.
- `styles.css` — theme, layouts, custom illustrations, and responsive styles.
- `script.js` — menu, reduced-motion-aware role rotation, and configurable links.
- `resume.html` — print-friendly, factual résumé page.
- `assets/ranga-profile.jpeg` — supplied profile photo.
