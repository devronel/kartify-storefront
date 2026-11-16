<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This repo uses Next.js 16. APIs, conventions, and file structure differ from older training data. Read `node_modules/next/dist/docs/` before writing code. Notably, middleware is now `proxy.ts`, and `cookies()`, `headers()`, `params`, and `searchParams` are async.
<!-- END:nextjs-agent-rules -->

# Kartify storefront

Next.js 16 App Router storefront for a Spring Boot commerce API. The backend is a separate repo (`../kartify-api` in this workspace); there is no API code here. Admin UI lives in `../kartify-admin` (port 3001).

## Commands

- `pnpm dev` — dev server at http://localhost:3000. The backend must be running at http://localhost:8080.
- `pnpm build` / `pnpm start`
- `pnpm exec tsc --noEmit` — typecheck (currently clean)
- `pnpm exec eslint <path>` — lint only the files you touched
- No test runner, test script, or test files exist.

Current baseline (verify before treating as a regression):

- Repo-wide `pnpm lint` fails on pre-existing errors (`react-hooks/error-boundaries`, `react-hooks/set-state-in-effect`, unused vars). Do not auto-fix the whole repo.
- `pnpm build` currently fails prerendering `/login` because `components/auth/login/Form.tsx` calls `useSearchParams()` without a `<Suspense>` boundary.

## Backend and auth

- API base URL is hardcoded to `http://localhost:8080` in `lib/api-client.ts`, `lib/api-server.ts`, and `proxy.ts`. There are no env vars.
- Server Components use `apiServer` (`lib/api-server.ts`), which forwards incoming cookies via `next/headers`.
- Client Components use `apiClient` (`lib/api-client.ts`) with `withCredentials`; on POST/PUT/PATCH/DELETE it copies the `XSRF-TOKEN` cookie into `X-XSRF-TOKEN`.
- Auth is a `JSESSIONID` cookie session. `proxy.ts` guards `/account`, `/cart`, `/checkout` by calling `GET /api/user`; missing/invalid auth redirects to `/login?callbackUrl=...`.
- `app/layout.tsx` fetches `/api/user` server-side and passes it to `AuthProvider`; `app/(site)/layout.tsx` fetches cart count/items for `CartProvider`. Client code reads both through `useAuth()` / `useCart()`.
- Response shapes are inconsistent: some endpoints return raw data (`Paginate<T>`, order objects), others `{ success, message, payload }` (auth, profile). Match the existing endpoint rather than assuming one envelope.

## Structure

- `app/(site)/` — storefront pages; its layout adds the navbar and cart provider.
- `app/(auth)/` — login/register/password pages; bare layout, no navbar.
- `app/account/` — protected profile, addresses, orders; own sidebar layout.
- `components/<area>/` — area-scoped UI. `components/ui/` is generated shadcn; extend it via the CLI rather than hand-rolling primitives.
- `types/` — API DTOs; `lib/helper.ts` — formatting, slugify, variant cartesian product, pagination.
- No admin area exists here (removed). `types/admin/*` and `docs/categories-page-spec.md` / `docs/create-product-page-spec.md` belong to the separate admin app; other `docs/*` are UI specs for pages here.

## UI conventions

- shadcn/ui here is built on **Base UI** (`@base-ui/react`), not Radix. Use `render={<Link href="..." />}` (plus `nativeButton={false}` when needed), not `asChild`.
- Add primitives with `pnpm exec shadcn add <component>` (config: style `base-vega`, Tailwind v4, `components/ui`).
- Use theme tokens (`bg-background`, `text-muted-foreground`, `border`, ...) and Tailwind's scale; avoid raw hex/slate colors.
- Toasts use the local `@/components/ui/toast` manager: `toast.add({ type: "error", description })`. There is no sonner.
- Prices are PHP: render `₱` plus `moneyFormat` from `lib/helper.ts`.
- Remote product images currently use plain `<img>` because `next.config.ts` has no `images.remotePatterns`; don't switch them to `next/image` without adding config.

## UI-only workflow (important)

This is a learning project. `.opencode/skills/kartify-ui/SKILL.md` defines the contract for UI requests: write JSX/Tailwind/shadcn markup only — no hooks, `"use client"`, event handlers, requests, or props. Hardcode sample data and leave specific `{/* TODO(logic): ... */}` markers for the user. Read existing area components first and follow their patterns.

## Gotchas

- `app/(site)/shop/page.tsx` still holds placeholder products; the real grid is `components/shop/product-list.tsx`, which fetches `/api/products` client-side and reads `page`, `q`, and `category` query params.
- Address forms use PSGC data in `public/psgc/` via `lib/load-psgc-data.ts`.
- `proxy.ts` redirects to `/error?type=auth_down` when the API is unreachable, but that route does not exist in `app/`.
