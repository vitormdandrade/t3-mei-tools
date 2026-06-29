export const AFFILIATE_CONFIG: Record<string, { name: string; base_url: string; utm_campaign: string }> = {
  'conta-simples': {
    name: 'Conta Simples',
    base_url: 'https://www.contasimples.com',
    utm_campaign: 'oraculodomei-contasimples',
  },
  'neon-pj': {
    name: 'Neon PJ',
    base_url: 'https://www.neon.com.br',
    utm_campaign: 'oraculodomei-neonpj',
  },
  'nubank-pj': {
    name: 'Nubank PJ',
    base_url: 'https://www.nubank.com.br',
    utm_campaign: 'oraculodomei-nubankpj',
  },
  'inter-empresas': {
    name: 'Inter Empresas',
    base_url: 'https://www.bancointer.com.br',
    utm_campaign: 'oraculodomei-interempresas',
  },
  'c6-bank-pj': {
    name: 'C6 Bank PJ',
    base_url: 'https://www.c6bank.com.br',
    utm_campaign: 'oraculodomei-c6bankpj',
  },
  'infinitepay': {
    name: 'InfinitePay',
    base_url: 'https://www.infinitepay.com',
    utm_campaign: 'oraculodomei-infinitepay',
  },
  'sumup': {
    name: 'SumUp',
    base_url: 'https://www.sumup.com.br',
    utm_campaign: 'oraculodomei-sumup',
  },
  'stone': {
    name: 'Stone',
    base_url: 'https://www.stone.com.br',
    utm_campaign: 'oraculodomei-stone',
  },
  'pagseguro': {
    name: 'PagSeguro',
    base_url: 'https://www.pagseguro.com.br',
    utm_campaign: 'oraculodomei-pagseguro',
  },
  'mercado-pago': {
    name: 'Mercado Pago',
    base_url: 'https://www.mercadopago.com.br',
    utm_campaign: 'oraculodomei-mercadopago',
  },
  'boa-compra': {
    name: 'Boa Compra',
    base_url: 'https://www.boacompra.com',
    utm_campaign: 'oraculodomei-boacompra',
  },
};

export function buildAffiliateUrl(slug: string, affiliateUrl: string): string {
  if (affiliateUrl === '#') return '#';

  const config = AFFILIATE_CONFIG[slug];
  if (!config) return affiliateUrl;

  const params = new URLSearchParams({
    utm_source: 'oraculodomei',
    utm_medium: 'affiliate',
    utm_campaign: config.utm_campaign,
    utm_content: slug,
  });

  return `${config.base_url}?${params.toString()}`;
}
