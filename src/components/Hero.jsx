import React from "react";
import tela from "../assets/tela.png";

export default function Hero() {
  return (
    <section className="hero hero-dark" id="sobre">
      <div className="hero-flex">
        <div className="hero-content">
          <h1>O ERP Completo para Gestão Centralizada e Escalável</h1>
          <p>
            O Core System é um sistema ERP completo e multi-tenant, desenvolvido para gerenciar empresas de forma centralizada e eficiente. Interface moderna, automação, organização e escalabilidade para o seu negócio.
          </p>
          <a href="#contato" className="hero-btn">
            Solicite uma Demonstração
          </a>
        </div>
        <div className="hero-img-box">
          <img src={tela} alt="Dashboard do Core System" className="hero-img" />
        </div>
      </div>
    </section>
  );
} 