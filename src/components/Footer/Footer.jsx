import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__brand-name">
              Lucky <span>Photography</span>
            </h3>
            <p className="footer__brand-desc">
              Capturing timeless moments with an artistic eye. We specialize in
              wedding, portrait, and event photography that tells your unique story.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.35zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" /></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Pinterest">
                <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.15 9.42 7.6 11.18-.1-.94-.2-2.38.04-3.41.22-.93 1.4-5.93 1.4-5.93s-.36-.71-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-1 3.98-.28 1.2.6 2.17 1.78 2.17 2.14 0 3.78-2.25 3.78-5.5 0-2.88-2.07-4.89-5.02-4.89-3.42 0-5.43 2.56-5.43 5.22 0 1.03.4 2.14.9 2.74.1.12.11.22.08.34-.09.38-.3 1.2-.34 1.37-.06.23-.18.28-.42.17-1.56-.73-2.54-3.02-2.54-4.87 0-3.96 2.88-7.6 8.31-7.6 4.36 0 7.74 3.11 7.74 7.27 0 4.34-2.73 7.83-6.53 7.83-1.27 0-2.47-.66-2.88-1.45l-.78 2.98c-.28 1.1-1.05 2.47-1.56 3.31A12 12 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <div className="footer__links">
              <Link to="/" className="footer__link">Home</Link>
              <Link to="/gallery" className="footer__link">Portfolio</Link>
              <Link to="/about" className="footer__link">About</Link>
              <Link to="/contact" className="footer__link">Contact</Link>
            </div>
          </div>

          {/* Categories */}
          <div className="footer__col">
            <h4 className="footer__heading">Categories</h4>
            <div className="footer__links">
              <Link to="/gallery/wedding" className="footer__link">Wedding</Link>
              <Link to="/gallery/prewedding" className="footer__link">Pre-Wedding</Link>
              <Link to="/gallery/events" className="footer__link">Events</Link>
              <Link to="/gallery/portraits" className="footer__link">Portraits</Link>
              <Link to="/gallery/landscape" className="footer__link">Landscape</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Get in Touch</h4>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="footer__contact-text">123 Studio Lane, Creative District<br />Hyderabad, TS, India 500059</span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="footer__contact-text"><a href="tel:+919876543210">+91 987 654 3210</a></span>
            </div>
            <div className="footer__contact-item">
              <svg className="footer__contact-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="footer__contact-text"><a href="mailto:hello@luckyphotography.com">hello@luckyphotography.com</a></span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Lucky Photography. All rights reserved.
          </p>
          <p className="footer__credits">
            Crafted with passion for visual storytelling
          </p>
        </div>
      </div>
    </footer>
  );
}
