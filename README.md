<div align="center">

# WatUDoin

A mobile-first campus discovery prototype for finding nearby events, student clubs, and spontaneous social lobbies at the University of Waterloo.

[![React](https://img.shields.io/badge/React-18-20232a?logo=react&logoColor=61dafb)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![Live Demo](https://img.shields.io/badge/Live_demo-Vercel-000?logo=vercel)](https://blueprint-sable.vercel.app/)

[Live demo](https://blueprint-sable.vercel.app/) · [Product concept](#product-concept) · [Run locally](#run-locally)

</div>

## Product concept

WatUDoin explores a simple question: how can students discover what is happening around campus right now, not after the event is over?

The prototype combines map-based discovery, club profiles, event details, friend connections, and user-created lobbies inside a phone-sized interface. It was created for the UW Blueprint Canvas Designathon as an interactive product and UX concept.

## Prototype flows

- Guided onboarding and student profile setup
- Campus map with event and lobby pins
- Event detail and attendance views
- Club directory, club profiles, and joined clubs
- Spontaneous lobby creation with category, capacity, and vibe
- Friend discovery and profiles
- Host approval flow
- Editable user profile and settings
- Persistent bottom navigation across primary screens
- Responsive phone-frame presentation for desktop demos

## Built with

| Layer | Technology |
| --- | --- |
| Interface | React 18 + TypeScript |
| Build tooling | Vite 6 + SWC |
| Components | Radix UI primitives |
| Icons | Lucide React |
| Styling | CSS design tokens and utility classes |

## Run locally

### Prerequisites

- Node.js 18+
- npm

```bash
git clone https://github.com/7kzaincode/WatUDoin-Canvas-Designathon-.git
cd WatUDoin-Canvas-Designathon-
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

No API key, account, or backend is required.

## Architecture

`App.tsx` owns the current screen and selected event, club, and user-profile state. Each product flow is implemented as an isolated screen component and navigates through a shared `Screen` union. Primary screens share `BottomNav`; detail and settings screens provide their own back navigation.

```text
src/
├── components/       Product screens, navigation, mascot, and UI primitives
├── styles/           Global styles and design tokens
├── App.tsx           Screen state and navigation orchestration
├── main.tsx          React entry point
└── Attributions.md   Asset and component acknowledgements
```

## Prototype boundaries

WatUDoin currently uses in-memory sample data. Refreshing the page resets profile and navigation state, and actions such as joining clubs or creating lobbies are demonstrations rather than persisted network operations. A production version would require authentication, a campus/event data source, location permissions, moderation, and a backend for users, clubs, friendships, and lobbies.
