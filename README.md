# Satyam - Portfolio

Personal portfolio built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and React Three Fiber.

## Features

- 3D particle hero built with React Three Fiber, deferred until browser idle so it never blocks first paint
- Data-driven Skills, Experience, and Projects sections with scroll-in reveals (Motion)
- Lenis smooth scrolling synced with GSAP ScrollTrigger, including a scroll progress indicator
- Dark/light theme toggle (next-themes), responsive nav with a mobile drawer
- Contact form with Zod validation, a React 19 server action, and email delivery via Resend
- `/resume` route with an embedded PDF preview and download button
- Dynamically generated Open Graph image and favicon (`next/og`, no static image assets)
- `sitemap.xml` / `robots.txt` via Next.js file conventions

## Tech Stack

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **3D:** React Three Fiber, Three.js, drei
- **Animation:** GSAP, Motion, Lenis (smooth scroll)
- **Forms/Email:** Zod, Resend

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — API key for the contact form's email delivery. Without it, the form still validates and responds gracefully, it just skips sending.
- `NEXT_PUBLIC_SITE_URL` — the site's canonical URL, used for metadata, Open Graph tags, and the sitemap. Set this to the real production domain once deployed.

## Deploying to Vercel

1. Push this repo to GitHub (already connected: `satyam-edu/portfolio`) and import it in Vercel.
2. Set environment variables in the Vercel project settings (Production + Preview):
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` — set to the real deployed domain (e.g. `https://satyam.dev`), not `localhost`.
3. Build command and output are auto-detected (`next build`) — no config changes needed.
4. Resend's `onboarding@resend.dev` sender address (used in `src/actions/contact.ts`) works out of the box but is rate-limited and meant for testing. For production, verify your own domain in Resend and update the `from` address.
5. After the first deploy, spot-check `/sitemap.xml`, `/robots.txt`, and the contact form end-to-end with a real submission.
