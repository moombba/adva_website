import { useStore } from '../../store/useStore';

export function Navbar() {
  const closeModal = useStore((state) => state.closeModal);

  const handleLogoClick = () => {
    const portfolioSection = document.getElementById('work');
    if (!portfolioSection) return;

    // Fermer le modal s'il est ouvert
    closeModal();

    // Vérifier si la section portfolio est déjà visible dans le viewport
    const rect = portfolioSection.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.5;

    // Si on n'est pas déjà dans la section portfolio, scroller vers elle
    if (!isVisible) {
      // Petit délai pour laisser le modal se fermer
      setTimeout(() => {
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Fermer le modal s'il est ouvert
    closeModal();
    
    // Scroller vers la section cible après un court délai
    setTimeout(() => {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleLogoKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLogoClick();
    }
  };

  return (
    <nav 
      role="navigation" 
      aria-label="Navigation principale"
      className="fixed top-0 left-0 w-full p-10 flex justify-between items-center z-50 text-[#333333] text-[11px] font-bold uppercase tracking-[0.3em] font-display"
    >
      <div 
        onClick={handleLogoClick}
        onKeyDown={handleLogoKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Retour au portfolio"
        className="text-2xl tracking-tighter normal-case hover:scale-105 transition-transform cursor-pointer font-bold focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2"
      >
        ADVA
      </div>
      <div className="flex gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <a 
          href="#work" 
          onClick={(e) => handleNavClick(e, 'work')}
          className="hover:text-black transition-colors relative group focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2"
        >
          Projets
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full" aria-hidden="true"></span>
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')}
          className="hover:text-black transition-colors relative group focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2"
        >
          L'Agence
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full" aria-hidden="true"></span>
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hover:text-black transition-colors relative group focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full" aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  );
}
