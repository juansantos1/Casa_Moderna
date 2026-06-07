import React from 'react';
import { Link } from 'react-router-dom';
import { HoverEffect } from './ui/card-hover-effect';

export default function Services() {
  const servicesData = [
    {
      title: "Cielos Rasos en PVC",
      description: "Instalaciones seguras y profesionales con acabados de lujo y durabilidad superior.",
      image: "/images/portafolio-cielo-rasos-PVC.webp",
      link: "/catalogo",
      isRoute: true,
      buttonText: "Ver catálogo de colores"
    },
    {
      title: "Revestimientos WPC y Pisos PVC",
      description: "Acabados de lujo que combinan la estética de la madera con la resistencia del PVC.",
      image: "/images/portafolio-Revestmientos_wpc.png",
      link: "/catalogo",
      isRoute: true,
      buttonText: "Ver catálogo de colores"
    },
    {
      title: "Lamina Marmol V",
      description: "Elegancia y resistencia con Lamina Mármol V.",
      image: "/images/lamina-marmol-v.jpeg",
      link: "/catalogo",
      isRoute: true,
      buttonText: "Ver catálogo de colores"
    },
    {
      title: "Aluminios y Estructuras Metálicas",
      description: "Resistencia y diseño moderno en aluminio y estructuras metálicas.",
      icon: "architecture",
      link: "#contacto"
    },
    {
      title: "Obra Blanca y Drywall",
      description: "Acabados lisos y estructuras ligeras para remodelaciones integrales.",
      icon: "format_paint",
      link: "#contacto"
    },
    {
      isCta: true,
      title: "¿Tienes un proyecto especial?",
      description: "Contáctanos para una asesoría personalizada sin compromiso.",
      link: "https://wa.link/7jfp4k"
    }
  ];

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low" id="servicios">
      {/* Scroll Reveal Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter transition-all duration-700 opacity-100">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-primary font-label-bold text-label-bold uppercase tracking-widest block mb-4">Portafolio de Soluciones</span>
          <h2 className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">Excelencia en acabados y mantenimiento</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        {/* Hover Effect Component wrapping all card items */}
        <HoverEffect items={servicesData} />
      </div>
    </section>
  );
}
