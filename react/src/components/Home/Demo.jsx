import React, { useEffect, useState } from 'react';
import { getHello } from '../../api/hello';

export default function Demo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    getHello()
      .then((res) => {
        if (!mounted) return;
        setData(res);
      })
      .catch((e) => {
        if (!mounted) return;
        setError(e?.response?.data?.detail || 'Не удалось получить данные демо API');
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="demo" className="ea-section" data-easytag="id6-src/components/Home/Demo.jsx">
      <div className="ea-container">
        <h2 className="ea-section__title">Демо</h2>
        <div className="ea-demo">
          <div className="ea-demo__placeholder" aria-label="Заглушка демо-видео" />
          <p className="ea-demo__hint">Здесь будет демонстрация работы сервиса (заглушка).</p>

          <div aria-live="polite" style={{ marginTop: 12 }}>
            {loading && (
              <span style={{ color: 'var(--ea-muted)' }}>Загрузка демо API…</span>
            )}
            {!loading && error && (
              <span style={{ color: '#b00020' }}>Ошибка: {error}</span>
            )}
            {!loading && !error && data && (
              <div style={{
                display: 'inline-flex',
                gap: 8,
                alignItems: 'center',
                padding: '8px 12px',
                borderRadius: 999,
                border: '1px solid var(--ea-border)',
                background: 'var(--ea-surface)'
              }}>
                <span style={{ fontWeight: 600 }}>API:</span>
                <span>{data.message}</span>
                <span style={{ color: 'var(--ea-muted)' }}>
                  {(() => {
                    try {
                      return new Date(data.timestamp).toLocaleString();
                    } catch (e) {
                      return data.timestamp;
                    }
                  })()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
