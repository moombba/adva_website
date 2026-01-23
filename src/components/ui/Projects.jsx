import { useState, useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import { ProjectModal } from './ProjectModal';
import { useStore } from '../../store/useStore';

function ProjectImage({ src, alt }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if the element is visible in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate the percentage of the element's position relative to the viewport
        // 0 when the top of the element is at the bottom of the viewport
        // 1 when the bottom of the element is at the top of the viewport
        const distance = windowHeight + rect.height;
        const progress = (windowHeight - rect.top) / distance;
        
        // Apply parallax: move image from -10% to 10% of its height
        const movement = (progress - 0.5) * 20; // range -10 to 10
        imageRef.current.style.transform = `scale(1.1) translateY(${movement}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden mb-8 aspect-video bg-[#333333]/5 relative group-hover:bg-[#333333]/10 transition-colors duration-700">
      <img 
        ref={imageRef}
        src={src} 
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-[120%] absolute top-[-10%] left-0 object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold italic translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Voir les détails</span>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const selectedProject = useStore((state) => state.selectedProject);
  const setSelectedProject = useStore((state) => state.setSelectedProject);
  
  const categories = [
    "Tous",
    "Logements Collectifs",
    "Logements Individuels",
    "Médico-Social",
    "Hôtellerie / Tertiaire"
  ];

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleProjectKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section 
      id="work" 
      role="region" 
      aria-label="Portfolio des projets"
      className="relative min-h-screen bg-transparent py-24 md:py-32 px-8 md:px-24 text-[#333333] z-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
        <div className="flex items-baseline gap-4">
          <span className="text-3xl opacity-10 font-display font-bold">01</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight">Portfolio</h2>
        </div>
        <div 
          className="flex flex-wrap gap-2 md:gap-8 text-xs md:text-[10px] uppercase tracking-widest font-bold opacity-40 overflow-x-auto md:overflow-visible"
          role="tablist"
          aria-label="Filtres de catégories"
        >
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls="projects-grid"
              className={`hover:opacity-100 transition-opacity cursor-pointer underline-offset-8 decoration-2 focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 ${activeCategory === cat ? 'opacity-100 underline' : 'opacity-40'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div 
        id="projects-grid"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-32"
        role="grid"
        aria-label="Grille des projets"
      >
        {filteredProjects.map((p) => (
          <article
            key={p.id} 
            onClick={() => setSelectedProject(p)}
            onKeyDown={(e) => handleProjectKeyDown(e, p)}
            tabIndex={0}
            role="gridcell"
            aria-label={`Projet ${p.title} - ${p.category} - ${p.city}`}
            className="group cursor-pointer border-b border-[#333333]/10 pb-16 hover:border-[#333333]/30 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 min-h-[200px]"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-bold opacity-30 tracking-[0.3em]">REF_ADVA_{String(p.id).padStart(2, '0')}</span>
              <span className="text-[10px] font-bold px-3 py-1 border border-[#333333]/10 rounded-full opacity-40">{p.status}</span>
            </div>
            
            <ProjectImage src={p.images.photos[0]} alt={`${p.title} - ${p.city}`} />

            <h3 className="text-4xl md:text-5xl font-display font-bold group-hover:translate-x-4 transition-transform duration-700 ease-out mb-6">{p.title}</h3>
            
            <p className="text-sm opacity-50 mb-8 max-w-md font-sans leading-relaxed group-hover:opacity-80 transition-opacity duration-700 line-clamp-2">
              {p.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-40">{p.category}</p>
              <span className="w-8 h-[1px] bg-[#333333] opacity-10 hidden sm:block" aria-hidden="true"></span>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-40">{p.city}</p>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-24 text-center opacity-30 italic font-display" role="status" aria-live="polite">
          Aucun projet dans cette catégorie pour le moment.
        </div>
      )}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
