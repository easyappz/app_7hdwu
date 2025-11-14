import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="ea-hero" data-easytag="id3-src/components/Home/Hero.jsx">
      <div className="ea-container">
        <p className="ea-badge">Easyappz</p>
        <h1 className="ea-hero__title">Создавай веб‑приложения с ИИ</h1>
        <p className="ea-hero__subtitle">От идеи до работающего продукта за минуты. Интуитивно. Мощно. Красиво.</p>
        <div className="ea-hero__actions">
          <a href="#cta" className="ea-button ea-button--primary">Начни творить</a>
        </div>
        <div className="ea-hero__media" aria-label="Заглушка для демо-изображения" />
      </div>
    </section>
  );
}
