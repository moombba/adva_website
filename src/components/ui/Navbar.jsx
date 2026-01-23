import { useState } from 'react';
import { useStore } from '../../store/useStore';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    
    // Fermer le menu mobile s'il est ouvert
    setIsMenuOpen(false);
    
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <nav 
      role="navigation" 
      aria-label="Navigation principale"
      className="fixed top-0 left-0 w-full p-4 md:p-10 safe-top flex justify-between items-center z-50 text-[#333333] text-xs md:text-[11px] font-bold uppercase tracking-[0.3em] font-display bg-white/80 backdrop-blur-sm md:bg-transparent"
    >
      <div 
        onClick={handleLogoClick}
        onKeyDown={handleLogoKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Retour au portfolio"
        className="text-2xl tracking-tighter normal-case hover:scale-105 transition-transform cursor-pointer font-bold focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 min-h-[44px] flex items-center"
      >
        ADVA
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <a 
          href="#work" 
          onClick={(e) => handleNavClick(e, 'work')}
          className="hover:text-black transition-colors relative group focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 min-h-[44px] flex items-center"
        >
          Projets
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full" aria-hidden="true"></span>
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')}
          className="hover:text-black transition-colors relative group focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 min-h-[44px] flex items-center"
        >
          L'Agence
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full" aria-hidden="true"></span>
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hover:text-black transition-colors relative group focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 min-h-[44px] flex items-center"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#333333] transition-all group-hover:w-full" aria-hidden="true"></span>
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        onKeyDown={handleMenuKeyDown}
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isMenuOpen}
        className="md:hidden min-h-[44px] min-w-[44px] flex flex-col justify-center items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2"
      >
        <span 
          className={`w-6 h-[2px] bg-[#333333] transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
          aria-hidden="true"
        ></span>
        <span 
          className={`w-6 h-[2px] bg-[#333333] transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
          aria-hidden="true"
        ></span>
        <span 
          className={`w-6 h-[2px] bg-[#333333] transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
          aria-hidden="true"
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-white/98 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="menu"
        aria-label="Menu de navigation mobile"
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <a 
            href="#work" 
            onClick={(e) => handleNavClick(e, 'work')}
            className="py-4 border-b border-[#333333]/10 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 min-h-[44px] flex items-center"
            role="menuitem"
          >
            Projets
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="py-4 border-b border-[#333333]/10 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 min-h-[44px] flex items-center"
            role="menuitem"
          >
            L'Agence
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="py-4 border-b border-[#333333]/10 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 min-h-[44px] flex items-center"
            role="menuitem"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
