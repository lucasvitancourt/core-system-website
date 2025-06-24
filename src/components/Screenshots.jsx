import React from "react";
import dashboard from "../assets/react.svg";

export default function Screenshots() {
  // Substitua por suas imagens reais depois
  const prints = [
    { src: dashboard, alt: "Dashboard do Core System", legenda: "Dashboard Moderno" },
    { src: dashboard, alt: "Menu lateral do Core System", legenda: "Menu Lateral Intuitivo" },
  ];

  return (
    <section className="section" id="prints">
      <h2 className="section-title">Prints do Sistema</h2>
      <div className="screenshots-grid">
        {prints.map((print, i) => (
          <div key={i} className="screenshot-item">
            <img src={print.src} alt={print.alt} />
            <span>{print.legenda}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 