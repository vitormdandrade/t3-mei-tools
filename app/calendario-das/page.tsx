import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calendário DAS MEI 2026 — Todas as Datas de Vencimento (Ajustadas)',
  description:
    'Calendário completo de vencimento do DAS MEI em 2026: 12 datas com ajuste automático para dia útil, baixe no Google Calendar ou Apple Calendar. Gratuito, sem cadastro.',
  keywords:
    'calendário DAS MEI 2026, vencimento DAS 2026, datas DAS MEI, quando pagar DAS, DAS MEI feriado, DAS MEI dia útil',
  alternates: {
    canonical: 'https://meitools.com.br/calendario-das',
  },
};

type Vencimento = {
  refMonth: string;
  refYear: number;
  dueDate: string; // pretty "20 de Janeiro de 2026"
  dueWeekday: string;
  iso: string; // "2026-01-20"
  moved: boolean;
  originalDay?: string; // "20 de Junho de 2026 (sábado)"
  movedReason?: string;
};

// 2026 DAS due dates — DAS for ref. month is due the 20th of the following month.
// When the 20th falls on a weekend or federal holiday, it moves to the next business day.
// Computed and verified against Brazilian federal holidays 2026 (Consciência Negra = nov 20).
const vencimentos2026: Vencimento[] = [
  {
    refMonth: 'Dezembro',
    refYear: 2025,
    dueDate: '20 de Janeiro de 2026',
    dueWeekday: 'terça-feira',
    iso: '2026-01-20',
    moved: false,
  },
  {
    refMonth: 'Janeiro',
    refYear: 2026,
    dueDate: '20 de Fevereiro de 2026',
    dueWeekday: 'sexta-feira',
    iso: '2026-02-20',
    moved: false,
  },
  {
    refMonth: 'Fevereiro',
    refYear: 2026,
    dueDate: '20 de Março de 2026',
    dueWeekday: 'sexta-feira',
    iso: '2026-03-20',
    moved: false,
  },
  {
    refMonth: 'Março',
    refYear: 2026,
    dueDate: '20 de Abril de 2026',
    dueWeekday: 'segunda-feira',
    iso: '2026-04-20',
    moved: false,
  },
  {
    refMonth: 'Abril',
    refYear: 2026,
    dueDate: '20 de Maio de 2026',
    dueWeekday: 'quarta-feira',
    iso: '2026-05-20',
    moved: false,
  },
  {
    refMonth: 'Maio',
    refYear: 2026,
    dueDate: '22 de Junho de 2026',
    dueWeekday: 'segunda-feira',
    iso: '2026-06-22',
    moved: true,
    originalDay: '20 de Junho (sábado)',
    movedReason: 'Vence 20/jun (sáb) → próximo dia útil',
  },
  {
    refMonth: 'Junho',
    refYear: 2026,
    dueDate: '20 de Julho de 2026',
    dueWeekday: 'segunda-feira',
    iso: '2026-07-20',
    moved: false,
  },
  {
    refMonth: 'Julho',
    refYear: 2026,
    dueDate: '20 de Agosto de 2026',
    dueWeekday: 'quinta-feira',
    iso: '2026-08-20',
    moved: false,
  },
  {
    refMonth: 'Agosto',
    refYear: 2026,
    dueDate: '21 de Setembro de 2026',
    dueWeekday: 'segunda-feira',
    iso: '2026-09-21',
    moved: true,
    originalDay: '20 de Setembro (domingo)',
    movedReason: 'Vence 20/set (dom) → próximo dia útil',
  },
  {
    refMonth: 'Setembro',
    refYear: 2026,
    dueDate: '20 de Outubro de 2026',
    dueWeekday: 'terça-feira',
    iso: '2026-10-20',
    moved: false,
  },
  {
    refMonth: 'Outubro',
    refYear: 2026,
    dueDate: '23 de Novembro de 2026',
    dueWeekday: 'segunda-feira',
    iso: '2026-11-23',
    moved: true,
    originalDay: '20 de Novembro (sexta)',
    movedReason: 'Vence 20/nov → feriado da Consciência Negra → próximo dia útil',
  },
  {
    refMonth: 'Novembro',
    refYear: 2026,
    dueDate: '21 de Dezembro de 2026',
    dueWeekday: 'segunda-feira',
    iso: '2026-12-21',
    moved: true,
    originalDay: '20 de Dezembro (domingo)',
    movedReason: 'Vence 20/dez (dom) → próximo dia útil',
  },
];

