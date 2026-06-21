# Maple Heights Townhouse — Rental Website

A modern, single-page rental website built with **React + Vite + Tailwind CSS + Framer Motion**. Ready to deploy on Vercel's free tier.

![Tech stack](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0050?logo=framer&logoColor=white)

---

## Features

- **Modern, warm design** — earthy palette with custom serif/sans pairing
- **Fully responsive** — mobile-first layout, polished on every screen size
- **Smooth animations** — hero crossfade, scroll-triggered fade-ins, animated mobile drawer
- **Photo gallery with lightbox** — keyboard nav (`←` `→` `Esc`)
- **Room cards** — with availability badges, pricing, features, and inquire CTAs
- **Amenities grid** — icon-driven, easy to customize
- **Animated FAQ accordion**
- **Contact form** — validated client-side, Formspree-ready (with mailto fallback) and honeypot anti-spam
- **Embedded Google Map**
- **Secure-by-default headers** — HSTS, X-Frame-Options, Referrer-Policy, etc.
- **Vercel-ready** — drop-in `vercel.json`

---

## Quick start

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

To build for production:

```bash
npm run build      # outputs to ./dist
npm run preview    # local preview of the production build
```

---

## Customize your listing

All editable content lives in **one file**: [`src/data/property.js`](src/data/property.js).

| Section | What to edit |
|---|---|
| Property name, tagline, address | `property` object |
| Hero rotating images | `heroImages` array |
| Gallery photos | `galleryImages` array |
| Room listings | `rooms` array (id, name, price, size, status, features) |
| Amenities | `amenities` array — `icon` must be a [Lucide icon name](https://lucide.dev/icons/) |
| About copy & host photo | `about` object |
| FAQ items | `faqs` array |
| Contact email / Formspree endpoint | `contact` object |

### Add your own photos

1. Drop image files into the `public/photos/` folder (create it if needed).
2. Reference them with a leading slash: `'/photos/livingroom.jpg'`.
3. Recommended sizes: hero images ~1920×1080, gallery ~1200×900.

### Set up the contact form (free, no backend)

1. Sign up at [Formspree.io](https://formspree.io) (free tier: 50 submissions/month).
2. Create a new form, copy the endpoint URL (looks like `https://formspree.io/f/xxxxxxxx`).
3. Paste it into `contact.formspreeEndpoint` in `src/data/property.js`.

If you leave `formspreeEndpoint` empty, the form falls back to a `mailto:` link that opens the user's email client.

---

## Deploy to Vercel (free)

### Option A — via GitHub (recommended)

1. Create a new repository on GitHub (e.g. `rental-townhouse`).
2. Push this code:

   ```bash
   git add .
   git commit -m "Initial commit: rental townhouse site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/rental-townhouse.git
   git push -u origin main
   ```

3. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and import the repo.
4. Vercel auto-detects Vite. Click **Deploy** — done.
5. (Optional) Add a custom domain under **Settings → Domains**.

### Option B — via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. The included `vercel.json` handles framework detection and headers.

---

## Project structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable: Navbar, Footer, FadeIn
│   ├── sections/          # Page sections: Hero, Gallery, Rooms, ...
│   ├── data/
│   │   └── property.js    # ← Edit your listing details here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Tailwind base + custom components
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json
```

---

## Tech notes

- **Why Vite?** Fast HMR, tiny bundles, native ESM, perfect for Vercel.
- **Why Framer Motion?** Declarative animations with first-class React support.
- **Why Tailwind?** Rapid styling with a constrained design system — no CSS file sprawl.
- **Why Lucide icons?** Tree-shakeable, consistent, beautiful, and MIT licensed.

---

## License

MIT — yours to modify and deploy freely.
