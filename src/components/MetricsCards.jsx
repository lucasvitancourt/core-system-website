import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost/New/api";

export default function MetricsCards() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        setLoading(true);
        setError(null);
        
        // Buscar métricas usando o novo endpoint
        const response = await axios.get(`${API_BASE}/metrics.php?tipo=resumido`);
        
        if (response.data.status === 'success') {
          const data = response.data.metricas_gerais;
          setMetrics({
            empresas: data.empresas || 0,
            clientes: data.clientes || 0,
            servicos: data.servicos || 0,
            funcionarios: data.usuarios || 0,
            agendamentos: data.agendamentos || 0,
            comandas: data.comandas || 0
          });
        } else {
          throw new Error('Erro na resposta da API');
        }
      } catch (err) {
        console.error('Erro ao buscar métricas:', err);
        setError('Erro ao carregar métricas. Verifique se a API está rodando.');
        
        // Fallback com dados de exemplo
        setMetrics({
          empresas: 0,
          clientes: 0,
          servicos: 0,
          funcionarios: 0,
          agendamentos: 0,
          comandas: 0
        });
      } finally {
        setLoading(false);
      }
    }
    
    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <section className="section" id="metricas">
        <h2 className="section-title">Métricas do Core System</h2>
        <div className="metrics-grid">
          <div className="metric-card loading">
            <div className="loading-spinner"></div>
            <div className="metric-title">Carregando...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section" id="metricas">
        <h2 className="section-title">Métricas do Core System</h2>
        <div className="error-message" style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
          {error}
        </div>
      </section>
    );
  }

  const cards = [
    { 
      title: "Empresas", 
      value: metrics.empresas, 
      icon: "business",
      color: "#4CAF50"
    },
    { 
      title: "Clientes", 
      value: metrics.clientes, 
      icon: "person",
      color: "#2196F3"
    },
    { 
      title: "Serviços", 
      value: metrics.servicos, 
      icon: "build_circle",
      color: "#FF9800"
    },
    { 
      title: "Funcionários", 
      value: metrics.funcionarios, 
      icon: "group",
      color: "#9C27B0"
    },
    { 
      title: "Agendamentos", 
      value: metrics.agendamentos, 
      icon: "schedule",
      color: "#607D8B"
    },
    { 
      title: "Comandas", 
      value: metrics.comandas, 
      icon: "receipt",
      color: "#795548"
    }
  ];

  return (
    <section className="section" id="metricas">
      <h2 className="section-title">Métricas do Core System</h2>
      <div className="metrics-grid">
        {cards.map((card, i) => (
          <div key={i} className="metric-card" style={{ borderLeft: `4px solid ${card.color}` }}>
            <span className="material-symbols-outlined metric-icon" style={{ color: card.color }}>
              {card.icon}
            </span>
            <div className="metric-value">{card.value.toLocaleString('pt-BR')}</div>
            <div className="metric-title">{card.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 