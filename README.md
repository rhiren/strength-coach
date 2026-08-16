# Strength Coach

A GitHub Pages-friendly follow-along strength training coach. Choose upper body, lower body, or total body; optionally focus on areas like chest or quads; then run a timed routine with coaching cues, substitutions, profile preferences, and local workout history.

## Run Locally

```bash
npm start
```

Open `http://127.0.0.1:5178`.

## Build

```bash
npm run build
```

The static output is copied to `dist/`. The app itself lives in `public/`, so it can also be served directly by GitHub Pages.

## MVP Scope

- Upper, lower, and total body routine generation.
- Optional focus areas such as chest, back, shoulders, quads, glutes, hamstrings, arms, and core.
- Goal, time, level, and equipment-aware exercise selection, including no-equipment routines.
- Follow-along player with exercise/rest timing, cues, and substitutions.
- Local browser storage for profile and completed workout history.
