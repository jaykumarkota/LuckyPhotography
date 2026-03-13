import { useEffect, useRef } from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './ParallaxSection.css';

export default function ParallaxSection({ image, quote, author }) {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    const content = contentRef.current;
    if (!section || !img) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;

      // Only animate when section is in view
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Reduce parallax intensity on mobile for performance
        const imgMultiplier = isMobile ? 100 : 200;
        const textMultiplier = isMobile ? -40 : -80;
        const imgTranslateY = (scrollProgress - 0.5) * imgMultiplier;
        img.style.transform = `translate3d(0, ${imgTranslateY}px, 0)`;
        // Text moves in opposite direction at a slower rate for visible separation
        if (content) {
          const textTranslateY = (scrollProgress - 0.5) * textMultiplier;
          content.style.transform = `translate3d(0, ${textTranslateY}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-section" ref={sectionRef}>
      <div className="parallax-section__bg">
        <img
          ref={imgRef}
          src={image}
          alt=""
          className="parallax-section__bg-image"
        />
      </div>
      <div className="parallax-section__overlay" />
      <div className="parallax-section__content" ref={contentRef}>
        <ScrollReveal variant="fade">
          <blockquote className="parallax-section__quote">
            &ldquo;{quote}&rdquo;
          </blockquote>
          {author && <cite className="parallax-section__author">&mdash; {author}</cite>}
        </ScrollReveal>
      </div>
    </section>
  );
}
