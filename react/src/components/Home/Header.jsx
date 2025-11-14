import React from 'react';

export default function Header() {
  return (
    <header className="ea-header" data-easytag="id2-src/components/Home/Header.jsx">
      <div className="ea-container ea-header__inner">
        <div className="ea-logo" aria-label="Easyappz">Easyappz</div>
        <nav className="ea-nav" aria-label="Главная навигация">
          <a href="#benefits" className="ea-nav__link">Преимущества</a>
          <a href="#how" className="ea-nav__link">Как это работает</a>
          <a href="#demo" className="ea-nav__link">Демо</a>
          <a href="#pricing" className="ea-nav__link">Цены</a>
          <a href="#cta" className="ea-button ea-button--small">Начни творить</a>
        </nav>
      </div>
    </header>
  );
}
