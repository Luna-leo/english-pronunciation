<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design system

All UI work must follow `docs/design.md` (ENG-APPS design tokens). Source of truth for tokens: `app/globals.css` `:root`. Hard rules: no rounded corners (`rounded-*` is disabled in the Tailwind theme; do not use `rounded-full` either), no gradients, no purple, no external web fonts, no `#000` text (use `text-ink`), vermilion only as thin lines/dots, support `prefers-reduced-motion`. App shell: every page renders inside the drawing-sheet shell (docs/design.md §6) — pages provide their own `<main className="flex-1 ...">` and must not use `min-h-screen`/`h-screen`.

# Commands

- `npm run dev` — dev server at http://localhost:3000. It is often already running in the background; check before starting another (a second instance fails with EADDRINUSE).
- `npm run build` — production build (Turbopack). Also the fastest full check: compiles, type-checks, and validates the Tailwind v4 CSS syntax.
- `npm run lint` — ESLint (flat config, eslint-config-next).
- `npm run start` — serve the production build.
- No test framework is set up yet.

# Architecture

Next.js App Router (`app/`) + React 19 + TypeScript + Tailwind CSS v4. No state, data, or API layer yet — the app is UI-only so far.

Styling is CSS-first (Tailwind v4: no tailwind.config file). Everything lives in `app/globals.css`, in three tiers:

1. `:root` — raw ENG-APPS design tokens (colors, OS font stacks, size clamps). Variable names match docs/design.md §2 exactly; this block is the source of truth.
2. `@theme inline` — maps tokens into Tailwind so utilities like `bg-paper` / `text-ink` / `font-jp` exist. Radius utilities are deliberately disabled here (`--radius-*: initial`).
3. `@layer components` — the drawing-sheet app shell (`.sheet`, `.sheet-head`, `.sheet-body`, tombo/ruler ornaments) and its `≤1020px` fallback. Kept in the components layer so page-level Tailwind utilities can still override it. Body styling must use longhands (`background-color:`, not `background:`) or the grid background utility gets suppressed.

`app/layout.tsx` wraps every page in the shell: body (grid paper) → `.sheet` (drawing frame, fixed to viewport height) → `.sheet-body` (the scroll container). Page conventions are in docs/design.md §6 — read it before adding a page or component.

Notes:

- `@source not "../**/*.md"` in globals.css keeps class names that appear in markdown docs out of the CSS bundle — don't remove it.
- Fonts are OS-bundled stacks (`--jp`, `--mono`). Do not add `next/font` or any web font.
- The original ENG-APPS portal (`index.html`) is not in this repo; its specs are preserved in docs/design.md (§6 implemented values, appendix A for unadopted ornaments).
