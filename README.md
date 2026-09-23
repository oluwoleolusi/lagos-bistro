# Lagos Bistro

A portfolio concept website for a fictional contemporary Nigerian restaurant.
Built as a static, frontend-only React application — no backend, database, or
external API required.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router (client-side routing across five pages)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

## Building for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying

The project is a static site — any static host works. It's pre-configured for
**Netlify**:

1. Push this project to a Git repository.
2. In Netlify, "Add new site" → "Import an existing project" → connect the repo.
3. Build command: `npm run build`. Publish directory: `dist`. (Already set in
   `netlify.toml`.)
4. Deploy.

`public/_redirects` and `netlify.toml` both handle the client-side routing
redirect (`/*` → `/index.html`), which single-page apps need so that direct
links like `/menu` or `/reservations` don't 404 on refresh.

For other static hosts (Vercel, GitHub Pages, Cloudflare Pages, etc.), the only
thing to replicate is that same SPA fallback rule — check your host's docs for
"SPA rewrite" or "catch-all redirect."

## Project structure

```
src/
  components/
    layout pieces        Navbar, Footer, ScrollToTop
    home/                 Sections used only on the homepage
    menu/                 Category tabs + menu list/rows
    reservations/         Reservation form, validation, confirmation screen
    contact/              Contact form
    ui/                   Small shared pieces (SectionHeading, Accordion)
  data/
    menuData.ts           All menu items + featured dishes + price formatter
    restaurant.ts          Hours, address, contact details, FAQ content
  pages/                   One file per route, composed from the above
  types/                   Shared TypeScript types
public/
  images/                  Placeholder photography (see below)
  _redirects               Netlify SPA fallback
```

## Replacing the placeholder images

Every image is a generated placeholder in the site's own colour palette,
labelled "Placeholder — replace" so nothing is mistaken for a final asset.
Drop in real photography using the **same filenames** and nothing else needs
to change — layout, aspect ratios, and cropping (`object-cover`) are already
set up to take a real photo without redesigning anything:

| File                          | Used for                          | Suggested shape |
| ------------------------------ | ---------------------------------- | ---------------- |
| `public/images/hero.jpg`       | Homepage hero                      | landscape, wide  |
| `public/images/interior.jpg`   | Homepage atmosphere section        | landscape        |
| `public/images/dish-01.jpg` … `dish-04.jpg` | Featured dishes (home) | portrait, 4:5    |
| `public/images/chef.jpg`       | About page, chef portrait          | portrait, 4:5    |
| `public/images/about-story.jpg`| About page, "how it started"       | landscape        |
| `public/images/about-hands.jpg`| About page, ingredients section    | portrait, 4:5    |
| `public/images/menu-header.jpg`| Menu page header strip             | landscape, wide  |
| `public/images/contact-map.jpg`| Location sections (home + contact) | landscape        |

## Content that's easy to find and edit

- **Menu items, prices, featured dishes** → `src/data/menuData.ts`
- **Address, phone, email, hours, FAQ copy** → `src/data/restaurant.ts`
- **Chef bio, "About" story copy** → `src/pages/About.tsx`

## Notes on the demo interactions

The reservation form and contact form are both fully validated, working
frontend flows (required fields, email/phone format checks, a loading state,
then a confirmation screen) — but neither actually sends anything anywhere.
Both confirmation screens say so explicitly. Wiring a real reservation system
or contact form would mean adding a backend or a third-party service (e.g.
Formspree, a booking API) and is intentionally out of scope for this concept.
