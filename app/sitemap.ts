import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mei-tools.vercel.app';

  // Calculators
  const calculators = [
    { url: '/calculadora/das', changeFreq: 'weekly' as const },
    { url: '/calculadora/faturamento', changeFreq: 'weekly' as const },
    { url: '/calculadora/mei-vs-me', changeFreq: 'weekly' as const },
    { url: '/calculadora/inss-autonomo', changeFreq: 'weekly' as const },
    { url: '/calculadora/margem-de-lucro', changeFreq: 'weekly' as const },
    { url: '/calculadora/preco-por-hora', changeFreq: 'weekly' as const },
    { url: '/calculadora/cnae', changeFreq: 'weekly' as const },
  ];

  // Reference pages
  const reference = [
    { url: '/calendario-das', changeFreq: 'monthly' as const },
  ];

  // Guides
  const guides = [
    { url: '/guias', changeFreq: 'monthly' as const },
    { url: '/guias/como-abrir-mei', changeFreq: 'monthly' as const },
    { url: '/guias/das-mei-2026', changeFreq: 'monthly' as const },
    { url: '/guias/nota-fiscal-mei', changeFreq: 'monthly' as const },
    { url: '/guias/mei-pode-ter-funcionario', changeFreq: 'monthly' as const },
    { url: '/guias/limite-faturamento-mei', changeFreq: 'monthly' as const },
    { url: '/guias/mei-vs-autonomo', changeFreq: 'monthly' as const },
    { url: '/guias/abrir-conta-pj-mei', changeFreq: 'monthly' as const },
  ];

  // Comparisons
  const comparisons = [
    { url: '/melhores/melhores-contas-pj-mei', changeFreq: 'weekly' as const },
    { url: '/melhores/melhores-maquininhas-mei', changeFreq: 'weekly' as const },
  ];

  const routes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    ...calculators.map(c => ({
      url: `${baseUrl}${c.url}`,
      lastModified: new Date(),
      changeFrequency: c.changeFreq,
      priority: 0.9,
    })),
    ...reference.map(r => ({
      url: `${baseUrl}${r.url}`,
      lastModified: new Date(),
      changeFrequency: r.changeFreq,
      priority: 0.85,
    })),
    ...guides.map(g => ({
      url: `${baseUrl}${g.url}`,
      lastModified: new Date(),
      changeFrequency: g.changeFreq,
      priority: 0.8,
    })),
    ...comparisons.map(c => ({
      url: `${baseUrl}${c.url}`,
      lastModified: new Date(),
      changeFrequency: c.changeFreq,
      priority: 0.85,
    })),
  ];

  return routes;
}
