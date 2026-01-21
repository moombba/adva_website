export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-transparent py-32 px-8 md:px-24 text-[#333333] z-10">
      <div className="max-w-5xl">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="text-3xl opacity-10 font-display font-bold">02</span>
          <h2 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tight">L'Agence</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-3xl md:text-4xl leading-[1.2] font-display font-light text-[#333333]">
              L'Atelier des Verre & Acier explore la dualité entre la <span className="font-bold">rigueur structurelle</span> et la <span className="font-bold">clarté administrative</span>.
            </p>
            <p className="text-lg opacity-60 leading-relaxed font-sans">
              Sous la direction de Nicolas Claudet (Architecte DPLG), l'agence s'impose comme un partenaire technique et polyvalent, accompagnant ses clients de la faisabilité à la livraison complète.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:pl-16">
            <div className="border-l-2 border-[#333333]/10 pl-8 py-2">
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Expertise</h4>
              <p className="text-sm font-bold">Maîtrise d’œuvre complète & structures innovantes.</p>
            </div>
            <div className="border-l-2 border-[#333333]/10 pl-8 py-2">
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Rigueur</h4>
              <p className="text-sm font-bold">PC / DCE et suivi administratif millimétré.</p>
            </div>
            <div className="border-l-2 border-[#333333]/10 pl-8 py-2">
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Labels</h4>
              <p className="text-sm font-bold">Engagement NF Habitat & HQE.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
