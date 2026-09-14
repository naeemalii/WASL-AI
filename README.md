# WASL — وصل

**Connecting families. Preserving what matters.**

WASL is a bilingual, privacy-first progressive web app concept created for Emirati families and the UAE Year of Family. It brings family conversations, lineage, memories, events, birthdays, and elders' oral histories into one warm digital home.

## Highlights

- Arabic/English interface with RTL/LTR switching
- Family Majlis with persistent messages
- Interactive three-generation family tree (Nasab)
- Memory vault for photos, recipes, and voice stories
- Birthday, gathering, and storytelling reminders
- Voice recorder flow for preserving elders' stories
- Accessibility mode with larger text
- Offline-ready PWA and responsive mobile/desktop design
- Browser persistence through `localStorage`

## Run locally

```bash
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Publish with GitHub Pages

1. Upload all project files to your GitHub repository, preserving the folders.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/(root)`, then click **Save**.

The included GitHub Actions workflow is an optional production-build deployment if you prefer that route.

No package installation is needed. The app is deliberately self-contained so it can be uploaded and judged without dependency failures.

The app is a polished competition prototype. For real family use, connect it to an authenticated backend and encrypted media storage before accepting private data.
