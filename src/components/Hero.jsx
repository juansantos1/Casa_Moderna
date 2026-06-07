import React from 'react';
import { motion } from 'framer-motion';
import { FlipWords } from './ui/flip-words';
import { TextGenerateEffect } from './ui/text-generate-effect';

export default function Hero() {
  const words = ["ambientes", "hogares", "oficinas", "proyectos", "espacios"];
  const whatsappUrl = "https://wa.link/7jfp4k";

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-visible -mt-28">
      {/* Background Image - positioned to cover entire viewport from top */}
      <img
        src="/images/hero-section-image.webp"
        alt="Hero Section Background"
        className="absolute -top-28 left-0 right-0 w-full h-[calc(100vh+112px)] object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Animated Text & CTA Container */}
      <motion.div 
        initial={{ opacity: 0.0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-20 text-center px-margin-mobile max-w-4xl mx-auto flex flex-col gap-6 items-center justify-center"
      >
        <h1 className="text-white font-display-lg text-headline-lg-mobile md:text-display-lg leading-tight text-center">
          Transformamos tus{" "}
          <span className="relative inline-block text-secondary-fixed">
            <FlipWords 
              words={words} 
              className="text-secondary-fixed font-display-lg text-headline-lg-mobile md:text-display-lg p-0 m-0"
            />
          </span>{" "}
          con calidad y excelencia
        </h1>
        <p className="text-white/90 font-body-lg text-body-lg mb-4 max-w-2xl mx-auto">
          <TextGenerateEffect words="Especialistas en soluciones integrales de PVC, WPC, Drywall y acabados profesionales." delay={0.6} />
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-10 py-4 rounded-lg font-label-bold text-label-bold text-lg architectural-shadow hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            Cotizar Proyecto
          </a>
          <a 
            href="#servicios" 
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-lg font-label-bold text-label-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
          >
            Ver Servicios
          </a>
        </div>
      </motion.div>
    </section>
  );
}
