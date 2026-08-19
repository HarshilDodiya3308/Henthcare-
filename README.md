# RuralCare AI

**Healthcare, Even Without the Internet.**

RuralCare AI is an Android-first, PWA-ready offline healthcare platform for rural communities with intermittent, expensive, or unavailable internet access. The MVP is designed around **LOCAL-FIRST → SYNC-LATER** workflows so patients, doctors, and ASHA/community health workers can continue essential healthcare tasks without continuous connectivity.

## MVP Scope

- Offline patient dashboard and health records
- Safe AI-assisted health guidance with multilingual text/voice affordances
- Doctor discovery and appointment requests that queue offline
- Health-worker visit capture and vitals recording
- Sync Center with pending, syncing, synced, failed, and conflict states
- Role-aware patient, doctor, health worker, and admin workflows
- Demo mode with fictional data only

## Run in VS Code

1. Open this folder in VS Code.
2. Open the integrated terminal.
3. Run `npm start`.
4. Wait until the terminal prints `RuralCare AI is running at http://127.0.0.1:4173`.
5. Open <http://127.0.0.1:4173>.

If Chrome shows `localhost refused to connect`, the server is not running yet or was stopped. Start it again with `npm start` and keep the terminal open while using the app.

No package installation is required because the prototype uses native browser modules and a built-in Node.js static server script.

## Zip file

Binary ZIP files are intentionally not committed. Build a ready-to-share archive locally with `npm run zip`; it will create `release/ruralcare-ai-app.zip` on your machine.

## Prototype

This repository includes a lightweight static PWA prototype at the repository root that demonstrates the RuralCare AI core journey:

1. Select language
2. View offline status
3. Use AI assistant
4. Review health records and timeline
5. Save appointment request offline
6. Inspect sync queue
7. Simulate reconnect and synchronization

Run locally:

```bash
npm start
```

Then open <http://127.0.0.1:4173>.

## Documentation

- Product requirements: [`docs/prd.md`](docs/prd.md)
- Product/system design: [`docs/system-design.md`](docs/system-design.md)
- Offline architecture: [`docs/offline-architecture.md`](docs/offline-architecture.md)
- Database schema: [`docs/database.md`](docs/database.md)
- AI safety design: [`docs/ai-safety.md`](docs/ai-safety.md)
- Testing guide: [`docs/testing-guide.md`](docs/testing-guide.md)

## Safety Notice

RuralCare AI is not a doctor and does not provide definitive diagnoses or independent prescriptions. The AI assistant provides general health information and escalates urgent or concerning symptoms to professional care pathways.

## Demo Data

All included sample users, doctors, appointments, prescriptions, and health records are fictional and marked as demo data.
