-- Migration: DAS Alert Bot — WhatsApp subscription reminders
-- Run this in your Supabase SQL Editor

-- DAS Subscribers table
CREATE TABLE IF NOT EXISTS public.das_subscribers (
  id BIGSERIAL PRIMARY KEY,
  phone TEXT NOT NULL,
  das_due_day INTEGER NOT NULL CHECK (das_due_day >= 1 AND das_due_day <= 31),
  stripe_subscription_id TEXT UNIQUE,
  subscription_status TEXT NOT NULL DEFAULT 'trialing'
    CHECK (subscription_status IN ('trialing', 'active', 'past_due', 'canceled', 'unpaid', 'incomplete', 'incomplete_expired')),
  trial_ends_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_das_subscribers_status ON public.das_subscribers (subscription_status);
CREATE INDEX IF NOT EXISTS idx_das_subscribers_due_day ON public.das_subscribers (das_due_day);
CREATE INDEX IF NOT EXISTS idx_das_subscribers_stripe ON public.das_subscribers (stripe_subscription_id);

-- DAS Reminders log table
CREATE TABLE IF NOT EXISTS public.das_reminders (
  id BIGSERIAL PRIMARY KEY,
  subscriber_id BIGINT REFERENCES public.das_subscribers(id) ON DELETE CASCADE,
  phone TEXT NOT NULL,
  das_due_day INTEGER NOT NULL,
  reminder_date DATE NOT NULL,
  das_due_date DATE NOT NULL,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  success BOOLEAN NOT NULL DEFAULT true,
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS idx_das_reminders_date ON public.das_reminders (reminder_date);
CREATE INDEX IF NOT EXISTS idx_das_reminders_subscriber ON public.das_reminders (subscriber_id);

-- Enable RLS
ALTER TABLE public.das_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.das_reminders ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon (public signup)
CREATE POLICY "allow_public_inserts_das" ON public.das_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow reads/writes to service_role only
CREATE POLICY "allow_service_role_select_das" ON public.das_subscribers
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "allow_service_role_update_das" ON public.das_subscribers
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "allow_service_role_delete_das" ON public.das_subscribers
  FOR DELETE
  TO service_role
  USING (true);

-- Reminders: service_role only
CREATE POLICY "allow_service_role_all_reminders" ON public.das_reminders
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
