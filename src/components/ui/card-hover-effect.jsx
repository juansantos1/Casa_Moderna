import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 py-10 ${className || ""}`}>
      {items.map((item, idx) => {
        // If it's a CTA card
        if (item.isCta) {
          return (
            <div
              key={idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-primary/20 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              
              <div className="relative z-20 h-full bg-primary p-8 rounded-2xl architectural-shadow flex flex-col justify-center items-center text-center text-white border border-transparent transition-all duration-300">
                <h3 className="font-headline-md text-headline-md mb-4">{item.title}</h3>
                <p className="font-body-md text-body-md mb-6 text-white/80">{item.description}</p>
                <a 
                  href={item.link}
                  className="bg-white text-primary px-8 py-3 rounded-lg font-label-bold text-label-bold hover:scale-105 transition-transform flex items-center justify-center"
                >
                  Solicitar Asesoría
                </a>
              </div>
            </div>
          );
        }

        // If it's a standard card (image or icon)
        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-primary/10 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            
            <div className="relative z-20 h-full bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant group-hover:border-primary/20 transition-all duration-300 flex flex-col">
              {item.image ? (
                <div className="h-56 overflow-hidden">
                  <img 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={item.image}
                  />
                </div>
              ) : (
                <div className="pt-8 pb-2 flex justify-center">
                  <span className="material-symbols-outlined text-primary text-5xl">{item.icon}</span>
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-on-surface font-headline-md text-headline-md mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md mb-6">{item.description}</p>
                </div>
                {item.image && (
                  <div>
                    {item.isRoute ? (
                      <Link 
                        to={item.link || "/catalogo"} 
                        className="text-primary font-label-bold text-label-bold hover:underline"
                      >
                        {item.buttonText || "Ver catálogo"}
                      </Link>
                    ) : (
                      <a 
                        href={item.link || "#contacto"} 
                        className="text-primary font-label-bold text-label-bold hover:underline"
                      >
                        Saber más
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
