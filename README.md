# MEI Tools - Calculadoras e Guias para Microempreendedores

Um site completo de calculadoras financeiras para MEI (Microempreendedor Individual) e freelancers brasileiros. Rankeia para queries de alto volume sobre impostos MEI, DAS, faturamento e conta PJ.

## Features

### Calculadoras (Client-side, Interativas)
- **DAS Calculator**: Calcula o DAS mensal conforme categoria (comércio/serviços/indústria) e ano
- **Revenue Limit Tracker**: Acompanha faturamento anual e alerta sobre limite MEI
- **MEI vs ME vs Simples Nacional**: Comparação de impostos entre regimes
- **INSS Autônomo**: Calcula contribuição como autônomo (5%, 11%, 20%)

### Conteúdo SEO (Static Pages)
- 100+ CNAEs com descrições
- 7 guias completos em PT-BR (600+ palavras cada)
- 2 páginas de comparativo (contas PJ, maquininhas)
- Arquitetura para gerar páginas dinâmicas por CNAE

### Monetização
- 11 fintechs cadastradas (Neon PJ, Nubank PJ, Stone, etc.)
- Links de afiliação prontos
- CTA strategicamente posicionadas

## Stack Técnico

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS
- **Data**: JSON files (sem banco de dados)
- **Hospedagem**: Vercel
- **SEO**: generateMetadata(), JSON-LD, Sitemap

## Deploy Vercel

```bash
npm run build
vercel deploy
```

## Palavras-chave Alvo

- "Calculadora DAS MEI"
- "Simulador MEI 2026"
- "Quanto posso faturar como MEI"
- "Diferença MEI e ME"
- "Como abrir MEI online"
- "Nota fiscal MEI"
- "Melhor conta PJ para MEI"
- "Maquininha para MEI"
