# Nine Months 🤰 — Pregnancy Tracker

small pregnancy tracker for my sister

A simple, single-page pregnancy tracker web app.

## Features

- Set a due date and it automatically calculates the current week (or use the manual week slider / prev-next buttons)
- Week-by-week fetus size shown as a fun animal comparison (from "smaller than an ant" up to "a full-grown house cat" at week 40)
- Tips for every week of pregnancy (1–40)
- Progress bar showing trimester and percentage through pregnancy
- Interactive daily trackers, saved locally in your browser:
  - 👣 Kick counter
  - 💧 Water intake tracker
  - 🙂 Mood & symptom log
  - 📝 Notes per week

## Running it

No build step needed — it's plain HTML/CSS/JS.

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

All tracker data is stored in the browser's `localStorage`, so it stays private to your device.

## Live site

Deployed via GitHub Pages on every push to `main`: https://lupo-collab.github.io/pregnant/

This app is for fun and general guidance only — it is not medical advice.
