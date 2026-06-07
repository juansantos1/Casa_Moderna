import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Main Navbar wrapper with scroll-sensing resize logic
export const Navbar = ({ children, className }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "py-2" : "py-4"} ${className || ""}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div
          layout
          className={`w-full transition-all duration-300 rounded-xl border border-outline-variant/30 ${
            isScrolled 
              ? "bg-surface-container-lowest/80 backdrop-blur-md shadow-md py-2 px-6" 
              : "bg-surface-container-lowest shadow-sm py-3 px-8"
          }`}
        >
          {children}
        </motion.div>
      </div>
    </header>
  );
};

// Desktop layout wrapper
export const NavBody = ({ children, className }) => {
  return (
    <div className={`hidden md:flex items-center justify-between w-full ${className || ""}`}>
      {children}
    </div>
  );
};

// Desktop links navigation items container
export const NavItems = ({ items, className }) => {
  return (
    <nav className={`flex gap-gutter items-center justify-center flex-1 mx-gutter ${className || ""}`}>
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="text-label-bold font-label-bold text-on-surface-variant hover:text-primary transition-colors duration-200"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

// Mobile layout wrapper
export const MobileNav = ({ children, className }) => {
  return (
    <div className={`md:hidden flex flex-col w-full ${className || ""}`}>
      {children}
    </div>
  );
};

// Large styled Logo component
export const NavbarLogo = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 flex-shrink-0 ${className || ""}`}>
      <img 
        alt="PVC Casa Moderna Logo" 
        className="h-16 md:h-20 w-auto transition-all duration-300 object-contain" 
        src="images/hero_section-logo_sinfondo.png" 
      />
    </div>
  );
};

// Universal Navbar button wrapper
export const NavbarButton = ({ children, variant, className, onClick, href, ...props }) => {
  const baseClass = "px-6 py-2 rounded-lg font-label-bold text-label-bold transition-all flex items-center justify-center";
  const primaryClass = "bg-primary text-white hover:opacity-90 architectural-shadow";
  const secondaryClass = "border border-primary text-primary hover:bg-primary/5";
  
  const finalClass = `${baseClass} ${variant === "primary" ? primaryClass : secondaryClass} ${className || ""}`;
  
  if (href) {
    return (
      <a href={href} className={finalClass} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={finalClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

// Mobile header container
export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={`flex justify-between items-center w-full ${className || ""}`}>
      {children}
    </div>
  );
};

// Mobile toggle hamburger menu button
export const MobileNavToggle = ({ isOpen, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-primary focus:outline-none flex items-center justify-center p-2 ${className || ""}`}
      aria-label="Toggle menu"
    >
      <span className="material-symbols-outlined text-3xl">
        {isOpen ? 'close' : 'menu'}
      </span>
    </button>
  );
};

// Animated mobile menu content drawer
export const MobileNavMenu = ({ children, isOpen, onClose, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`overflow-hidden mt-4 pt-2 border-t border-outline-variant/30 flex flex-col gap-4 ${className || ""}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
