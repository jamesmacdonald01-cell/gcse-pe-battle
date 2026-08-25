# GCSE PE Battle

A playable five-round strategy card game aligned to AQA GCSE Physical Education 8582. Built with React, TypeScript, Vite and CSS.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. The static output is written to `dist/`.

## Engine change rule

`src/game/rules.ts` is the single source of truth for rounds, Energy, hand/deck size, phase order, tutorial cards and the How to Play sequence. Any new engine mechanic must include its tutorial step and player-facing explanation in the same change. Verify all three surfaces before release:

1. Play the guided tutorial from beginning to end.
2. Confirm How to Play describes the current rule and card categories.
3. Complete one live battle using the changed mechanic.

## Render deployment

Create a **Static Site** in Render, connect the repository, set **Build Command** to `npm install && npm run build`, and **Publish Directory** to `dist`. No environment variables or server are required.
