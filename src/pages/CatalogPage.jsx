import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import CatalogHeroSection from '../components/CatalogHeroSection';

export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState('pvc');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { id: 301, category: 'pvc', name: 'Blanco Madera', code: '#PVC001', measures: '5.95m x 0.25m', image: '/images/Laminas_Cielo-Raso_PVC/Blanco Madera - Lamina PVC.jpg' },
    { id: 302, category: 'pvc', name: 'Blanco Madera Acanalado', code: '#PVC002', measures: '5.95m x 0.25m', image: '/images/Laminas_Cielo-Raso_PVC/Blanco Madera Acanalado - Lamina PVC.jpg' },
    { id: 303, category: 'pvc', name: 'Blanco Marmol Acanlado', code: '#PVC003', measures: '5.95m x 0.25m', image: '/images/Laminas_Cielo-Raso_PVC/Blanco Marmol Acanlado - Lamina PVC.jpg' },
    { id: 304, category: 'pvc', name: 'Ejecutivo', code: '#PVC004', measures: '5.95m x 0.25m', image: '/images/Laminas_Cielo-Raso_PVC/Ejecutivo - Lamina PVC.jpg' },
    { id: 305, category: 'pvc', name: 'Ejecutivo Olas', code: '#PVC005', measures: '5.95m x 0.25m', image: '/images/Laminas_Cielo-Raso_PVC/Ejecutivo Olas - Lamina PVC.jpg' },
    { id: 306, category: 'pvc', name: 'Marmol Gris Acanalado', code: '#PVC006', measures: '5.95m x 0.25m', image: '/images/Laminas_Cielo-Raso_PVC/Marmol Gris Acanalado - Lamina PVC.jpg' },
    { id: 307, category: 'pvc', name: 'Pino', code: '#PVC007', measures: '5.95m x 0.25m', image: '/images/Laminas_Cielo-Raso_PVC/Pino - Lamina PVC.jpg' },
    { id: 201, category: 'laminas-v', name: 'M001', code: '#M001', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M001.jpg' },
    { id: 202, category: 'laminas-v', name: 'M002', code: '#M002', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M002.jpg' },
    { id: 203, category: 'laminas-v', name: 'M003', code: '#M003', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M003.webp' },
    { id: 204, category: 'laminas-v', name: 'M004', code: '#M004', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M004.webp' },
    { id: 205, category: 'laminas-v', name: 'M005', code: '#M005', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M005.jpg' },
    { id: 206, category: 'laminas-v', name: 'M006', code: '#M006', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M006.jpg' },
    { id: 207, category: 'laminas-v', name: 'M007', code: '#M007', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M007.webp' },
    { id: 208, category: 'laminas-v', name: 'M008', code: '#M008', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M008.webp' },
    { id: 209, category: 'laminas-v', name: 'M009', code: '#M009', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M009.jpg' },
    { id: 210, category: 'laminas-v', name: 'M010', code: '#M010', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M010.jpg' },
    { id: 211, category: 'laminas-v', name: 'M011', code: '#M011', measures: '1.22m x 2.44m', image: '/images/Catalogo_LaminasV/M011.jpg' },
    { id: 101, category: 'wpc', name: 'G004', code: '#G004', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G004.jpg' },
    { id: 102, category: 'wpc', name: 'G002', code: '#G002', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G002.jpg' },
    { id: 103, category: 'wpc', name: 'G009', code: '#G009', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G009.jpg' },
    { id: 104, category: 'wpc', name: 'G007', code: '#G007', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G007.jpg' },
    { id: 105, category: 'wpc', name: 'G005', code: '#G005', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G005.jpg' },
    { id: 106, category: 'wpc', name: 'G003', code: '#G003', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G003.jpg' },
    { id: 107, category: 'wpc', name: 'G006', code: '#G006', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G006.jpg' },
    { id: 108, category: 'wpc', name: 'G008', code: '#G008', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G008.jpg' },
    { id: 109, category: 'wpc', name: 'GNEGRA', code: '#GNEGRA', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/GNEGRA.jpg' },
    { id: 110, category: 'wpc', name: 'G016', code: '#G016', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G016.jpg' },
    { id: 111, category: 'wpc', name: 'G017', code: '#G017', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G017.jpg' },
    { id: 112, category: 'wpc', name: 'G010', code: '#G010', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G010.jpg' },
    { id: 113, category: 'wpc', name: 'G014', code: '#G014', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G014.jpg' },
    { id: 114, category: 'wpc', name: 'G001', code: '#G001', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G001.jpg' },
    { id: 115, category: 'wpc', name: 'G011', code: '#G011', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G011.jpg' },
    { id: 116, category: 'wpc', name: 'G013', code: '#G013', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G013.jpg' },
    { id: 117, category: 'wpc', name: 'G0-nose', code: '#G0-nose', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G0-nose.jpg' },
    { id: 118, category: 'wpc', name: 'G018', code: '#G018', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G018.jpg' },
    { id: 119, category: 'wpc', name: 'G015', code: '#G015', measures: '16cm x 2.90m', image: '/images/Catalogo_Modelos-WPC/G015.jpg' }
  ];

  const filters = [
    { label: 'Cielo Raso Laminas PVC', value: 'pvc' },
    { label: 'Modelos WPC', value: 'wpc' },
    { label: 'Laminas Mármol V', value: 'laminas-v' },
  ];

  const filteredProducts = products.filter((p) => p.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">

      
      <main className="flex-grow">
        {/* Catalog Hero Section */}
        <CatalogHeroSection />

        {/* Animated Header */}
        <motion.div
          id="catalog-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest"
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary font-label-bold text-label-bold uppercase tracking-widest block mb-4"
            >
              Catálogo Completo
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4"
            >
              Nuestro Catálogo de Productos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto"
            >
              Explora nuestra selección premium de acabados arquitectónicos. Durabilidad, diseño vanguardista y la mejor
              calidad en PVC y WPC para transformar tus espacios.
            </motion.p>

            {/* Static Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap justify-center gap-3 mt-10"
            >
              {filters.map((filter, idx) => (
                <motion.button
                  key={filter.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-6 py-2 rounded-lg border font-label-bold text-label-bold transition-all duration-200 ${
                    activeFilter === filter.value
                      ? 'bg-primary text-white border-primary'
                      : 'border-outline text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Product Grid */}
        <motion.div
          className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-section-padding-mobile md:pb-section-padding-desktop mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{product.name}</h3>
                  <p className="text-label-sm font-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                    {product.code}
                  </p>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">{product.measures}</p>
                </div>

                {/* CTA Button */}
                <div className="p-5 pt-0">
                  <a
                    href="https://wa.link/7jfp4k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-on-primary py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 font-label-bold text-label-bold"
                  >
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    Cotizar por WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <p className="text-on-surface-variant font-body-lg text-body-lg">
                No hay productos en esta categoría
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Animated CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="bg-tertiary-fixed text-on-tertiary-fixed py-section-padding-desktop"
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter rounded-2xl flex flex-col md:flex-row items-center justify-between gap-gutter">
            <div className="text-center md:text-left">
              <h3 className="font-headline-lg text-headline-lg mb-2">¿No encuentras lo que buscas?</h3>
              <p className="font-body-lg text-body-lg opacity-80">
                Nuestro catálogo se actualiza constantemente. Contáctanos para pedidos especiales.
              </p>
            </div>
            <a
              href="https://wa.link/7jfp4k"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-on-tertiary-fixed text-surface-container-lowest px-10 py-4 rounded-lg font-label-bold text-label-bold hover:opacity-90 transition-all shadow-lg active:scale-95 flex-shrink-0"
            >
              Hablar con un Experto
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
