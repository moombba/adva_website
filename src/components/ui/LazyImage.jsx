import { useState } from 'react';

/**
 * Composant d'image optimisé avec lazy loading et gestion d'erreur
 * @param {string} src - URL de l'image
 * @param {string} alt - Texte alternatif (obligatoire pour l'accessibilité)
 * @param {string} className - Classes CSS supplémentaires
 * @param {number} width - Largeur de l'image (optionnel, pour éviter le layout shift)
 * @param {number} height - Hauteur de l'image (optionnel, pour éviter le layout shift)
 * @param {boolean} eager - Si true, charge l'image immédiatement (pas de lazy loading)
 * @param {function} onError - Callback en cas d'erreur de chargement
 */
export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  eager = false,
  onError 
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setHasError(true);
    if (onError) {
      onError();
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Fallback en cas d'erreur
  if (hasError) {
    return (
      <div 
        className={`bg-[#333333]/5 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt || 'Image non disponible'}
      >
        <span className="text-xs opacity-30 text-center p-4">Image non disponible</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      onError={handleError}
      onLoad={handleLoad}
      decoding="async"
    />
  );
}
