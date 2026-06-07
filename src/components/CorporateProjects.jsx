import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LogoLoop from './LogoLoop';

const slides = [
  {
    company: 'ECOPETROL',
    title: 'Infraestructura Institucional',
    description:
      'Ejecución de infraestructura interior mediante la instalación de cielo raso en PVC y carpintería de aluminio para puertas institucionales, cumpliendo con altos estándares de resistencia, aislamiento y acabados técnicos.',
    image: '/images/corporativo-ecopetrol.jpg',
  },
  {
    company: 'PRIMAX',
    title: 'Fachadas Comerciales',
    description:
      'Suministro e instalación de fachadas flotantes en vidrio templado de alta resistencia, mejorando la estética corporativa, la iluminación natural y proyectando una imagen moderna y segura en sus estaciones.',
    image: '/images/corporativo-primax.jpg',
  },
  {
    company: 'MAXIPAN',
    title: 'Remodelación Comercial',
    description:
      'Suministro estratégico de acabados en WPC para la construcción y remodelación de diversas sucursales, aportando un diseño vanguardista, de alta durabilidad y bajo mantenimiento para un entorno comercial de alto tráfico.',
    image: '/images/corporativo-maxipan.jpg',
  },
  {
    company: 'SUPERMERCADO D1',
    title: 'Seguridad e Ingeniería',
    description:
      'Diseño e instalación de un sistema integral de seguridad electrónica. Implementamos un circuito cerrado de televisión (CCTV) y sensores de movimiento de alta precisión para garantizar el monitoreo constante y la protección de sus puntos de venta.',
    image: '/images/corporativo-D1.jpg',
  },
  {
    company: 'SMARTFIT',
    title: 'Instalaciones en vidrio templado',
    description:
      'Nos encargamos del suministro e instalación de los vidrios templados y zonas de espejos para sus gimnasios. Un trabajo enfocado en aguantar el alto tráfico diario de las sedes, garantizando la seguridad de los usuarios y aportando esa sensación de amplitud limpia que caracteriza a sus centros de entrenamiento.',
    image: '/images/corporativo-smartfit.jpg',
  },
];

/* ────────────────────────────────────────────────────────────
   Variantes de animación para el bloque de texto dinámico
──────────────────────────────────────────────────────────── */
const textVariants = {
  initial: { y: 24, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeInOut' },
  },
  exit: {
    y: -24,
    opacity: 0,
    transition: { duration: 0.28, ease: 'easeInOut' },
  },
};

