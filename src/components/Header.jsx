import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-logo">Core System</div>
      <nav className="header-nav">
        <a href="#sobre">Sobre</a>
        <a href="#modulos">Módulos</a>
        <a href="#prints">Prints</a>
        <a href="#metricas">Métricas</a>
        <a href="#contato">Contato</a>
      </nav>
      <a href="https://core-system.site" className="header-btn">Entrar</a>
    </header>
  );
} 