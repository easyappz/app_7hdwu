import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ea-footer" data-easytag="id9-src/components/Home/Footer.jsx">
      <div className="ea-container ea-footer__inner">
        <div className="ea-footer__brand">Easyappz</div>
        <nav className="ea-footer__nav" aria-label="Навигация в футере">
          <a href="#benefits" className="ea-footer__link">Преимущества</a>
          <a href="#how" className="ea-footer__link">Как это работает</a>
          <a href="#demo" className="ea-footer__link">Демо</a>
          <a href="#pricing" className="ea-footer__link">Цены</a>
        </nav>
        <div className="ea-footer__copy">© {year} Easyappz</div>
      </div>
    </footer>
  );
}
