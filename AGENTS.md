<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design system

All UI work must follow `docs/design.md` (ENG-APPS design tokens). Source of truth for tokens: `app/globals.css` `:root`. Hard rules: no rounded corners (`rounded-*` is disabled in the Tailwind theme; do not use `rounded-full` either), no gradients, no purple, no external web fonts, no `#000` text (use `text-ink`), vermilion only as thin lines/dots, support `prefers-reduced-motion`.
