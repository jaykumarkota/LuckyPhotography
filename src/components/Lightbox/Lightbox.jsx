import { useEffect, useCallback } from 'react';
import './Lightbox.css';

export default function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className={`lightbox ${isOpen ? 'lightbox--open' : ''}`}>
      <div className="lightbox__backdrop" onClick={onClose} />

      <button className="lightbox__close" onClick={onClose} aria-label="Close lightbox">
        <svg viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
          <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
        </svg>
      </button>

      <button className="lightbox__nav lightbox__nav--prev" onClick={onPrev} aria-label="Previous image">
        <svg viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="lightbox__content">
        {currentImage && (
          <img
            key={currentImage.id}
            src={currentImage.src}
            alt={currentImage.alt}
            className="lightbox__image"
          />
        )}
      </div>

      <button className="lightbox__nav lightbox__nav--next" onClick={onNext} aria-label="Next image">
        <svg viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="lightbox__counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
