import React, { useState } from 'react';
import { ParallaxScroll } from './ui/ParallaxScroll';

export default function Projects() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryImages = [
    "images/social_proof-img7.webp",
    "images/galeria/1.galeria-acabados.jpg",
    "images/galeria/2.galeria-acabados.webp",
    "images/galeria/3.galeria-acabados.jpg",
    "images/galeria/4.galeria-acabados.jpg",
    "images/galeria/5.galeria-acabados.webp",
    "images/galeria/6.galeria-acabados.webp",
    "images/galeria/7.galeria-acabados.webp",
    "images/galeria/8.galeria-acabados.jpg",
    "images/galeria/9.galeria-acabados.webp",
    "images/galeria/10.galeria-acabados.jpg",
    "images/social_proo-img4.jpg",
    "images/social_proof-img6.webp",
    "images/social_proof-img2.jpg",
    "images/social_proo-img5.jpg",
    "images/social-proof-7.jpg",
    "images/social-proof8.jpg",
    "images/social-proof9.jpg",
  ];
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest overflow-hidden" id="proyectos">
      {/* Scroll Reveal Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter transition-all duration-700 opacity-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-label-bold text-label-bold uppercase tracking-widest block mb-4">Proyectos Realizados</span>
            <h2 className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg">Orgullo por el detalle en cada instalación</h2>
          </div>
          <button 
            onClick={() => setIsGalleryOpen(true)}
            className="border border-primary text-primary px-8 py-3 rounded-lg font-label-bold text-label-bold hover:bg-primary/5 transition-all"
          >
            Ver Galería Completa
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Project 1 (Large Card) */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-lg">
            <img 
              alt="Project 1" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              data-alt="A grand residential living room showcase featuring high-end PVC ceiling panels and professional white drywall finishes. The lighting is integrated seamlessly, highlighting the precise alignment of all structural elements. The furniture is contemporary, complementing the architectural rigor of the space. Bright, natural daylight creates a premium, trust-inspiring atmosphere." 
              src="images/social_proof-img1.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
              <span className="text-white/80 font-label-sm text-label-sm uppercase">Cielo Raso en PVC</span>
              <h4 className="text-white font-headline-md text-headline-md">Centros de Entretenimiento</h4>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-lg h-64 md:h-auto">
            <img 
              alt="Project 2" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              data-alt="A modern office corridor showing professional WPC wall cladding and PVC flooring. The lines are perfectly straight, reflecting architectural excellence. The lighting is cool and professional, with high contrast between the dark cladding and bright walls. The style is strictly minimal and corporate." 
              src="images/social_proof-img2.jpg"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <h4 className="text-white font-label-bold text-label-bold">Sala de Estar</h4>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-lg h-64 md:h-auto">
            <img 
              alt="Project 3" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              data-alt="Close-up of a high-end air conditioning installation in a luxury bedroom. The unit is perfectly leveled on a textured white wall. The finish is impeccable, showing the precision of the installation service provided by the company. The lighting is warm and domestic yet retains a high-key professional look." 
              src="images/cocina-integral.jpg"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <h4 className="text-white font-label-bold text-label-bold">Cocinas Integrales</h4>
            </div>
          </div>

          {/* Project 4 (Wide Card) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-lg h-64">
            <img 
              alt="Project 4" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              data-alt="A wide shot of a modern retail space with professional electrical and lighting work. Geometric LED light strips are integrated into a sleek PVC ceiling. The space is bright, energetic, and perfectly finished. The floor is a high-gloss PVC that reflects the lighting, creating a sense of luxury and space." 
              src="images/social_proo-img3.jpg"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <h4 className="text-white font-label-bold text-label-bold">Drywall</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          {/* Close Button fixed to viewport */}
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] text-white hover:text-primary transition-colors bg-black/60 rounded-full p-2 backdrop-blur-sm shadow-lg border border-white/10"
            aria-label="Close gallery"
          >
            <span className="material-symbols-outlined text-3xl block">close</span>
          </button>

          <div className="w-full max-w-5xl relative">
            <ParallaxScroll images={galleryImages} />
          </div>
        </div>
      )}
    </section>
  );
}
