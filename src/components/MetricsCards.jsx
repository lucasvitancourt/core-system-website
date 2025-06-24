import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost/New/api/metrics.php";

const icons = {
  empresas: "business",
  usuarios: "group",
  agendamentos: "event",
  clientes: "person",
  comandas: "receipt_long",
  servicos: "build_circle",
};

const titles = {
  empresas: "Empresas",
  usuarios: "Usuários",
  agendamentos: "Agendamentos",
  clientes: "Clientes",
  comandas: "Comandas",
  servicos: "Serviços",
};

export default function MetricsCards() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setMetrics(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="section"><div className="section-title">Carregando métricas...</div></div>;
  if (!metrics || metrics.status !== "ok") return <div className="section"><div className="section-title" style={{color: 'red'}}>Erro ao carregar métricas.</div></div>;

  const order = ["empresas", "usuarios", "agendamentos", "clientes", "comandas", "servicos"];

  return (
    <section className="section" id="metricas">
      <h2 className="section-title">Métricas do Core System</h2>
      <div className="metrics-grid">
        {order.map((key) => (
          <div key={key} className="metric-card">
            <span className="material-symbols-outlined metric-icon">{icons[key]}</span>
            <div className="metric-value">{metrics[key]}</div>
            <div className="metric-title">{titles[key]}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 