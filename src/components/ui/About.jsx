export function About() {
  const team = [
    { name: "Nicolas Claudet", role: "Architecte DPLG - Gérant", email: "n.claudet@adva-architectes.fr" },
    { name: "Hélène Digol", role: "Collaboratrice d'architecte", email: "h.digol@adva-architectes.fr" },
    { name: "David Monti", role: "Chargé de Projet - Architecte DPLG", email: "d.monti@adva-architectes.fr" }
  ];

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center bg-transparent py-32 px-8 md:px-24 text-[#333333] z-10">
      <div className="max-w-6xl w-full">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="text-3xl opacity-10 font-display font-bold">02</span>
          <h2 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tight">L'Agence</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-3xl md:text-4xl leading-[1.2] font-display font-light text-[#333333]">
                L'Atelier des Verre & Acier explore la dualité entre la <span className="font-bold">rigueur structurelle</span> et la <span className="font-bold">clarté administrative</span>.
              </p>
              <p className="text-lg opacity-60 leading-relaxed font-sans">
                Fondé en 2004 par Nicolas Claudet, l'agence tire son nom des immeubles "Verre et Acier" de Marcel Lods à Rouen. Aujourd'hui basée à Mont-Saint-Aignan, elle accompagne maîtres d'ouvrages publics et privés dans toute la Normandie.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">{member.role}</h4>
                  <p className="text-lg font-display font-bold">{member.name}</p>
                  <a href={`mailto:${member.email}`} className="text-xs opacity-0 group-hover:opacity-40 transition-opacity duration-300 block mt-1 underline decoration-1 underline-offset-4">
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:pl-16">
            <div className="border-l-2 border-[#333333]/10 pl-8 py-2">
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Missions</h4>
              <ul className="text-sm font-bold space-y-2 opacity-80">
                <li>• Conseil & Assistance (AMO)</li>
                <li>• Conception & Démarches Administratives</li>
                <li>• Maîtrise d’œuvre complète</li>
                <li>• Suivi de chantier, Pilotage & Coordination</li>
              </ul>
            </div>
            <div className="border-l-2 border-[#333333]/10 pl-8 py-2">
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Typologie de Projets</h4>
              <p className="text-sm font-bold opacity-80 leading-relaxed">
                Logements collectifs & individuels, Médico-social, Hôtellerie, Tertiaire. Neuf, extension et réhabilitation.
              </p>
            </div>
            <div className="border-l-2 border-[#333333]/10 pl-8 py-2">
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Engagement</h4>
              <p className="text-sm font-bold opacity-80">Rigueur administrative (PC / DCE) et labels NF Habitat & HQE.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
