import Stripe from "stripe";

// IMPORTANT: never instantiate Stripe at module scope.
// Construct it lazily at request time so the secret key is read from the
// environment when the handler actually runs, not when the module is loaded.
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key, {
    apiVersion: "2025-06-16.acacia" as any,
  });
}

// Price for Kit MEI in cents (R$29,90)
export const KIT_MEI_PRICE_CENTS = 2990;
