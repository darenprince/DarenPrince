# Daren Prince Download Center


This repository contains a simple static website for author **Daren Prince**. The site provides press kits, brand assets and other materials for media professionals.

## Getting Started

No build step is required. Clone the repository and open `press-kit.html` in your browser to preview the site locally. Any simple static file server will also work if you prefer to serve the pages.

## Repository Structure

```
DarenPrince/
├── press-kit.html      - embedded PDF viewer
├── thank-you.html      - form submission/confirmation page
├── JS/                 - small JavaScript helpers
└── various images and brand assets (PNG, JPG, SVG)
```

### Key Files

- **`press-kit.html`** – Main page of the download center. Loads common styles and presents the download links.
- **`thank-you.html`** – Confirmation page shown after a form submission.

### JavaScript Helpers

Located in the `JS/` folder:

- `force-https.js` – Redirects to HTTPS if the page is loaded over HTTP.
- `loader.js` – Handles the page loading animation.
- `mobile-nav.js` – Controls the mobile navigation menu.
- `newsletter.js` – Referenced by pages but not present in this repo.

### Assets

The repository includes various logos, icons, thumbnails, background images and the compressed PDF `Game_On_Press-Retailer_Kit_Brand_Identity_US_EU_compressed.pdf`. A `robots.txt` in the root disallows web crawlers from indexing the site.

## Things to Know

- The project is a static site with standalone HTML pages.
- `newsletter.js` is missing; the newsletter form currently does not function.

## Suggested Next Steps

1. Restore or implement the missing newsletter functionality.
2. Consider a static site generator to reuse layout code across pages.
3. Expand this README with any build or deployment steps as the site grows.
This repository stores the static files for author and entrepreneur Daren Prince's download center website. The site provides press kits, brand assets, and other downloadable materials.

## Usage

1. Clone or download this repository.
2. Serve the files with any web server, or open `press-kit.html` directly in your browser. If your browser restricts local file access, run `python3 -m http.server` and visit `http://localhost:8000/`.

The site is hosted at [files.darenprince.com](https://files.darenprince.com).
