# nexcraft-home-page

The NexCraft LLC landing page. Single static page, atmospheric dark composition, deployed at [nexcraft.app](https://nexcraft.app).

## Stack

- Next.js 15 (App Router, React 19)
- Tailwind CSS 3.4
- TypeScript (strict)
- Self-hosted Switzer (Fontshare) + JetBrains Mono via `next/font`

## Develop

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Build

```bash
pnpm build
pnpm start
```

## Deploy

Hosted on Vercel. Production deploys run automatically on push to `main`.

Custom domain (`nexcraft.app`) is configured in the Vercel project settings; DNS lives at the registrar.
