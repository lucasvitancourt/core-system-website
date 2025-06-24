import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Core System</span>
          <span className="footer-slogan">| Gestão inteligente, empresas eficientes.</span>
        </div>
        <div className="footer-links">
          <a href="mailto:contato@coresystem.com" title="E-mail"><span className="material-symbols-outlined footer-icon">mail</span></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><span className="material-symbols-outlined footer-icon">business_center</span></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"><span className="material-symbols-outlined footer-icon">photo_camera</span></a>
        </div>
      </div>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Core System. Todos os direitos reservados.</div>
    </footer>
  );
} 