'use client';

import { useState, useMemo } from 'react';
import cnaeData from '../../data/cnae-categories.json';

const cnaes = cnaeData.cnae;

const categoryLabel: Record<string, string> = {
  services: 'Serviços',
  commerce: 'Comércio',
};

export default function CnaeTool() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'services' | 'commerce'>('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return cnaes.filter((cnae) => {
      const matchSearch =
        !q ||
        cnae.code.toLowerCase().includes(q) ||
        cnae.description.toLowerCase().includes(q);
      const matchFilter = filter === 'all' || cnae.category === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <>
      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-700">{cnaes.length}</div>
          <div className="text-sm text-green-600">CNAEs permitidos</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">
            {cnaes.filter((c) => c.category === 'services').length}
          </div>
          <div className="text-sm text-blue-600">Serviços</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-700">
            {cnaes.filter((c) => c.category === 'commerce').length}
          </div>
          <div className="text-sm text-orange-600">Comércio</div>
        </div>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Buscar por código ou descrição (ex: restaurante, 5611, consultoria...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'all' | 'services' | 'commerce')}
          className="border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">Todos os tipos</option>
          <option value="services">Serviços</option>
          <option value="commerce">Comércio</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        {filtered.length} atividade{filtered.length !== 1 ? 's' : ''} encontrada
        {filtered.length !== 1 ? 's' : ''}
        {search && ` para "${search}"`}
      </p>

      {/* CNAE list */}
      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Nenhuma atividade encontrada. Tente outro termo.
          </div>
        )}
        {filtered.map((cnae) => (
          <div
            key={cnae.code}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-sm font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                    {cnae.code}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-medium ${
                      cnae.category === 'services'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {categoryLabel[cnae.category]}
                  </span>
                  {cnae.popular && (
                    <span className="text-xs px-2 py-0.5 rounded font-medium bg-green-100 text-green-700">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-900 font-medium">{cnae.description}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    cnae.das_iss ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
                <span className="text-gray-600">ISS (DAS +R$5/mês)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    cnae.das_icms ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
                <span className="text-gray-600">ICMS (DAS +R$1/mês)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    cnae.allows_nfse ? 'bg-green-500' : 'bg-red-400'
                  }`}
                />
                <span className="text-gray-600">
                  {cnae.allows_nfse ? 'Emite NFS-e' : 'Não emite NFS-e'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="font-bold text-gray-900 mb-3">Como funciona o CNAE no MEI?</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>CNAE</strong> é a Classificação Nacional de Atividades Econômicas.
            Ele define o que seu MEI pode fazer e qual imposto você paga no DAS mensalmente.
          </p>
          <p>
            <strong>Serviços</strong> pagam ISS no DAS (+R$5/mês) — imposto municipal,
            independente de quanto você fatura.
          </p>
          <p>
            <strong>Comércio</strong> paga ICMS no DAS (+R$1/mês) — imposto estadual
            sobre circulação de mercadorias.
          </p>
          <p>
            O INSS (5% do salário mínimo = R$75,90/mês em 2026) é sempre cobrado,
            independente do tipo de atividade.
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href="/calculadora/das"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Calcular seu DAS →
        </a>
      </div>
    </>
  );
}
