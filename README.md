# Stackrake

PLO session analytics for GGPoker and Natural8.

Upload your hand history files and get an instant breakdown of your winrate, rake paid, rakeback estimate, GEM earnings, and EV-adjusted results — all calculated client-side.

## Features

- **Session P&L** — net result, BB/100, $/hour, gross vs net, position breakdown
- **Rakeback estimate** — proportional rake attribution per hand, Ocean Rewards tier support (Fish → Shark)
- **GEM tracking** — monthly balance check-ins to calculate actual GEM cashback over time
- **EV calculation** — all-in equity using exact enumeration (postflop) and Monte Carlo (preflop), multi-way support
- **Rake reference** — GGPoker/Natural8 cap schedule with no-flop-no-drop and 3-bet/4-bet exception
- **Pot deduction audit** — Rake, Jackpot, Bingo, Fortune, Tax broken out individually with reconciliation check
- **Lifetime dashboard** — cumulative graph, true BB/100 (including rakeback + GEMs), session history
- **Cloud storage** — sessions saved to your account via Supabase; accessible from any device
- **Deduplication** — hand-level dedup prevents double-counting on re-uploads or session extensions

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Supabase (auth + storage)
- Recharts

## Setup

```bash
npm install
```

Create a `.env.local` file with your Supabase project credentials:

```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

```bash
npm run dev
```

## Supported sites

- GGPoker
- Natural8

Hand histories must be in `.txt` format as exported from the GGPoker client.

## Privacy

Hand history files are parsed entirely in the browser. Raw hand text is never transmitted. Only aggregated session data (hand outcomes, stakes, timestamps) is stored in your account.
