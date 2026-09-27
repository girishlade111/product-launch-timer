# Product Launch Timer

A polished "coming soon" product-launch page with a live countdown timer. Set a launch date, and the page shows days / hours / minutes / seconds ticking down to the moment, with product information and a notify-me signup section — fully client-side.

## What it does

- **Live countdown** — days, hours, minutes, seconds ticking every second toward a target launch date
- **Expired state** — gracefully switches to a "launched" state once the countdown hits zero
- **Product info section** — showcase area describing what's launching
- **Notify-me signup** — email input with toast feedback for launch alerts (client-side demo)
- **Light/dark theme** — theme toggle via next-themes
- **Responsive** — mobile-first layout that scales up to desktop

## Features

- Configurable target date (`launchDate` in `app/page.tsx`)
- Animated countdown digits
- Toast notifications (shadcn/ui toast)
- Gradient background, modern typography

## Tech stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS, shadcn/ui (Radix primitives), lucide-react icons
- **Theming:** next-themes
- **Forms:** react-hook-form + zod
- **Package manager:** pnpm

## Quick start

```bash
# install dependencies
pnpm install
# or: npm install --legacy-peer-deps

# run the dev server
pnpm dev        # http://localhost:3000

# production build (static export -> ./out)
pnpm build

# serve the static export
npx serve out
```

### Set your launch date

Edit `app/page.tsx`:

```tsx
const launchDate = new Date("2026-12-01T09:00:00")
```

## Project structure

```
app/
  page.tsx                 # landing page — sets launchDate, composes sections
  layout.tsx               # root layout, theme provider
  globals.css              # global styles + Tailwind
components/
  countdown-timer.tsx      # live countdown (days/hrs/min/sec + expired state)
  product-info.tsx         # product showcase section
  theme-provider.tsx
  ui/                      # shadcn/ui primitives (button, input, toast)
lib/
  utils.ts                 # cn() classnames helper
public/                    # static assets
```

## Environment variables

None — the app is fully client-side and needs no secrets or config.

## Deployment

The app is statically exported (`output: "export"` in `next.config.mjs`), so it can be hosted anywhere static files are served.

- **GitHub Pages (current):** https://girishlade111.github.io/product-launch-timer/
- **Vercel (original v0 deployment):** see the Vercel dashboard link in the project settings

Note: when deploying under a subpath (e.g. GitHub Pages `/product-launch-timer/`), the config uses `basePath: "/product-launch-timer"`. Remove `basePath` when deploying to a custom domain or root path.

Originally generated with [v0.app](https://v0.app).

## License

Open source — free to use and modify.

---

Built by Girish Lade — https://ladestack.in
