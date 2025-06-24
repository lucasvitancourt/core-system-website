import React from "react";

const modules = [
  { name: "Dashboard", icon: "dashboard" },
  { name: "Administração", icon: "admin_panel_settings" },
  { name: "Vendas", icon: "storefront" },
  { name: "Assinaturas", icon: "subscriptions" },
  { name: "Operacional", icon: "build" },
  { name: "Estoque", icon: "inventory_2" },
  { name: "Financeiro", icon: "account_balance_wallet" },
  { name: "Relatórios", icon: "bar_chart" },
  { name: "Configurações", icon: "settings" },
];

export default function Modules() {
  return (
    <section className="section" id="modulos">
      <h2 className="section-title">Módulos do Core System</h2>
      <div className="modules-grid">
        {modules.map((mod, i) => (
          <div key={i} className="module-card">
            <span className="material-symbols-outlined">{mod.icon}</span>
            <div className="module-title">{mod.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 