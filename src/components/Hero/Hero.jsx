import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero({
  image,
  slides,
  title,
  subtitle,
  label,
  ctaText,
  ctaLink,
  showScroll = false,
  variant = 'full',
  slideInterval = 5000,
}) {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);
  const isSlider = slides && slides.length > 1;

  // Preload all slide images
  useEffect(() => {
    if (isSlider) {
      let loadedCount = 0;
      slides.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === slides.length) setLoaded(true);
        };
      });
    } else if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => setLoaded(true);
    }
  }, [image, slides, isSlider]);

  // Advance to next slide
  const goToNext = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    const next = (currentSlide + 1) % slides.length;
    setPrevSlide(currentSlide);
    setCurrentSlide(next);

    setTimeout(() => {
      setPrevSlide(null);
      setTransitioning(false);
    }, 1500); // matches CSS fade duration
  }, [currentSlide, slides, transitioning]);

  // Auto-advance timer — always running, no pause
  useEffect(() => {
    if (!isSlider || !loaded) return;
    timerRef.current = setInterval(goToNext, slideInterval);
    return () => clearInterval(timerRef.current);
  }, [isSlider, loaded, goToNext, slideInterval]);

  return (
    <section className={`hero hero--${variant} ${loaded ? 'hero--loaded' : ''}`}>
      <div className="hero__background">
        {isSlider ? (
          <>
            {slides.map((src, i) => (
              <div
                key={i}
                className={`hero__slide ${
                  i === currentSlide ? 'hero__slide--active' : ''
                } ${i === prevSlide ? 'hero__slide--exiting' : ''}`}
                aria-hidden={i !== currentSlide}
              >
                <img
                  src={src}
                  alt={`Hero background ${i + 1}`}
                  className="hero__slide-img"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </>
        ) : (
          <img
            src={image}
            alt="Hero background"
            className="hero__image"
            loading="eager"
          />
        )}
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        {label && <p className="hero__label">{label}</p>}
        <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          <div className="hero__cta">
            <Link to={ctaLink} className="btn btn--light">
              {ctaText}
            </Link>
          </div>
        )}
      </div>

      {showScroll && (
        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">Scroll</span>
          <span className="hero__scroll-line" />
        </div>
      )}
    </section>
  );
}
