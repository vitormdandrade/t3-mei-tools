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
  'cora': {
    name: 'Cora',
    base_url: 'https://www.cora.com.br',
    utm_campaign: 'oraculodomei-cora',
  },
  'bs2': {
    name: 'BS2',
    base_url: 'https://www.bs2.com.br',
    utm_campaign: 'oraculodomei-bs2',
  },
  'original': {
    name: 'Banco Original',
    base_url: 'https://www.original.com.br',
    utm_campaign: 'oraculodomei-original',
  },
  'asaas': {
    name: 'Asaas',
    base_url: 'https://www.asaas.com',
    utm_campaign: 'oraculodomei-asaas',
  },
  'picpay-pj': {
    name: 'PicPay PJ',
    base_url: 'https://www.picpay.com',
    utm_campaign: 'oraculodomei-picpaypj',
  },
};

export function buildAffiliateUrl(slug: string, affiliateUrl: string): string {
  const config = AFFILIATE_CONFIG[slug];

  // If a live affiliate URL is provided, use it directly (future-proof for affiliate program)
  if (affiliateUrl && affiliateUrl !== '#') {
    return affiliateUrl;
  }

  // Fallback: use AFFILIATE_CONFIG base URL with UTM tracking
  // This ensures CTAs are always clickable even before affiliate programs are live
  if (config) {
    const params = new URLSearchParams({
      utm_source: 'oraculodomei',
      utm_medium: 'referral',
      utm_campaign: config.utm_campaign,
      utm_content: slug,
    });
    return `${config.base_url}?${params.toString()}`;
  }

  // No config, no live URL — keep disabled state
  return '#';
}
