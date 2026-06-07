import React from 'react';

export default function AboutUs() {
  const credentials = [
    "Materiales certificados de alta durabilidad.",
    "Equipo técnico experto en instalaciones complejas.",
    "Cumplimiento estricto de tiempos de entrega."
  ];

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest" id="nosotros">
      {/* Scroll Reveal Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter transition-all duration-700 opacity-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-[32px] overflow-hidden">
            <img 
              alt="Interior Moderno" 
              className="rounded-[30px] w-full h-full object-cover object-top -mt-3 hover:scale-110 transition-transform duration-700 cursor-pointer" 
              data-alt="A sophisticated modern interior design showing high-end architectural finishes. The room features clean lines, white walls, and elegant blue accents that reflect the corporate identity. Sunlight floods the space through large windows, highlighting the precision of the PVC and drywall installations. The atmosphere is professional, spacious, and extremely clean." 
              src="/images/abaout_us-section-local_casa_moderna.png"
            />
          </div>
          <div>
            <span className="text-primary font-label-bold text-label-bold uppercase tracking-widest block mb-4">Sobre Nosotros</span>
            <h2 className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">Nuestra Misión es elevar la arquitectura de tu hogar</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-6">
              En PVC Casa Moderna, nos dedicamos a la transformación de espacios mediante el uso de materiales de vanguardia y mano de obra calificada. Con sede en Neiva, Huila, nos hemos consolidado como líderes en acabados profesionales.
            </p>
            <ul className="space-y-4 mb-8">
              {credentials.map((text, idx) => (
                <li key={idx} className="flex items-center gap-3 text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-primary" data-weight="fill">verified</span>
                  {text}
                </li>
              ))}
            </ul>
            <a 
              className="text-primary font-label-bold text-label-bold flex items-center gap-2 hover:gap-4 transition-all duration-300" 
              href="#servicios"
            >
              Explorar nuestra experiencia <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
