# Brandy Perry Photography

A static photography portfolio and print store built with plain HTML, CSS, and vanilla JavaScript.

## Pages

- `index.html` — Home page with hero, featured series, manifesto, and featured prints
- `projects.html` — Filterable project archive
- `prints.html` — Print store with editions and paper information
- `about.html` — Photographer bio, artistic statement, exhibitions, gear, and contact form

## Files

- `css/styles.css` — All styles, including the dark monochrome palette and glass effects
- `js/main.js` — Mobile navigation, scroll reveals, project filters, and image lightbox
- `js/data.js` — Shared data (kept for reference; pages are hard-coded for static delivery)

## Running locally

Any static file server works. For example:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

Or use the provided npm script:

```bash
npm run serve
```

## Notes

- The site uses hotlinked Unsplash photography for demonstration.
- Checkout is contact-only; no payments are processed.
- 3D previews from the previous React/Next.js version are replaced with static image fallbacks and a lightbox.
