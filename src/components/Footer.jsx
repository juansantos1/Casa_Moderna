import React from 'react';

export default function Footer() {
  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Nosotros', href: '#nosotros' }
  ];

  const legalLinks = [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos y Condiciones', href: '#' },
    { label: 'Mapa del Sitio', href: '#' }
  ];

  const whatsappUrl = "https://wa.link/7jfp4k";

  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {/* Logo Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img alt="Logo" className="h-10 w-auto" src="/images/hero_section-logo_sinfondo.png" />
              <span className="text-headline-md font-headline-md font-bold text-on-surface">PVC Casa Moderna</span>
            </div>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Expertos en transformar ambientes con soluciones arquitectónicas de alta calidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-on-surface font-label-bold text-label-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-on-surface font-label-bold text-label-bold mb-6">Información Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours and Quote CTA */}
          <div>
            <h4 className="text-on-surface font-label-bold text-label-bold mb-6">Horario de Atención</h4>
            <p className="text-on-surface-variant font-body-md text-body-md mb-2">Lunes a Viernes: 8am - 6pm</p>
            <p className="text-on-surface-variant font-body-md text-body-md">Sábados: 8am - 12pm</p>
            <div className="mt-8">
              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-primary text-primary px-4 py-2 rounded-lg font-label-bold text-label-bold hover:bg-primary hover:text-white transition-all text-center block"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-label-sm text-label-sm">
            © 2024 PVC Casa Moderna - Neiva, Huila. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-on-surface-variant font-label-sm text-label-sm">Hecho en Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
