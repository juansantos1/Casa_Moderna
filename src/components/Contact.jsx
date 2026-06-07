import React from 'react';

export default function Contact() {
  const contactInfo = [
    {
      icon: "location_on",
      title: "Dirección",
      content: "Cl. 5 #7 - 34, Neiva, Huila"
    },
    {
      icon: "call",
      title: "Teléfono",
      content: "313 3820643"
    },
    {
      icon: "mail",
      title: "Correo",
      content: "CasaModernaSuporrt@gmail.com"
    }
  ];

  return (
    <section id="contacto" className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-high">
      {/* Scroll Reveal Container */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter transition-all duration-700 opacity-100">
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl architectural-shadow flex flex-col md:flex-row">
          {/* Info Details */}
          <div className="p-12 md:w-1/2">
            <h2 className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">
              Estamos en Neiva, listos para tu próximo proyecto
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">
                    {info.icon}
                  </span>
                  <div>
                    <h4 className="text-on-surface font-label-bold text-label-bold">{info.title}</h4>
                    <p className="text-on-surface-variant font-body-md text-body-md">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-10 pt-10 border-t border-outline-variant">
              <h4 className="text-on-surface font-label-bold text-label-bold mb-4">Síguenos en Redes</h4>
              <div className="flex gap-4 flex-wrap">
                {/* Instagram */}
                <a 
                  className="p-2 bg-surface-container rounded-full hover:bg-primary/10 hover:scale-105 transition-all w-12 h-12 flex items-center justify-center border border-outline-variant" 
                  href="https://www.instagram.com/pvccasamodernaneiva?igsh=MW1vdzljNGRrcXJxeA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <img src="/images/logotipo-instagram.png" alt="Instagram" className="w-6 h-6 object-contain" />
                </a>

                {/* Facebook */}
                <a 
                  className="p-2 bg-surface-container rounded-full hover:bg-primary/10 hover:scale-105 transition-all w-12 h-12 flex items-center justify-center border border-outline-variant" 
                  href="https://www.facebook.com/share/v/18WeBKk5Yx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <img src="/images/logotipo-facebook.png" alt="Facebook" className="w-6 h-6 object-contain" />
                </a>

                {/* TikTok (No redirect) */}
                <div 
                  className="p-2 bg-surface-container rounded-full border border-outline-variant w-12 h-12 flex items-center justify-center opacity-85 select-none"
                  title="TikTok (Muy pronto)"
                >
                  <img src="/images/logotipo-tik-tok.png" alt="TikTok" className="w-6 h-6 object-contain filter grayscale" />
                </div>

                {/* Google Maps */}
                <a 
                  className="p-2 bg-surface-container rounded-full hover:bg-primary/10 hover:scale-105 transition-all w-12 h-12 flex items-center justify-center border border-outline-variant" 
                  href="https://www.google.com/maps/place/PVC+Casa+Moderna+Neiva/@2.9251841,-75.2881838,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3b759fb81a2e07:0xe2845c716b464128!8m2!3d2.9251787!4d-75.2856089!16s%2Fg%2F11wx7z0p5t?entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Google Maps"
                >
                  <img src="/images/logotipo-google-maps.png" alt="Google Maps" className="w-6 h-6 object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Image */}
          <a 
            href="https://www.google.com/maps/place/PVC+Casa+Moderna+Neiva/@2.9251841,-75.2881838,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3b759fb81a2e07:0xe2845c716b464128!8m2!3d2.9251787!4d-75.2856089!16s%2Fg%2F11wx7z0p5t?entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-1/2 h-80 md:h-auto min-h-[400px] block hover:opacity-90 transition-opacity cursor-pointer"
          >
            <img 
              alt="Mapa de Ubicación" 
              className="w-full h-full object-cover" 
              data-location="Neiva, Huila" 
              src="/images/contacto-google_maps-image.png"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
