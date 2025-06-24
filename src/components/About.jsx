import React from "react";

export default function About() {
  return (
    <section className="section-sobre" id="sobre">
      <div className="sobre-title">Sobre o Core System</div>
      <div className="sobre-desc">
        O Core System é um sistema ERP completo e multi-tenant, desenvolvido para gerenciar empresas de forma centralizada e eficiente. Ele oferece funcionalidades como agendamentos, controle de serviços, estoque, comandas, gestão financeira, funcionários, planos de assinatura e geração de relatórios, tudo acessível via uma interface moderna e responsiva.
      </div>
      <div className="sobre-benefits">
        <div className="sobre-benefit"><span className="material-symbols-outlined">groups</span>Multi-tenant: cada empresa com ambiente exclusivo</div>
        <div className="sobre-benefit"><span className="material-symbols-outlined">link</span>Link exclusivo para agendamentos com clientes</div>
        <div className="sobre-benefit"><span className="material-symbols-outlined">payments</span>Controle total de salários, comissões e personalização</div>
        <div className="sobre-benefit"><span className="material-symbols-outlined">devices</span>Interface moderna, responsiva e intuitiva</div>
        <div className="sobre-benefit"><span className="material-symbols-outlined">auto_mode</span>Automação, organização e escalabilidade</div>
      </div>
    </section>
  );
} 