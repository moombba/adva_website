import { useEffect } from 'react';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-12 animate-in fade-in duration-500">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-white/98 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto bg-white shadow-[0_0_100px_rgba(0,0,0,0.1)] flex flex-col md:flex-row text-[#333333] font-sans animate-in zoom-in-95 slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed md:absolute top-8 right-8 z-[110] text-[10px] uppercase tracking-widest font-bold bg-white/80 backdrop-blur-sm md:bg-transparent p-4 md:p-0 opacity-40 hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-2"
        >
          Fermer <span>✕</span>
        </button>

        {/* Sidebar (Identity) */}
        <aside className="w-full md:w-80 p-8 md:p-12 bg-[#333333]/[0.02] border-r border-[#333333]/5 flex flex-col justify-between order-2 md:order-1">
          <div>
            <span className="text-[10px] font-bold opacity-30 tracking-[0.3em] block mb-12 uppercase">Identité Constructive</span>
            
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700 delay-300 fill-mode-both">
              <div className="pt-4">
                <p className="text-2xl font-display font-bold leading-tight opacity-10">ADVA</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-20 mt-2">Atelier des Verre & Acier</p>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-[#333333]/10 hidden md:block">
            <span className="text-[9px] font-bold opacity-30 tracking-[0.2em] block mb-4 italic">ADVA_Architectes_2026</span>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 order-1 md:order-2">
          {/* Hero Image (Transition Link) with Technical Data Overlay */}
          <div className="aspect-video w-full overflow-hidden bg-[#333333]/5 relative group">
            <img 
              src={project.images.photos[0]} 
              alt={project.title} 
              className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000 fill-mode-both"
            />
            
            {/* Technical Data Overlay on Photo */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent pt-20 pb-8 px-8 md:px-12 text-white animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="space-y-1">
                  <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-50">Maître d’ouvrage</h4>
                  <p className="text-sm font-bold tracking-tight uppercase">{project.technical.maitreOuvrage}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-50">Mission</h4>
                  <p className="text-sm font-bold tracking-tight uppercase">{project.technical.mission}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-50">Surface</h4>
                  <p className="text-sm font-bold tracking-tight uppercase">{project.technical.surface}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-50">Budget</h4>
                  <p className="text-sm font-bold tracking-tight uppercase">{project.technical.budget}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-16 lg:p-24">
            {/* Header */}
            <header className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold px-3 py-1 border border-[#333333]/20 rounded-full opacity-60">
                  {project.status}
                </span>
                <span className="text-[10px] font-bold opacity-40 tracking-widest uppercase">
                  {project.category}
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight leading-[0.9]">
                {project.title}
              </h2>
              <p className="text-xl md:text-2xl mt-6 opacity-40 font-display italic">
                {project.city}
              </p>
            </header>

            {/* Storytelling */}
            <section className="mb-32 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400 fill-mode-both">
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-8">Note d'intention</h4>
              <p className="text-xl md:text-2xl leading-relaxed font-sans text-[#333333] opacity-80 font-light">
                {project.description}
              </p>
            </section>

            {/* Galerie */}
            <section className="space-y-24">
              {project.images.photos.length > 1 && (
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-12">Photographies complémentaires</h4>
                  <div className="grid grid-cols-1 gap-12">
                    {project.images.photos.slice(1).map((img, i) => (
                      <div key={i} className="aspect-video bg-[#333333]/5 overflow-hidden group">
                        <img 
                          src={img} 
                          alt={`${project.title} - Photo ${i + 2}`} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-12">Plans & Coupes techniques</h4>
                <div className="grid grid-cols-1 gap-12">
                  {project.images.plans.map((img, i) => (
                    <div key={i} className="bg-[#333333]/[0.02] p-8 md:p-16 overflow-hidden group border border-[#333333]/5">
                      <img 
                        src={img} 
                        alt={`${project.title} - Plan ${i + 1}`} 
                        className="w-full h-auto object-contain mix-blend-multiply opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer Modal */}
            <footer className="mt-48 pt-16 border-t border-[#333333]/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Fin de fiche technique</p>
              <button 
                onClick={onClose}
                className="px-10 py-4 border border-[#333333]/20 hover:bg-[#333333] hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              >
                Retour au portfolio
              </button>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
