import React from 'react';
import CountUp from './CountUp';

const stats = [
  {
    id: 'years',
    prefix: '+',
    number: 8,
    suffix: ' AÑOS',
    label: 'de experiencia',
  },
  {
    id: 'lamina',
    prefix: 'LÁMINA ',
    number: 100,
    suffix: '%',
    label: 'Importada',
  },
  {
    id: 'projects',
    prefix: '+',
    number: 5,
    suffix: 'MIL PROYECTOS',
    label: 'ejecutados',
  },
];

export default function StatsBar() {
  return (
    <>

      <div
        aria-label="Estadísticas y métricas"
        style={{
          backgroundColor: '#f0f4f8',
          width: '100%',
          padding: '36px 0',
          borderTop: '1px solid #e2e6ed',
          borderBottom: '1px solid #e2e6ed',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            alignItems: 'center',
          }}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              {/* Stat Column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  textAlign: 'center',
                  padding: '8px 24px',
                  position: 'relative',
                }}
              >
                {/* Divisor izquierdo (solo en columnas 2 y 3) */}
                {index > 0 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '1px',
                      height: '55%',
                      backgroundColor: '#c1c7d2',
                    }}
                  />
                )}

                {/* Valor principal */}
                <span
                  style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(20px, 3vw, 32px)',
                    letterSpacing: '-0.01em',
                    color: '#191c20',
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {stat.prefix}
                  <CountUp to={stat.number} duration={2} delay={0.2} />
                  {stat.suffix}
                </span>

                {/* Etiqueta — Inter */}
                <span
                  style={{
                    fontFamily: "'Inter', 'Hanken Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    color: '#717782',
                    letterSpacing: '0.02em',
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
