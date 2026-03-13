import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="contact-form__input"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span className="contact-form__line" />
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact-form__input"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="contact-form__line" />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="contact-form__input"
            placeholder="+91 xxx xxx xxxx"
            value={formData.phone}
            onChange={handleChange}
          />
          <span className="contact-form__line" />
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="eventType">Event Type</label>
          <select
            id="eventType"
            name="eventType"
            className="contact-form__select"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="prewedding">Pre-Wedding Shoot</option>
            <option value="portrait">Portrait Session</option>
            <option value="event">Event Coverage</option>
            <option value="corporate">Corporate Event</option>
            <option value="other">Other</option>
          </select>
          <span className="contact-form__line" />
        </div>
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          className="contact-form__textarea"
          placeholder="Tell us about your vision..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <span className="contact-form__line" />
      </div>

      <div className="contact-form__submit">
        <button type="submit" className="btn btn--primary">
          Send Message
        </button>
      </div>
    </form>
  );
}
