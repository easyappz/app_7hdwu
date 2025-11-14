import React from 'react';

export default function Pricing() {
  return (
    <section id="pricing" className="ea-section" data-easytag="id7-src/components/Home/Pricing.jsx">
      <div className="ea-container">
        <h2 className="ea-section__title">Цены</h2>
        <div className="ea-grid ea-grid--3">
          <div className="ea-card ea-card--surface">
            <h3 className="ea-card__title">Старт</h3>
            <p className="ea-price">Бесплатно</p>
            <ul className="ea-list">
              <li>Базовые шаблоны</li>
              <li>Предпросмотр</li>
              <li>Сообщество</li>
            </ul>
          </div>
          <div className="ea-card ea-card--surface ea-card--primary">
            <h3 className="ea-card__title">Про</h3>
            <p className="ea-price">990 ₽/мес</p>
            <ul className="ea-list">
              <li>Все из Старт</li>
              <li>Расширенные блоки</li>
              <li>Готовые интеграции</li>
            </ul>
          </div>
          <div className="ea-card ea-card--surface">
            <h3 className="ea-card__title">Бизнес</h3>
            <p className="ea-price">По запросу</p>
            <ul className="ea-list">
              <li>Индивидуальные решения</li>
              <li>Приоритетная поддержка</li>
              <li>Совместная разработка</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