/* ────────────────────────────────────────────────────────────
   Variantes de animación para la imagen
──────────────────────────────────────────────────────────── */
const imageVariants = {
  initial: { opacity: 0, scale: 1.04 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export default function CorporateProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <section
      id="proyectos-corporativos"
      className="relative w-full overflow-hidden py-20"
      style={{ backgroundColor: '#f0f4f8' }}
    >
      {/* ── Flecha izquierda flotante ── */}
      <button
        onClick={handlePrev}
        aria-label="Anterior proyecto"
        className="
          fixed-arrow fixed-arrow--left
          absolute left-3 top-1/2 -translate-y-1/2 z-20
          flex items-center justify-center
          w-11 h-11 rounded-full
          bg-white/80 backdrop-blur-sm
          border border-[#c1c7d2]/60
          text-[#005fa0] shadow-md
          hover:bg-[#005fa0] hover:text-white
          transition-all duration-300
          md:left-6
        "
      >
        <ChevronLeft size={22} strokeWidth={2} />
      </button>

      {/* ── Flecha derecha flotante ── */}
      <button
        onClick={handleNext}
        aria-label="Siguiente proyecto"
        className="
          fixed-arrow fixed-arrow--right
          absolute right-3 top-1/2 -translate-y-1/2 z-20
          flex items-center justify-center
          w-11 h-11 rounded-full
          bg-white/80 backdrop-blur-sm
          border border-[#c1c7d2]/60
          text-[#005fa0] shadow-md
          hover:bg-[#005fa0] hover:text-white
          transition-all duration-300
          md:right-6
        "
      >
        <ChevronRight size={22} strokeWidth={2} />
      </button>

      {/* ── Contenedor principal ── */}
      <div className="max-w-[1200px] mx-auto px-16 md:px-20">

        {/* ── Header fijo (kicker + título) ── */}
        <div className="mb-12 text-left">
          <span
            className="block mb-3 text-[#005fa0] font-semibold tracking-[0.18em] uppercase"
            style={{ fontSize: '13px' }}
          >
            PROYECTOS CORPORATIVOS
          </span>
          <h2
            className="text-[#191c20] font-extrabold leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.01em' }}
          >
            Grandes Marcas Confían en Nosotros
          </h2>
        </div>

        {/* ── Grid de dos columnas ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ─── COLUMNA IZQUIERDA: Texto dinámico ─── */}
          <div className="flex flex-col justify-center">
            {/*
              Contenedor de altura fija para que el layout no salte
              durante la transición de AnimatePresence.
              Ajusta `min-h` si los textos son más largos.
            */}
            <div className="relative overflow-hidden min-h-[260px] md:min-h-[300px] w-full">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeIndex}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 flex flex-col gap-5"
                >
                  {/* Badge / Chip del cliente */}
                  <div className="inline-flex self-start">
                    <span
                      className="
                        px-4 py-1.5 rounded-full
                        border border-[#005fa0]/50
                        text-[#005fa0] font-semibold uppercase tracking-widest
                        bg-[#005fa0]/5
                      "
                      style={{ fontSize: '12px' }}
                    >
                      {slides[activeIndex].company}
                    </span>
                  </div>

                  {/* Título del caso */}
                  <h3
                    className="text-[#191c20] font-bold leading-snug"
                    style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
                  >
                    {slides[activeIndex].title}
                  </h3>

                  {/* Descripción */}
                  <p
                    className="text-[#414751] leading-relaxed"
                    style={{ fontSize: '16px', lineHeight: '1.75' }}
                  >
                    {slides[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ─── COLUMNA DERECHA: Imagen del proyecto ─── */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={`img-${activeIndex}`}
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* ── Dots de paginación ── */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir al proyecto ${index + 1}`}
              className="
                flex items-center justify-center
                transition-all duration-300
                focus:outline-none
              "
            >
              {index === activeIndex ? (
                /* Dot activo: anillo + punto relleno */
                <span
                  className="
                    flex items-center justify-center
                    w-5 h-5 rounded-full
                    border-2 border-[#005fa0]
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-[#005fa0]" />
                </span>
              ) : (
                /* Dot inactivo: pequeño círculo gris */
                <span className="w-2.5 h-2.5 rounded-full bg-[#c1c7d2] hover:bg-[#717782] transition-colors duration-200" />
              )}
            </button>
          ))}
        </div>

        {/* ── Logo Loop: Clientes corporativos ── */}
        <div className="mt-16 pt-10 border-t border-[#c1c7d2]/40">
          <p
            className="text-center mb-6 text-[#717782] font-semibold tracking-[0.18em] uppercase"
            style={{ fontSize: '12px' }}
          >
            CLIENTES QUE CONFÍAN EN NOSOTROS
          </p>
          <LogoLoop
            logos={[
              { src: '/images/logos/logo-ecopetrol.png', alt: 'Ecopetrol' },
              { src: '/images/logos/primax-logo.png',    alt: 'Primax'    },
              { src: '/images/logos/logo-maxipan.png',   alt: 'Maxipan'   },
              { src: '/images/logos/D1-logo.webp',       alt: 'D1'        },
              { src: '/images/logos/smartfit-logo.png',  alt: 'SmartFit'  },
            ]}
            speed={60}
            direction="left"
            logoHeight={44}
            gap={80}
            pauseOnHover
            fadeOut
            fadeOutColor="#f0f4f8"
            scaleOnHover
            ariaLabel="Logos de clientes corporativos"
            style={{ padding: '8px 0' }}
          />
        </div>

      </div>
    </section>
  );
}
