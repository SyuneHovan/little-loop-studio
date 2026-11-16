# Little Loop Studio: cozy amigurumi patterns

A small, mobile-first website for sharing crochet amigurumi patterns. It's a static site with no backend and no dependencies. `index.html` is the whole site.

## Run it

- Open `index.html` in a browser, or
- Serve the folder with any static server, e.g. `npx serve .`

## Edit it

The source is in `src/`. Run `node build.mjs` to rebuild `index.html` from it.

| File | What's in it |
|---|---|
| `src/styles.css` | Colors, fonts, spacing, animations. The palette and fonts are CSS variables at the top (`--bg`, `--sage-deep`, `--font-head`…). |
| `src/data.js` | Site name, admin code, categories, filter options, abbreviations, and the 6 sample toys with their full patterns. |
| `src/art.js` | The illustrated stand-in "photos" for the sample toys. |
| `src/app.js` | Pages, filters, favorites, progress tracking, the pattern studio. |
| `src/index.template.html` | Page shell: header, nav, footer, meta tags. |

### Pattern text format

```
## Ears (make 2)
Cream yarn.
R1: 6 sc in MR (6)
R4-14: sc around (12)      <- expands to R4, R5 ... R14, each checkable
Row 1: ch 9, sc across (8)
Any other line becomes a note.
```

## Make it your size

Each pattern page lets crocheters pick a yarn weight and hook size. The stitch counts stay the same; the page estimates the finished height from typical amigurumi gauge and updates the hook, yarn amounts (they scale with volume), safety eye size and stuffing. The gauge table is `SCALE` in `src/app.js`.

## Adding toys

Go to **Pattern studio** in the footer (`#admin`). The default code is `loops`; change `adminCode` in `src/data.js`.
Toys you add there are saved **in that browser only** (localStorage). Use **Backup & move** to copy them out.
To publish a toy for everyone, paste its data into `SAMPLE_TOYS` in `src/data.js` and redeploy. (A real shared admin needs a backend; see "Next steps".)

## Deploy to Vercel

Framework preset: **Other**. No build command is needed because `index.html` is already built, and no output directory is needed either. No environment variables are needed.

## Placeholders to replace

- About page: name, story, email, Instagram handle
- Toy "photos" are illustrations. Upload real photos in the Pattern studio.
- `og:image` meta tag (add once the site has a URL)
