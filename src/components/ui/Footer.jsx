export function Footer() {
  return (
    <footer id="contact" className="py-24 px-8 md:px-24 border-t border-[#333333]/5 mt-32 text-[#333333]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-8">Contact</h4>
          <p className="text-lg font-display font-bold">Mont-Saint-Aignan (76)</p>
          <p className="text-sm opacity-60 mt-2 font-sans">Normandie, France</p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-8">Réseaux</h4>
          <div className="flex gap-8 text-sm font-bold font-display">
            <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-8">Agence</h4>
          <p className="text-sm font-bold opacity-60 font-sans">
            Atelier des Verre & Acier<br />
            Nicolas Claudet, Architecte DPLG
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-20 text-[10px] uppercase tracking-[0.4em] font-bold font-display pt-16 border-t border-[#333333]/5">
        <span>© 2026 ADVA - Atelier des Verre & Acier</span>
        <span>Crédibilité & Solidité Constructive</span>
      </div>
    </footer>
  );
}
