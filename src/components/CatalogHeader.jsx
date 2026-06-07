import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CatalogHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/#inicio' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Catálogo', href: '/catalogo', isRoute: true },
    { label: 'Proyectos', href: '/#proyectos' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Contacto', href: '/#contacto' },
  ];

  const whatsappUrl = "https://wa.link/7jfp4k";

  return (
    <header 
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/30' 
          : 'bg-transparent'
      }`}
    ><div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-24">
        {/* Logo (Larger size) */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link to="/">
            <img 
              alt="PVC Casa Moderna Logo" 
              className="h-16 md:h-20 w-auto object-contain" 
              src="images/hero_section-logo_sinfondo.png" 
            />
          </Link>
        </div>
        
        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex gap-gutter items-center justify-center flex-1 mx-gutter">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                className={`text-label-bold font-label-bold transition-all duration-200 transform hover:-translate-y-1 px-4 py-2 rounded-lg border border-transparent relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white'
                }`}
                to={link.href}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                }`}></span>
              </Link>
            ) : (
              <a
                key={link.label}
                className={`text-label-bold font-label-bold transition-all duration-200 transform hover:-translate-y-1 px-4 py-2 rounded-lg border border-transparent relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white'
                }`}
                href={link.href}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                }`}></span>
              </a>
            )
          ))}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex flex-shrink-0">
          <a
            className={`px-6 py-2 rounded-lg font-label-bold text-label-bold transition-all architectural-shadow transform hover:-translate-y-1 ${
              isScrolled
                ? 'bg-primary text-white hover:opacity-90'
                : 'bg-white/20 text-white border border-white/40 backdrop-blur-md hover:bg-white/30'
            }`}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar Ahora
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-primary focus:outline-none flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-margin-mobile py-4 shadow-lg absolute left-0 right-0 z-40">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  className="text-label-bold font-label-bold text-on-surface-variant hover:text-primary transition-colors duration-200 block py-1"
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  className="text-label-bold font-label-bold text-on-surface-variant hover:text-primary transition-colors duration-200 block py-1"
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              className="bg-primary text-white px-6 py-3 rounded-lg font-label-bold text-label-bold hover:opacity-90 transition-all architectural-shadow text-center block"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cotizar Ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
