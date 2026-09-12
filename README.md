# Aditi Bhagat — Personal Website

Live: https://aditibhagat.vercel.app

A minimal retro portfolio with five focused views: introduction, experience, projects, open source, and about. Built with semantic HTML, responsive CSS, and vanilla JavaScript. No build step or application dependencies.

## Develop

Run `npm run dev` and open http://localhost:4173. Run `npm run check` to check JavaScript syntax.

Content lives in `app.js`, design in `style.css`, and the page shell in `index.html`. Experience and project details use native disclosure controls. Navigation supports direct hash links and browser history. The layout adapts to mobile and respects reduced-motion preferences.

## Content

Professional content comes from the supplied résumé. Public contribution links and merge states were verified on September 12, 2026; these labels are dated rather than represented as live data. Benchmark figures describe the completed study. The public contact email is the résumé address; the hosting login is separate.

## Deploy

Hosted on the free Hobby plan in the `aditi-bhagat` Vercel workspace, project `aditi-portfolio`. Deploy with `npx vercel deploy --prod --scope aditi-bhagat --project aditi-portfolio`. The framework is Other, with no build step. GitHub holds the source; deployments currently use the CLI.

## Themes

The header switch changes between the original light palette and a custom dark retro palette. The choice persists in local storage, applies before rendering, and syncs across tabs. It remains usable when browser storage is unavailable. The control exposes its state to assistive technology and supports keyboard activation.