export default function CalendarioDasPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Calendário DAS MEI 2026
        </h1>
        <p className="text-lg text-gray-600">
          Todas as 12 datas de vencimento do DAS MEI em 2026, já ajustadas para dia
          útil quando caem em fim de semana ou feriado nacional. Baixe no seu
          calendário em um clique — sem cadastro, sem limite.
        </p>
      </div>

      {/* Download CTA */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 mb-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Baixar no meu calendário</h2>
            <p className="text-green-100 text-sm">
              12 eventos para 2026 com lembrete automático 2 dias antes do vencimento.
              Funciona no Google Calendar, Apple Calendar, Outlook e qualquer app que
              abra arquivos .ics.
            </p>
          </div>
          <a
            href="/calendario-das-2026.ics"
            download="calendario-das-mei-2026.ics"
            className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors shadow-md"
          >
            ↓ Baixar .ics
          </a>
        </div>
      </div>

      {/* Main table */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">
                Mês de Referência
              </th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">
                Vencimento
              </th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">
                Observação
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {vencimentos2026.map((v) => (
              <tr
                key={v.iso}
                className={v.moved ? 'bg-amber-50/50' : 'hover:bg-gray-50'}
              >
                <td className="px-4 py-3">
                  <div className="font-semibold text-gray-900">
                    {v.refMonth}/{v.refYear}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-gray-900">{v.dueDate}</div>
                  <div className="text-xs text-gray-500 capitalize">{v.dueWeekday}</div>
                  <div className="text-xs text-amber-700 md:hidden mt-1">
                    {v.moved && v.movedReason}
                  </div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell text-xs text-gray-600">
                  {v.moved ? (
                    <span className="text-amber-700">{v.movedReason}</span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Explanation */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-900 mb-3">
          Como funcionam as datas do DAS
        </h2>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>
            <strong>Regra geral:</strong> o DAS de um mês vence no dia 20 do mês seguinte.
            Ex: o DAS referente a Janeiro/2026 vence em 20 de Fevereiro de 2026.
          </li>
          <li>
            <strong>Quando o 20 cai em fim de semana ou feriado nacional:</strong> o
            vencimento é transferido para o próximo dia útil. A Receita Federal aceita
            o pagamento sem multa até essa nova data.
          </li>
          <li>
            <strong>Em 2026, 4 datas foram ajustadas:</strong> Junho (20 em sábado),
            Setembro (20 em domingo), Novembro (20 é feriado da Consciência Negra, lei
            14.759/2023) e Dezembro (20 em domingo).
          </li>
          <li>
            <strong>Onde pagar:</strong> gere o boleto no Portal do Simples Nacional
            (gov.br/pgmei). Também é possível pagar via Pix, cartão ou débito
            automático.
          </li>
        </ul>
      </section>

      {/* Missed payment */}
      <section className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-amber-900 mb-3">
          E se eu atrasar o pagamento?
        </h2>
        <div className="space-y-3 text-sm text-amber-900">
          <p>
            O DAS atrasado gera multa de <strong>0,33% ao dia</strong> (limitada a 20%)
            e juros Selic. Ainda é possível pagar — basta gerar o boleto pelo{' '}
            <span className="font-semibold">Portal do Simples Nacional</span> que ele
            já vem com os encargos calculados.
          </p>
          <p>
            <strong>Consequências de deixar acumular:</strong> parcelas em atraso
            podem levar à exclusão do regime MEI, perda de benefícios previdenciários
            (auxílio-doença, aposentadoria por tempo de contribuição) e inscrição em
            dívida ativa. Se estiver com mais de 3 meses em aberto, considere
            parcelar no próprio portal.
          </p>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-green-900 mb-3">
          Quanto pago de DAS em 2026?
        </h2>
        <p className="text-green-900 text-sm mb-4">
          O valor depende da sua categoria. Em 2026 o DAS mensal fica em
          aproximadamente R$ 76,90 (comércio/indústria) ou R$ 80,90 (serviços),
          usando o salário mínimo vigente.
        </p>
        <Link
          href="/calculadora/das"
          className="inline-flex items-center text-blue-600 font-semibold hover:underline"
        >
          → Calcular meu DAS 2026
        </Link>
      </section>

      {/* Related links */}
      <section className="border-t pt-6">
        <h3 className="text-base font-bold text-gray-900 mb-3">Veja também</h3>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/calculadora/das"
            className="text-blue-600 font-semibold hover:underline text-sm"
          >
            → Calculadora DAS
          </Link>
          <Link
            href="/guias/das-mei-2026"
            className="text-blue-600 font-semibold hover:underline text-sm"
          >
            → Guia completo DAS 2026
          </Link>
          <Link
            href="/calculadora/faturamento"
            className="text-blue-600 font-semibold hover:underline text-sm"
          >
            → Limite de Faturamento MEI
          </Link>
          <Link
            href="/calculadora/mei-vs-me"
            className="text-blue-600 font-semibold hover:underline text-sm"
          >
            → MEI vs ME vs Simples
          </Link>
        </div>
      </section>
    </div>
  );
}
