# Deployment Guide

This project builds the client and the Express server into the `dist` directory.

## Prerequisites
- Node.js 20+
- npm (or pnpm if preferred)

## Build and verify
```bash
npm install
npm run build
```

## Run locally (production bundle)
```bash
npm start
```
This runs `node dist/index.js`, which serves the built static assets and SPA fallback.

## Deploy options
- **Static hosting (GitHub Pages/Netlify/Vercel):** Deploy the `dist` folder produced by `npm run build`. GitHub Pages is already configured via the `homepage` field and `npm run deploy`.
- **Node hosting (Render/Railway/Heroku):** Upload the repo, set `NODE_ENV=production`, run `npm run build`, and start with `npm start` to serve the SPA via Express.
