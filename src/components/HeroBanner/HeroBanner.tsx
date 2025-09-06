import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Nueva Colección Vitamin Glow",
    subtitle: "Ilumina tu piel con nuestros nuevos sérums con vitamina C de última generación",
    cta: "Descubrir Colección",
    ctaLink: "/productos/facial"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/4041400/pexels-photo-4041400.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "20% OFF en Kits de Cuidado",
    subtitle: "Rutinas completas diseñadas por expertos para cada tipo de piel",
    cta: "Ver Promociones",
    ctaLink: "/productos/kits"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/4041408/pexels-photo-4041408.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Belleza Natural, Ciencia Comprobada",
    subtitle: "Más de 15 años investigando ingredientes botánicos para tu bienestar",
    cta: "Nuestra Historia",
    ctaLink: "/sobre-nosotros"
  }
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Parallax */}
          <div 
            className="absolute inset-0 bg-cover bg-center parallax"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: `translateY(${index === currentSlide ? 0 : '10px'})`,
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 slide-up">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
                {slide.subtitle}
              </p>
              <a
                href={slide.ctaLink}
                className="inline-block bg-raspberry text-white px-8 py-3 rounded-full font-medium hover:bg-raspberry/90 transition-all duration-300 btn-primary slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-colors duration-200"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-colors duration-200"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;