# OBV — L'IA à l'Ivoirienne

Responsive, bilingual FR/EN community website based on the OBV community charter and roadmap (October 2026). Built with React + Vite and packaged as a production-ready Docker image served by nginx.

## Run with Docker (recommended)

```bash
docker compose up --build -d
```

Visit http://localhost:8080. Stop with `docker compose down`.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:5173.

## Editing

- `src.jsx`: bilingual content, sections and interactions.
- `style.css`: layout, responsive design, colors.
- `public/`: static assets.
- `Dockerfile`, `docker-compose.yml`, `nginx.conf`: deployment.

## Content accuracy and launch checklist

The source document proposes projects, events, partnerships and a WhatsApp community; it does **not** supply a confirmed join URL, contact email, active projects, named partners or public repository. Accordingly the join buttons currently display a coming-soon notice rather than linking to an invented destination. Replace these with verified details before public launch.

The hero uses a decorative elephant emoji; replace with the final approved OBV logo/illustration if desired. A logo extracted from the supplied presentation is included in `public/obv-logo.jpeg` as a reference asset.

No analytics, contact collection, membership system or backend is included in this initial version.

## Site pages and Markdown publishing

Routes: `/about` (single page with anchored sections), `/activities`, `/olympiades/2027` (overview, proposed selection, past editions), `/media`, `/partners`, `/contact`, `/blog` and `/blog/:slug`.

Blog posts are Markdown files under `posts/`. See `posts/README.md` for the metadata format, draft handling and images. No database or CMS is required. Content is bundled at build time; rebuild and redeploy after merging a post. The two included example posts are drafts and are hidden by default.

`public/` in the supplied archive was empty, so the referenced `/obv-logo.png` is not included. Add the logo to `public/obv-logo.png` to display it.
