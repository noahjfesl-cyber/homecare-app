# Homecare App (dev)

Home-care service platform. Brand name is a placeholder — see the master
spec for the branding requirements this project builds toward.

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript 6 · Tailwind CSS 4 ·
Prisma 6 · Supabase (Postgres + Auth + Storage) · Vercel

## Local setup

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in real values (see below
   for where to get each one).
3. `npm run dev` and open http://localhost:3000

## Environment variables

All variables are documented with comments in `.env.example`. Summary:

| Variable | Where to get it |
|---|---|
| `DATABASE_URL` | Supabase project → Settings → Database → Connection string (**pooled**, port 6543) |
| `DIRECT_URL` | Same page → Connection string (**direct**, port 5432) — used only for migrations |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase project → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project → Settings → API — **secret**, server-only, not used until Step 3 |

Never commit `.env.local`. Never prefix a secret with `NEXT_PUBLIC_` —
that exposes it to the browser.

## Database

Prisma schema lives in `prisma/schema.prisma`. No models yet — the first
ones (User, Property) are added in later build steps. The generated
Prisma Client is written to `/generated/prisma` (gitignored — every
environment generates its own, since the query engine binary is
platform-specific).

```bash
npx prisma generate   # regenerate client after a schema change
npx prisma migrate dev --name <description>   # once models exist
```
