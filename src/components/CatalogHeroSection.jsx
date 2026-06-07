import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import BlurText from "./ui/blur-text";

export default function CatalogHeroSection() {
  const images = [
    "images/hero-catalogo-igm1.jpg",
    "images/hero-catalogo-img2.webp",
    "images/hero-catalogo-img3.jpg",
    "images/hero-catalogo-img4.jpg",
  ];

  return (
    <section className="relative h-[calc(100vh+112px)] -mt-28">
      <ImagesSlider images={images}>
        <motion.div
          initial={{
            opacity: 0.0,
            y: 100
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="z-50 flex flex-col justify-center items-center text-center px-margin-mobile max-w-4xl mx-auto pt-28"
        >
          <BlurText 
            text="Encuentra el acabado ideal para tus espacios"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-white font-display-lg text-headline-lg-mobile md:text-display-lg leading-tight justify-center"
          />
          <p className="text-white/90 font-body-lg text-body-lg mt-6 max-w-2xl mx-auto">
            Explora nuestro catálogo completo de PVC, WPC y revestimientos diseñados para transformar tu hogar con alta durabilidad.
          </p>
          <button 
            onClick={() => document.getElementById('catalog-grid')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-primary text-white mx-auto text-center rounded-lg relative mt-8 font-label-bold text-label-bold text-lg architectural-shadow hover:scale-105 transition-transform duration-200"
          >
            <span>Explorar Catálogo</span>
          </button>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
