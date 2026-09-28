# Brandy Perry Photography — agent notes

Static photography portfolio and print store. HTML, CSS, vanilla JS.

## Commands

```bash
python3 -m http.server 8080   # serve the static site
npm run serve                  # alias for the above
```

## Architecture

```
index.html       home page: hero, featured series, manifesto, featured prints
projects.html    filterable project archive
prints.html      print store + paper information
about.html       photographer bio, statement, exhibitions, gear, contact form
css/styles.css   all styles (Tailwind-like custom CSS)
js/main.js       mobile nav, scroll reveals, project filters, lightbox
js/data.js       reference data only; pages are hard-coded HTML
```

## Notes

- No build step. No frameworks. No npm dependencies.
- Images are hotlinked from `images.unsplash.com` for demonstration.
- 3D previews were replaced with static images and a lightbox.
- Checkout/contact is email-only; no payment processing.
