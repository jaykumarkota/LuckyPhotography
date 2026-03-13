import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Gallery from '../../components/Gallery/Gallery';
import Lightbox from '../../components/Lightbox/Lightbox';
import ParallaxSection from '../../components/ParallaxSection/ParallaxSection';
import Footer from '../../components/Footer/Footer';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import images from '../../assets/images';
import './Home.css';

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (img, index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const categoryEntries = Object.entries(images.categories);
  const categoryCounts = {
    wedding: images.gallery.wedding.length,
    prewedding: images.gallery.prewedding.length,
    events: images.gallery.events.length,
    portraits: images.gallery.portraits.length,
    landscape: images.gallery.landscape.length,
  };

  return (
    <div className="page-transition">
      <Hero
        image={images.hero.main}
        slides={images.hero.slides}
        label="Professional Photography Studio"
        title="Capturing <em>Timeless</em> Moments"
        subtitle="Where every frame tells a story worth remembering"
        ctaText="View Portfolio"
        ctaLink="/gallery"
        showScroll
      />

      {/* Introduction Section */}
      <section className="home__intro">
        <div className="home__intro-inner">
          <ScrollReveal variant="left">
            <div className="home__intro-image-wrapper">
              <img
                src={images.about.photographer}
                alt="Lucky Photography Studio"
                className="home__intro-image"
              />
              <div className="home__intro-image-accent" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="home__intro-content">
              <p className="home__intro-label">About the Artist</p>
              <h2 className="home__intro-title">
                Stories told through <em>light & emotion</em>
              </h2>
              <p className="home__intro-text">
                At Lucky Photography, we believe every moment holds a story waiting to be
                told. With a keen eye for detail and an artistic approach to composition,
                we transform fleeting moments into timeless visual narratives that you'll
                treasure for generations.
              </p>
              <Link to="/about" className="btn btn--outline">
                Learn More
              </Link>

              <div className="home__intro-stats">
                <div className="home__stat">
                  <div className="home__stat-number">12+</div>
                  <div className="home__stat-label">Years Experience</div>
                </div>
                <div className="home__stat">
                  <div className="home__stat-number">500+</div>
                  <div className="home__stat-label">Projects Done</div>
                </div>
                <div className="home__stat">
                  <div className="home__stat-number">350+</div>
                  <div className="home__stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Section */}
      <section className="home__categories">
        <div className="home__categories-header">
          <ScrollReveal>
            <h2 className="home__categories-title">Our Expertise</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link to="/gallery" className="home__categories-link">
              View All Work →
            </Link>
          </ScrollReveal>
        </div>
        <div className="category-grid">
          {categoryEntries.map(([key, cat], index) => (
            <ScrollReveal key={key} variant="up" delay={Math.min(index + 1, 5)}>
              <CategoryCard
                category={key}
                image={cat.cover}
                label={cat.label}
                count={categoryCounts[key]}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection
        image={images.parallax.quote1}
        quote="Photography is the story I fail to put into words"
        author="Destin Sparks"
      />

      {/* Featured Work */}
      <section className="home__featured">
        <ScrollReveal>
          <div className="home__featured-header">
            <p className="home__featured-label">Selected Work</p>
            <h2 className="home__featured-title">Featured Gallery</h2>
          </div>
        </ScrollReveal>

        <Gallery
          images={images.featured}
          onImageClick={handleImageClick}
        />
      </section>

      {/* Testimonial */}
      <section className="home__testimonial">
        <ScrollReveal variant="fade">
          <div className="home__testimonial-inner">
            <p className="home__testimonial-quote">
              "Lucky Photography captured our wedding day in the most magical way.
              Every photo tells a beautiful story, and we couldn't be happier with
              the results. Truly an artist behind the lens."
            </p>
            <p className="home__testimonial-author">— Priya & Arjun, Wedding 2024</p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="home__cta">
        <ScrollReveal variant="scale">
          <div className="home__cta-inner">
            <h2 className="home__cta-title">
              Let's create something <em>beautiful</em>
            </h2>
            <p className="home__cta-text">
              Ready to capture your special moments? We'd love to hear your story.
            </p>
            <Link to="/contact" className="btn btn--light">
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />

      <Lightbox
        images={images.featured}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + images.featured.length) % images.featured.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % images.featured.length)}
      />
    </div>
  );
}
