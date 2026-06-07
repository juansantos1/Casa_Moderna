import React, { useState, useEffect } from 'react';

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, slides.length]);

  const handleMouseMove = (e) => {
    if (!isHovering) setIsHovering(true);
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const moveX = (x - rect.width / 2) * 0.05;
    const moveY = (y - rect.height / 2) * 0.05;
    
    setMousePosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full">
      {/* Slides Container */}
      <div 
        className="relative w-full h-full bg-black rounded-lg overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ height: '600px' }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              style={{
                transform: isHovering && index === currentSlide 
                  ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
                  : 'translate(0, 0)',
                transition: isHovering ? 'none' : 'transform 0.3s ease-out',
              }}
              className="w-full h-full"
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  width: '102%',
                  height: '102%',
                  position: 'absolute',
                  top: '-1%',
                  left: '-1%',
                }}
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Content - Solo Título */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-xl font-bold">{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6 mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary w-8'
                : 'bg-on-surface-variant/30 hover:bg-on-surface-variant/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons - Bottom */}
      <div className="flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:shadow-lg hover:border-white/40 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <span className="material-symbols-outlined text-xl leading-none">chevron_left</span>
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:shadow-lg hover:border-white/40 flex items-center justify-center"
          aria-label="Next slide"
        >
          <span className="material-symbols-outlined text-xl leading-none">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
