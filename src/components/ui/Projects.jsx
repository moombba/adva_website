import { useState } from 'react';
import { projects } from '../../data/projects';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  
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

  return (
    <section id="work" className="relative min-h-screen bg-transparent py-32 px-8 md:px-24 text-[#333333] z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
        <div className="flex items-baseline gap-4">
          <span className="text-3xl opacity-10 font-display font-bold">01</span>
          <h2 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tight">Portfolio</h2>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8 text-[10px] uppercase tracking-widest font-bold opacity-40">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`hover:opacity-100 transition-opacity cursor-pointer underline-offset-8 decoration-2 ${activeCategory === cat ? 'opacity-100 underline' : 'opacity-40'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
        {filteredProjects.map((p, i) => (
          <div key={p.id} className="group cursor-pointer border-b border-[#333333]/10 pb-16 hover:border-[#333333]/30 transition-all duration-500">
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-bold opacity-30 tracking-[0.3em]">REF_ADVA_{String(p.id).padStart(2, '0')}</span>
              <span className="text-[10px] font-bold px-3 py-1 border border-[#333333]/10 rounded-full opacity-40">{p.status}</span>
            </div>
            
            <div className="overflow-hidden mb-8 aspect-video bg-[#333333]/5 relative group-hover:bg-[#333333]/10 transition-colors duration-700">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold italic">Visualisation technique</span>
              </div>
            </div>

            <h3 className="text-4xl md:text-5xl font-display font-bold group-hover:translate-x-4 transition-transform duration-700 ease-out mb-6">{p.title}</h3>
            
            <p className="text-sm opacity-50 mb-8 max-w-md font-sans leading-relaxed group-hover:opacity-80 transition-opacity duration-700">
              {p.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-40">{p.category}</p>
              <span className="w-8 h-[1px] bg-[#333333] opacity-10 hidden sm:block"></span>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-40">{p.city}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-24 text-center opacity-30 italic font-display">
          Aucun projet dans cette catégorie pour le moment.
        </div>
      )}
    </section>
  );
}
