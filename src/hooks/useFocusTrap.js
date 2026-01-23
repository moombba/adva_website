import { useEffect, useRef } from 'react';

/**
 * Hook pour capturer le focus dans un élément (focus trap)
 * Utile pour les modals et les dialogues
 * @param {boolean} isActive - Si true, active le focus trap
 * @param {React.RefObject} containerRef - Référence au conteneur qui doit capturer le focus
 */
export function useFocusTrap(isActive, containerRef) {
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    // Sauvegarder la référence du conteneur pour le cleanup
    const container = containerRef.current;

    // Sauvegarder l'élément qui avait le focus avant l'ouverture
    previousActiveElement.current = document.activeElement;

    // Trouver tous les éléments focusables dans le conteneur
    const getFocusableElements = (element) => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');

      return Array.from(element.querySelectorAll(focusableSelectors)).filter(
        (el) => {
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden';
        }
      );
    };

    const focusableElements = getFocusableElements(container);

    if (focusableElements.length === 0) return;

    // Focuser le premier élément focusable
    const firstElement = focusableElements[0];
    firstElement.focus();

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      // Si Shift+Tab sur le premier élément, aller au dernier
      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
        return;
      }

      // Si Tab sur le dernier élément, aller au premier
      if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
        return;
      }
    };

    container.addEventListener('keydown', handleTabKey);

    return () => {
      container.removeEventListener('keydown', handleTabKey);
      // Restaurer le focus à l'élément précédent
      if (previousActiveElement.current && previousActiveElement.current.focus) {
        previousActiveElement.current.focus();
      }
    };
  }, [isActive, containerRef]);
}
