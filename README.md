# QuickAttend

Mobile-first attendance application using dynamic QR and GPS verification. This repository is a clean semester-MVP starter: it contains runnable app shells, navigation, API module boundaries, and planning documentation, but no product business logic.

## Repository layout

| Path | Purpose |
| --- | --- |
| `apps/mobile` | Expo + React Native app for lecturers and students |
| `apps/api` | Express REST API |
| `packages/shared` | Shared domain types/constants |
| `docs` | MVP scope, flow, and API contract placeholders |
| `infra` | Infrastructure configuration placeholders |

## Prerequisites

- Node.js 20 LTS or newer
- Expo Go on a physical phone (or an Android/iOS simulator)

## Run locally

```bash
copy .env.example .env
npm install
npm run dev:api
npm run dev:mobile
```

Or start both development servers with `npm run dev`. The mobile app opens Expo DevTools; use its QR code to launch it on a device.

## MVP boundary

Included modules correspond to: authentication, attendance templates, attendance sessions, dynamic QR scanning, GPS verification, results monitoring, and temporary teacher handover. Implementation decisions and acceptance criteria belong in `docs/` before feature code is added.
