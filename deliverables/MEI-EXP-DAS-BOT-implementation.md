# DAS Alert Bot — WhatsApp Reminder Subscription

**Implementation Date:** 2026-07-03
**Repository:** t3-mei-tools
**Site:** oraculodomei.com.br

---

## Overview

Added WhatsApp reminder subscription to the Calendário DAS page (`/calendario-das`). Users can opt-in to receive WhatsApp reminders 3 days before their DAS due date with a 2-month free trial, then R$4,90/month via Stripe.

## Files Created

| File | Description |
|------|-------------|
| `supabase/migrations/003_das_subscribers.sql` | Database migration for `das_subscribers` and `das_reminders` tables |
| `app/api/das-subscribe/route.ts` | API endpoint — creates Stripe Checkout session for subscription |
| `app/api/das-reminder/route.ts` | Cron-compatible endpoint — checks subscribers and logs reminders |
| `app/api/das-subscribers/route.ts` | Admin API — lists all subscribers (password-protected) |
| `app/calendario-das/DasAlertForm.tsx` | Client component — opt-in form UI with phone input and due-day selector |
| `app/admin/das-subscribers/page.tsx` | Admin page entry (metadata + client import) |
| `app/admin/das-subscribers/Client.tsx` | Admin client component — table view of subscribers |

## Files Modified

| File | Changes |
|------|---------|
| `app/calendario-das/page.tsx` | Added `DasAlertForm` import and render (wrapped in Suspense for `useSearchParams`) |
| `app/api/webhook/route.ts` | Added subscription event handlers for `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted` |

## Architecture

### Database (`das_subscribers`)
- `id` (BIGSERIAL PK)
- `phone` (TEXT) — digits only, e.g. `5511999998888`
- `das_due_day` (INTEGER 1-31) — user's DAS due day of month
- `stripe_subscription_id` (TEXT UNIQUE) — Stripe subscription ID
- `subscription_status` — `trialing`, `active`, `past_due`, `canceled`, `unpaid`, `incomplete`, `incomplete_expired`
- `trial_ends_at` (TIMESTAMPTZ)
- `created_at` (TIMESTAMPTZ)

### Database (`das_reminders`)
- `id` (BIGSERIAL PK)
- `subscriber_id` (FK → das_subscribers)
- `phone`, `das_due_day`, `reminder_date`, `das_due_date`
- `sent_at`, `success`, `error_message`

### Subscription Flow
1. User fills form on `/calendario-das` → POST `/api/das-subscribe`
2. Creates a `das_subscribers` row (status: `incomplete`)
3. Redirects to Stripe Checkout (subscription mode, 60-day trial)
4. Stripe webhook fires `customer.subscription.created` → updates row with `stripe_subscription_id` + status `trialing`
5. On trial end, `customer.subscription.updated` → status becomes `active`
6. On cancel, `customer.subscription.deleted` → status becomes `canceled`

### Reminder Cron
- `GET /api/das-reminder?token=ADMIN_PASSWORD`
- Finds subscribers with `das_due_day == (today + 3 days)` and status `trialing`/`active`
- Logs to console and `das_reminders` table
- Returns JSON with count and details
- Use `?dry-run=true` for testing without writing to DB

### WhatsApp Sending (Future)
The cron endpoint currently only logs reminders. To wire actual WhatsApp sending:
- Integrate with ZAPI or WhatsApp Business API in the `/api/das-reminder` loop
- Replace the `console.log(...)` with an API call per subscriber

## Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key (for client use)
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (for server-side admin)
- `STRIPE_SECRET_KEY` — Stripe secret key
- `STRIPE_WEBHOOK_SECRET` — Stripe webhook signing secret
- `ADMIN_PASSWORD` — Password for admin pages and cron auth (default: `meitools2026`)

## Setup Checklist
1. Run `supabase/migrations/003_das_subscribers.sql` in Supabase SQL Editor
2. Configure Stripe webhook endpoint to `https://oraculodomei.com.br/api/webhook` with events:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
3. Set up a cron job (e.g., via Vercel Cron Jobs or external) to call:
   ```
   GET https://oraculodomei.com.br/api/das-reminder?token=YOUR_ADMIN_PASSWORD
   ```
   Daily (recommended) at a consistent time.

## Admin Access
- `/admin/das-subscribers` — Password-protected table view of all subscribers
- `/admin/leads` — Existing leads dashboard
