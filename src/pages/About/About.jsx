import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import images from '../../assets/images';
import './About.css';

export default function About() {
  return (
    <div className="page-transition">
      <Hero
        image={images.about.studio}
        label="Our Story"
        title="About Us"
        variant="page"
      />

      {/* Main Content */}
      <section className="about__content">
        <div className="about__content-inner">
          <ScrollReveal variant="left">
            <div className="about__portrait">
              <img
                src={images.about.photographer}
                alt="Lucky Photography - Photographer"
                className="about__portrait-image"
              />
              <div className="about__portrait-frame" />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="about__info">
              <p className="about__label">The Photographer</p>
              <h2 className="about__title">
                Crafting visual stories with <em>passion & precision</em>
              </h2>
              <p className="about__text">
                With over a decade of experience in the art of photography, Lucky Photography
                has been dedicated to capturing the most precious moments of life. Founded on
                the belief that every frame should tell a story, we bring an artistic eye and
                technical mastery to every project.
              </p>
              <p className="about__text">
                Our work spans across weddings, pre-wedding shoots, corporate events, portraits,
                and landscape photography. We approach each project with fresh eyes, ensuring that
                every photograph reflects the unique personality and emotion of the moment.
              </p>
              <p className="about__text">
                We don't just take photographs — we create visual legacies. Our commitment
                to excellence has earned us the trust of hundreds of clients who return to us
                for every milestone in their lives.
              </p>
              <Link to="/contact" className="btn btn--outline">
                Work With Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Approach */}
      <section className="about__approach">
        <div className="about__approach-inner">
          <ScrollReveal>
            <h2 className="about__approach-title">Our Approach</h2>
          </ScrollReveal>

          <div className="about__approach-grid">
            <ScrollReveal variant="up" delay={1}>
              <div className="about__approach-item">
                <div className="about__approach-number">01</div>
                <h4 className="about__approach-name">Discover</h4>
                <p className="about__approach-desc">
                  We begin by understanding your vision, style preferences, and the story
                  you want to tell through photographs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={2}>
              <div className="about__approach-item">
                <div className="about__approach-number">02</div>
                <h4 className="about__approach-name">Create</h4>
                <p className="about__approach-desc">
                  On the day of the shoot, we bring our artistic vision to life, capturing
                  candid moments and crafted compositions alike.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={3}>
              <div className="about__approach-item">
                <div className="about__approach-number">03</div>
                <h4 className="about__approach-name">Deliver</h4>
                <p className="about__approach-desc">
                  Each image is carefully curated and edited to perfection, creating a
                  cohesive collection that tells your complete story.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="about__highlights">
        <div className="about__highlights-inner">
          <ScrollReveal variant="up" delay={1}>
            <div className="about__highlight">
              <div className="about__highlight-number">12+</div>
              <div className="about__highlight-label">Years of Experience</div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={2}>
            <div className="about__highlight">
              <div className="about__highlight-number">500+</div>
              <div className="about__highlight-label">Projects Completed</div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={3}>
            <div className="about__highlight">
              <div className="about__highlight-number">50K+</div>
              <div className="about__highlight-label">Photos Delivered</div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={4}>
            <div className="about__highlight">
              <div className="about__highlight-number">15+</div>
              <div className="about__highlight-label">Awards Won</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <ScrollReveal variant="scale">
          <div className="about__cta-inner">
            <h2 className="about__cta-title">
              Ready to tell <em>your story?</em>
            </h2>
            <Link to="/contact" className="btn btn--light">
              Let's Connect
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
