import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import Lightbox from '../../components/Lightbox/Lightbox';
import Footer from '../../components/Footer/Footer';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import images from '../../assets/images';
import './GalleryPage.css';

export default function GalleryPage() {
  const { category } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = useMemo(() => {
    const all = [];
    Object.entries(images.gallery).forEach(([cat, imgs]) => {
      imgs.forEach((img) => all.push({ ...img, category: cat }));
    });
    return all;
  }, []);

  const displayImages = useMemo(() => {
    if (category && images.gallery[category]) {
      return images.gallery[category].map((img) => ({ ...img, category }));
    }
    return allImages;
  }, [category, allImages]);

  const handleImageClick = (img, index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const categoryLabel = category
    ? images.categories[category]?.label || category
    : 'Portfolio';

  const heroImage = category && images.categories[category]
    ? images.categories[category].cover
    : images.hero.secondary;

  return (
    <div className="gallery-page page-transition">
      <Hero
        image={heroImage}
        label="Our Work"
        title={categoryLabel}
        variant="page"
      />

      <ScrollReveal>
        <div className="gallery-page__header">
          <p className="gallery-page__subtitle">
            {category
              ? `Explore our ${categoryLabel.toLowerCase()} photography collection`
              : 'A curated selection of our finest work across all categories'}
          </p>
        </div>
      </ScrollReveal>

      <Gallery
        images={displayImages}
        showFilters={!category}
        onImageClick={handleImageClick}
      />

      <Footer />

      <Lightbox
        images={displayImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % displayImages.length)}
      />
    </div>
  );
}
