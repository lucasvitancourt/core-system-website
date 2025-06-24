import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://core-system.site/api";

function getArrayFromResponse(res) {
  if (Array.isArray(res)) return res;
  if (res && typeof res === "object") {
    if (Array.isArray(res.data)) return res.data;
    if (Array.isArray(res.results)) return res.results;
    return Object.values(res);
  }
  return [];
}

export default function MetricsCards() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        // Buscar todas as empresas
        const empresasRes = await axios.get(`${API_BASE}/empresas`);
        let empresas = getArrayFromResponse(empresasRes.data);
        const empresaIds = empresas.map(e => e.id || e.id_empresa || e.ID || e.Id).filter(Boolean);

        let totalClientes = 0;
        let totalServicos = 0;
        let totalFuncionarios = 0;

        // Buscar clientes, serviços, funcionários de todas as empresas
        await Promise.all(empresaIds.map(async (empresaId) => {
          try {
            const [clientesRes, servicosRes, funcionariosRes] = await Promise.all([
              axios.get(`${API_BASE}/clientes?empresa=${empresaId}`),
              axios.get(`${API_BASE}/servicos?empresa=${empresaId}`),
              axios.get(`${API_BASE}/funcionarios?empresa=${empresaId}`),
            ]);
            const clientes = getArrayFromResponse(clientesRes.data);
            const servicos = getArrayFromResponse(servicosRes.data);
            const funcionarios = getArrayFromResponse(funcionariosRes.data);

            // LOG para debug
            console.log(`Empresa ${empresaId}:`, {
              clientes, servicos, funcionarios
            });

            totalClientes += clientes.length;
            totalServicos += servicos.length;
            totalFuncionarios += funcionarios.length;
          } catch (err) {
            // Se der erro em uma empresa, ignora e segue
            console.error("Erro em empresa", empresaId, err);
          }
        }));

        setMetrics({
          empresas: empresas.length,
          clientes: totalClientes,
          servicos: totalServicos,
          funcionarios: totalFuncionarios,
        });
      } catch (e) {
        setMetrics({ status: "error" });
        console.error('Erro ao buscar métricas:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchMetrics();
  }, []);

  if (loading) return <div className="section"><div className="section-title">Carregando métricas...</div></div>;
  if (!metrics || metrics.status === "error") return <div className="section"><div className="section-title" style={{color: 'red'}}>Erro ao carregar métricas.</div></div>;

  const cards = [
    { title: "Empresas", value: metrics.empresas, icon: "business" },
    { title: "Clientes", value: metrics.clientes, icon: "person" },
    { title: "Serviços", value: metrics.servicos, icon: "build_circle" },
    { title: "Funcionários", value: metrics.funcionarios, icon: "group" },
  ];

  return (
    <section className="section" id="metricas">
      <h2 className="section-title">Métricas do Core System</h2>
      <div className="metrics-grid">
        {cards.map((card, i) => (
          <div key={i} className="metric-card">
            <span className="material-symbols-outlined metric-icon">{card.icon}</span>
            <div className="metric-value">{card.value}</div>
            <div className="metric-title">{card.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 