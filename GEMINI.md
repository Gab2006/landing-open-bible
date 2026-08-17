# GEMINI.md — Project Rules

This file contains the permanent rules to follow for **all** work on this project (OpenBible Landing Page). They apply even when not explicitly repeated in a request.

## 1. Language
- Always communicate in **Italian**: explanations, summaries, commit messages, code comments.
- All text visible on the landing page (UI, labels, buttons, hero text, feature descriptions) must be in **Italian**, even though code itself (variable/function/component names) follows standard English naming conventions.

## 2. Project structure
- Keep a clean, organized folder structure (`src/components/`, `src/styles/`, `src/assets/`).
- One component = one file. 
- Use the provided screenshots in the `app-screenshots/` directory for showcasing the app.

## 3. Tech stack
- React 18 + TypeScript + Vite
- Tailwind CSS for styling
- Framer Motion for smooth animations and scrolling effects
- `lucide-react` for icons

## 4. Palette and design — always respect
- **Light mode**: background `#FAF6EF`, text `#2B2620`, accent `#B8912F`
- **Dark mode**: background `#1A1917`, text `#EDE6D9`, same accent `#B8912F`
- Heading/Serif font: elegant serif (Crimson Pro)
- UI/Sans-serif font: sans-serif (Inter)
- "Editorial" style: generous whitespace, elegant layout, high contrast.
- Do not introduce new colors, fonts, or styles without asking explicitly first.

## 5. Responsiveness
- The landing page must be perfectly responsive.
- Mobile first approach, utilizing flex and grid layouts.
- Use smooth animations on scroll (via Framer Motion) to keep the page engaging but not overwhelming.

## 6. Code conventions
- TypeScript in strict mode.
- Functional components with hooks only.
- Naming: `PascalCase` for components, `camelCase` for functions/variables/hooks.

## 7. Core Functionality
- The landing page is a single-page scrolling layout.
- The main Call to Action ("Open App" / "Installa l'App") should open a dialog allowing the user to choose between iOS or Android instructions for installing the PWA.
- Use placeholders for actual links if they are not provided, but the layout and dialog logic must be fully functional.

## 8. Chat behavior
- Keep chat responses short and to the point.
- Always address me by name: **Gabriele**.
