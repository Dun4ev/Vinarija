# Vinarija

An immersive single-page concept website for Vinarija: a landscape-integrated winery embedded into vineyard terrain.

## What Is Included

- cinematic full-screen hero;
- concept statement;
- architecture-as-landscape principles;
- visitor journey with sticky visual storytelling;
- production and experience section;
- sustainability section;
- technical drawings and storyboard;
- development potential.

## Project Structure

```text
.
├── assets/
│   └── images/
│       ├── vinarija-hero-panorama.png
│       └── vinarija-technical-storyboard.png
├── docs/
│   └── concept.md
├── output/
│   └── playwright/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Run Locally

Option 1: open `index.html` directly in a browser.

Option 2: run a local server:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/index.html
```

## GitHub Pages

The project is ready to publish as a static site without a build step.

1. Push the repository to GitHub.
2. Open repository `Settings`.
3. Go to `Pages`.
4. Select deployment from the `main` branch.
5. Use the root folder `/`.

The entry point is `index.html`.

## Key Files

- `index.html` - site structure and content.
- `styles.css` - visual system, responsive layout, animations and parallax styling.
- `script.js` - scroll progress, parallax, reveal animations and interactive storyboard zones.
- `docs/concept.md` - written concept description.
- `assets/images/` - project visuals.
- `output/playwright/` - visual QA screenshots.

## Concept

Vinarija presents the winery not as an object placed against nature, but as an extension of the hill, the vineyard and the visitor journey. Production, tasting, architecture and sustainability are shaped into one experience: earth, vine, technology, flavor and view.
