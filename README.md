# ClimateLens Africa — Next.js + Supabase

Mobile-first climate knowledge, community action, learning and innovation starter built with Next.js App Router.

## Requirements
- Node.js 20.9+ (Node 20 LTS recommended)
- A Supabase project
- Internet access for remote imagery and Open-Meteo live weather requests

## Run locally

```bash
npm install
cp .env.example .env.local
# Edit .env.local and set your Supabase project URL and publishable key
npm run dev
```

Open http://localhost:3000. The `.env.local` file is ignored by Git. Use only a Supabase publishable key (or legacy anon key) in `NEXT_PUBLIC_*`; never put a service-role/secret key in browser code.

## Supabase setup

1. In Supabase SQL Editor, run `supabase/schema.sql` only if the initial tables have not already been created. If the initial schema has already run, do not rerun it.
2. Run `supabase/migrations/002_backend_security.sql` after the initial schema. This adds administrator review policies and prevents regular users from assigning roles or approving their own projects.
3. In Authentication → URL Configuration, set the local Site URL to `http://localhost:3000` and add `http://localhost:3000/auth/callback` and `http://localhost:3000/auth/reset-password` to allowed redirect URLs. Add the production domain later.
4. Confirm email delivery settings before inviting real users.
5. Promote the first administrator manually from the Supabase SQL Editor after confirming the exact account email. Example:

```sql
update public.profiles p set role = 'admin'
from auth.users u where p.id = u.id and u.email = 'YOUR-ADMIN-EMAIL';
```

Run this privileged query only in Supabase SQL Editor as the project owner. Never expose privileged keys in the app.

## Implemented backend surfaces
- `lib/supabase/client.ts` and `lib/supabase/server.ts`: Supabase browser/server clients using cookie sessions.
- `middleware.ts`: refreshes Supabase auth cookies.
- `/auth`: signup, sign-in and password reset request.
- `/auth/callback`: exchanges email confirmation code for a session.
- `/auth/reset-password`: updates password after reset-link return.
- `POST /api/activities`: authenticated activity submissions; new rows remain pending.
- `GET /api/activities`: current user's activity history.
- `POST /api/projects`: saves project drafts/submissions to account.
- `GET /api/projects`: current user's projects.
- `/admin`: administrator review queue for community activities.
- `GET/PATCH /api/admin/activities`: administrator-only activity review.
- `GET/PATCH /api/admin/projects`: administrator-only project review API.
- `GET /api/climate?location=Lagos`: live current weather and seven-day forecast via Open-Meteo, explicitly distinguished from long-term climate anomalies.

## Important production notes
- Long-term indicators (temperature anomalies, drought index, air pollution, renewable capacity and land cover) still require separate authoritative datasets. Open-Meteo endpoint provides current weather/forecast only, not every indicator in the specification.
- Full project-history UI, profile editing, and admin project-review UI still need completion.
- Set up backups, rate limiting, monitoring, email templates, privacy/terms pages and production deployment environment variables before launch.
- Never report community impact totals from unverified submissions. The public activity read policy exposes only verified rows; individual history is restricted to its owner.
- Map and climate risk overlays are not yet backed by a verified geospatial hazard dataset.

## Commands

```bash
npm run typecheck
npm run build
npm run dev
```
