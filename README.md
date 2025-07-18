# Daren Prince Download Center

This repository hosts the static files for Daren Prince's download center. The site provides press kits, brand assets and other materials for media professionals.

## Getting Started

No build step is needed. Clone the repository and open `index.html` in your browser, or serve the directory with a simple static file server such as:

```bash
python3 -m http.server
```

The live site is available at [files.darenprince.com](https://files.darenprince.com).

## Repository Structure

```
DarenPrince/
├── index.html       - landing page
├── press-kit.html   - embedded PDF viewer
├── thank-you.html   - confirmation page
├── JS/              - small JavaScript helpers
└── assorted images, icons and the press kit PDF
```

## JavaScript Helpers

The `JS` folder contains a few utilities:

- `force-https.js` – redirects to HTTPS when necessary.
- `loader.js` – displays a simple loading animation.
- `mobile-nav.js` – controls the mobile navigation menu.
- `newsletter.js` – placeholder referenced by the HTML but not implemented.

## Notes

Older experimental pages were removed, leaving only the current site pages listed above.
