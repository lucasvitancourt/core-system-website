import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://core-system.site/api";

export default function MetricsCards() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        // 1. Buscar todas as empresas
        const empresasRes = await axios.get(`${API_BASE}/empresas`);
        let empresas = empresasRes.data;
        if (!Array.isArray(empresas)) {
          // Se vier objeto, transforma em array
          empresas = Object.values(empresas);
        }
        const empresaId = empresas[0]?.id || empresas[0]?.id_empresa || empresas[0]?.ID || empresas[0]?.Id;
        console.log('Empresas:', empresas);
        console.log('EmpresaId:', empresaId);

        let clientes = [];
        let servicos = [];
        let funcionarios = [];

        if (empresaId) {
          // 2. Buscar clientes, serviços, funcionários da primeira empresa
          const [clientesRes, servicosRes, funcionariosRes] = await Promise.all([
            axios.get(`${API_BASE}/clientes?empresa=${empresaId}`),
            axios.get(`${API_BASE}/servicos?empresa=${empresaId}`),
            axios.get(`${API_BASE}/funcionarios?empresa=${empresaId}`),
          ]);
          clientes = Array.isArray(clientesRes.data) ? clientesRes.data : Object.values(clientesRes.data || {});
          servicos = Array.isArray(servicosRes.data) ? servicosRes.data : Object.values(servicosRes.data || {});
          funcionarios = Array.isArray(funcionariosRes.data) ? funcionariosRes.data : Object.values(funcionariosRes.data || {});
          console.log('Clientes:', clientes);
          console.log('Serviços:', servicos);
          console.log('Funcionários:', funcionarios);
        }

        setMetrics({
          empresas: empresas.length,
          clientes: clientes.length,
          servicos: servicos.length,
          funcionarios: funcionarios.length,
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