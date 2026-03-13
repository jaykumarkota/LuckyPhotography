import { useState } from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './Gallery.css';

export default function Gallery({ images, showFilters = false, onImageClick, categories }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const allCategories = categories || [
    { key: 'all', label: 'All' },
    { key: 'wedding', label: 'Wedding' },
    { key: 'prewedding', label: 'Pre-Wedding' },
    { key: 'events', label: 'Events' },
    { key: 'portraits', label: 'Portraits' },
    { key: 'landscape', label: 'Landscape' },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter((img) => img.category === activeFilter);

  return (
    <div className="gallery">
      {showFilters && (
        <div className="gallery__filters">
          {allCategories.map((cat) => (
            <button
              key={cat.key}
              className={`gallery__filter-btn ${activeFilter === cat.key ? 'gallery__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div className="gallery__masonry">
        {filteredImages.map((img, index) => (
          <ScrollReveal key={img.id} variant="up" delay={Math.min((index % 3) + 1, 3)}>
            <div
              className="gallery__item"
              onClick={() => onImageClick && onImageClick(img, filteredImages.indexOf(img))}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery__item-image"
                loading="lazy"
              />
              <div className="gallery__item-overlay">
                <div className="gallery__item-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="gallery__empty">
          <h3>No images found</h3>
          <p>Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
}
