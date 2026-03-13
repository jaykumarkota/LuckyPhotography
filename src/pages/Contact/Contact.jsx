import Hero from '../../components/Hero/Hero';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import images from '../../assets/images';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page-transition">
      <Hero
        image={images.parallax.contact}
        label="Get in Touch"
        title="Contact Us"
        variant="page"
      />

      <section className="contact__content">
        <div className="contact__content-inner">
          <ScrollReveal variant="left">
            <div className="contact__info">
              <p className="contact__info-label">Let's Connect</p>
              <h2 className="contact__info-title">
                We'd love to hear <em>your story</em>
              </h2>
              <p className="contact__info-text">
                Whether you're planning a wedding, looking for a portrait session,
                or need event coverage — we're here to bring your vision to life.
                Reach out and let's create something extraordinary together.
              </p>

              <div className="contact__details">
                <div className="contact__detail-item">
                  <svg className="contact__detail-icon" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="contact__detail-label">Studio Address</p>
                    <p className="contact__detail-value">
                      123 Studio Lane, Creative District<br />
                      Hyderabad, TS, India 500059
                    </p>
                  </div>
                </div>

                <div className="contact__detail-item">
                  <svg className="contact__detail-icon" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="contact__detail-label">Phone</p>
                    <p className="contact__detail-value">
                      <a href="tel:+919876543210">+91 987 654 3210</a>
                    </p>
                  </div>
                </div>

                <div className="contact__detail-item">
                  <svg className="contact__detail-icon" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="contact__detail-label">Email</p>
                    <p className="contact__detail-value">
                      <a href="mailto:hello@luckyphotography.com">hello@luckyphotography.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact__detail-item">
                  <svg className="contact__detail-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="contact__detail-label">Working Hours</p>
                    <p className="contact__detail-value">
                      Mon – Sat: 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact__social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="YouTube">
                  <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.35zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" /></svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="contact__form-wrapper">
              <h3 className="contact__form-title">Send us a message</h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
