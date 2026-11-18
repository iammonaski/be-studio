# AGENTS.md

## Verification
- pnpm is the package manager (`pnpm-lock.yaml` v9). Scripts are only `dev`, `build`, `start`, `lint`; there are no test or typecheck scripts.
- Verify code changes with `pnpm exec tsc --noEmit` then `pnpm build` (Next 16 / Turbopack build also runs TypeScript).
- `pnpm lint` is currently red (32 errors, 14 warnings at `7defdee`), mostly pre-existing unescaped apostrophes, `any`, and a conditional hook in `ServiceTemplate.tsx`. Use `pnpm exec eslint <changed files>` for a focused check; don't sweep unrelated baseline lint unless asked.
- No test suite, CI config, or pre-commit config exists in this repo.

## Structure and wiring
- Single Next.js 16 App Router app, not a monorepo (`pnpm-workspace.yaml` lists only `.`). React 19, Tailwind v4 CSS-first (`app/globals.css` `@theme`, no `tailwind.config`), shadcn `new-york` aliases from `components.json`. `@/*` maps to the repo root.
- `app/layout.tsx` owns global chrome: Header/Footer, local fonts, Calendly widget CSS/JS, site metadata. Fonts are local `fonts/ZalandoSansExpanded.ttf` + `fonts/Poppins-Regular.ttf`; README's Geist claim is stale boilerplate.
- Landing sections are composed in `app/page.tsx`; nav "Services"/"Approach"/"FAQ" are home-page hash sections, not routes.
- Services are data-driven: `lib/services-config.ts` → `app/services/[slug]/page.tsx`. Only `brand-analysis` and `full-brand-build` have custom components; all other slugs render `ServiceTemplate`, which requires `templateContent`. A new slug needs a config entry plus template content or a custom page.
- `hasCustomPage` is used only to filter `app/sitemap.ts`, not for routing; the sitemap also lists `/services`, which has no route. Trust `pnpm build`'s route output over the sitemap.
- Portfolio comes from `lib/portfolio-config.ts`; `app/portfolio/[slug]` pre-renders via `generateStaticParams`. Images live in `public/images`.
- Contact form (`components/contact/ContactForm.tsx`) POSTs to `app/api/contact/route.ts`, which requires `RESEND_API_KEY` (no `.env` is committed), sends through Resend with hardcoded sender/recipient, and renders `components/emails/ContactEmailTemplate.tsx`.
- `BookCallButton` is a plain external Calendly link; `lib/calendly.ts` popup helper is currently unused (only referenced in commented code).
- `docs/*.pdf` are the agreed service/pricing source; consult them before changing service copy or prices.

## Gotchas
- Two different scroll helpers exist: `hooks/scroll-to-section.ts` (client hook used by Header/Hero; navigates home first) and `utils/scroll-to-section.ts` (plain function used by Footer). Update both when changing scroll behavior.
- The production origin `https://be-studio.vercel.app` is hardcoded in `app/layout.tsx`, `app/contact/page.tsx`, `app/sitemap.ts`, and `app/robots.ts`; update all of them on a domain change.
- Brand colors (`blue-accent`, `purple-accent`, `dark-accent`) are CSS variables in `app/globals.css`, exposed to Tailwind via `@theme inline`; change them there, not in a Tailwind config.
- `pnpm-workspace.yaml` blocks native builds for `sharp` and `unrs-resolver`; preserve that when touching install config.
