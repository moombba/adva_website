import { useEffect } from 'react';

/**
 * Hook pour gérer la navigation au clavier globale
 * @param {Object} handlers - Objet avec les handlers pour chaque touche
 * @param {boolean} isActive - Si true, active les handlers
 * 
 * @example
 * useKeyboardNavigation({
 *   Escape: () => closeModal(),
 *   Enter: (e) => { if (e.target.tagName === 'BUTTON') handleClick(); }
 * }, isModalOpen);
 */
export function useKeyboardNavigation(handlers, isActive = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e) => {
      const handler = handlers[e.key];
      if (handler) {
        handler(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlers, isActive]);
}
