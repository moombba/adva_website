import { useState, useEffect } from 'react';
import { projects } from '../../data/projects';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselProjects = projects.slice(0, 4); // Prend les 4 premiers projets pour le carrousel

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselProjects.length]);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-[#333333] overflow-hidden pointer-events-auto">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {carouselProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-10 opacity-20' : 'opacity-0'
            }`}
          >
            <img
              src={project.images.photos[0]}
              alt=""
              className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Subtle Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-white/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl pointer-events-none">
        <div className="overflow-hidden">
          <h1 className="text-[8vw] md:text-[6vw] leading-[1] font-display font-bold uppercase tracking-tight select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Atelier des Verre & Acier
          </h1>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="h-[1px] w-24 bg-[#333333] opacity-20 animate-in fade-in duration-1000 delay-500"></div>
          <p className="text-[12px] md:text-[14px] uppercase tracking-[1em] opacity-40 font-bold font-display animate-in fade-in zoom-in duration-1000 delay-300 translate-x-[0.5em]">
            Architecture & Maîtrise d'œuvre
          </p>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {carouselProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-[2px] transition-all duration-500 cursor-pointer ${
              index === currentSlide ? 'bg-[#333333] opacity-100' : 'bg-[#333333] opacity-10 hover:opacity-30'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-30 animate-bounce pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.4em] font-display font-bold text-[#333333]">Découvrir</span>
        <div className="w-[1px] h-12 bg-[#333333]"></div>
      </div>
    </section>
  );
}
