-- Migration: Create leads table for MEI Tools lead capture
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.leads (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  cnpj TEXT,
  city TEXT,
  revenue_range TEXT,
  source TEXT NOT NULL DEFAULT 'unknown',
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for fast lookups by email and source
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads (email);
CREATE INDEX IF NOT EXISTS idx_leads_source ON public.leads (source);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon key (for client-side submissions)
CREATE POLICY "Allow anon inserts"
  ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only allow service_role to read (admin)
CREATE POLICY "Allow service_role read"
  ON public.leads
  FOR SELECT
  TO service_role
  USING (true);

-- Only allow service_role to delete
CREATE POLICY "Allow service_role delete"
  ON public.leads
  FOR DELETE
  TO service_role
  USING (true);
