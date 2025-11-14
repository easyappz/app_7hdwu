import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how" className="ea-section" data-easytag="id5-src/components/Home/HowItWorks.jsx">
      <div className="ea-container">
        <h2 className="ea-section__title">Как это работает</h2>
        <ol className="ea-steps">
          <li className="ea-step">
            <div className="ea-step__num">1</div>
            <div className="ea-step__body">
              <h3 className="ea-step__title">Опиши задачу</h3>
              <p className="ea-step__text">Расскажи, какое приложение ты хочешь. Коротко и по делу.</p>
            </div>
          </li>
          <li className="ea-step">
            <div className="ea-step__num">2</div>
            <div className="ea-step__body">
              <h3 className="ea-step__title">Получай результат</h3>
              <p className="ea-step__text">ИИ соберёт интерфейс и логику. Ты сразу видишь живой превью.</p>
            </div>
          </li>
          <li className="ea-step">
            <div className="ea-step__num">3</div>
            <div className="ea-step__body">
              <h3 className="ea-step__title">Дорабатывай</h3>
              <p className="ea-step__text">Вноси правки, добавляй блоки, меняй стили — всё под твоим контролем.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
