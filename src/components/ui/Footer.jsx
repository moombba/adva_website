export function Footer() {
  return (
    <footer id="contact" className="py-24 px-8 md:px-24 border-t border-[#333333]/5 mt-32 text-[#333333]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-8">Nous trouver</h4>
            <p className="text-xl font-display font-bold leading-tight">
              15 Parc de la Risle<br />
              76130 Mont-Saint-Aignan
            </p>
            <p className="text-sm opacity-50 mt-4 font-sans leading-relaxed">
              Accès par la rue Marc Sangnier.
            </p>
            
            <div className="mt-12 space-y-4">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Téléphone</h4>
                <p className="text-lg font-display font-bold">02 35 61 27 10</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Email</h4>
                <p className="text-lg font-display font-bold">n.claudet@adva-architectes.fr</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-8">Réseaux</h4>
            <div className="flex flex-col gap-4 text-base md:text-sm font-bold font-display">
              <a href="https://www.linkedin.com/in/adva-atelier-des-verre-et-acier-architectes-897910260/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity flex items-center gap-2 min-h-[44px] py-2">
                LinkedIn <span className="text-[10px] opacity-30">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-[250px] md:h-[400px] bg-[#333333]/5 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative border border-[#333333]/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.515865672283!2d1.0827!3d49.4673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0df949d012111%3A0xc687f84693a0279c!2s15%20Parc%20de%20la%20Risle%2C%2076130%20Mont-Saint-Aignan!5e0!3m2!1sfr!2sfr!4v1705850000000!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation ADVA"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 hidden lg:block"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 opacity-20 text-[10px] uppercase tracking-[0.4em] font-bold font-display pt-16 border-t border-[#333333]/5">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span>© 2026 ADVA - Atelier des Verre & Acier</span>
          <span className="text-[8px] tracking-[0.2em] normal-case font-sans">Nicolas Claudet, Architecte DPLG</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
          <span>Crédibilité & Solidité Constructive</span>
          <a href="#hero" className="hover:opacity-100 transition-opacity min-h-[44px] flex items-center">Retour en haut ↑</a>
        </div>
      </div>
    </footer>
  );
}
