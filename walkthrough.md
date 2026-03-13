# Lucky Photography — Website Walkthrough

A professional photography portfolio built with **React + Vite + plain CSS** for the brand **Lucky Photography**.

## Pages Built

### Homepage
Full-viewport cinematic hero with "Capturing *Timeless* Moments" tagline, followed by an about intro section, 5 category cards grid, parallax quote, featured masonry gallery, testimonial, and dark CTA section.

![Homepage hero with cinematic wedding photo background](C:/Users/jayku/.gemini/antigravity/brain/09d8cb3a-4b2e-4cef-ba3b-f81644e345f7/homepage_1773338655512.png)

---

### Portfolio / Gallery Page
Category-based filtering (All, Wedding, Pre-Wedding, Events, Portraits, Landscape) with CSS columns masonry layout. Supports URL-based category routes (`/gallery/wedding`, etc.). Lightbox modal with keyboard navigation (Escape, Arrow keys).

![Gallery page with filter tabs and masonry layout](C:/Users/jayku/.gemini/antigravity/brain/09d8cb3a-4b2e-4cef-ba3b-f81644e345f7/gallery_1773338721759.png)

---

### About Page
Photographer portrait with decorative frame accent, bio text, 3-step approach (Discover → Create → Deliver), and achievement highlights (12+ Years, 500+ Projects, 50K+ Photos, 15+ Awards).

![About page with photographer portrait and Our Story section](C:/Users/jayku/.gemini/antigravity/brain/09d8cb3a-4b2e-4cef-ba3b-f81644e345f7/about_1773338733727.png)

---

### Contact Page
Split layout with contact info on the left and styled form on the right. Form fields: Name, Email, Phone, Event Type dropdown, Message textarea. Bottom-border focus animations on inputs.

![Contact page with form fields](C:/Users/jayku/.gemini/antigravity/brain/09d8cb3a-4b2e-4cef-ba3b-f81644e345f7/contact_1773338771124.png)

---

## Key Features Implemented

| Feature | Implementation |
|---|---|
| Navbar scroll transition | Transparent → solid black with backdrop blur |
| Mobile menu | Hamburger → full-screen slide-in drawer |
| Scroll animations | Intersection Observer (fade-up, scale, slide) |
| Masonry gallery | CSS `column-count` (1/2/3 columns responsive) |
| Lightbox | Modal with prev/next + keyboard navigation |
| Parallax sections | `background-attachment: fixed` with dark overlay |
| Category filtering | URL params + state-based filter tabs |
| Contact form | Controlled form with HTML5 validation |
| Responsive | Mobile + tablet + desktop breakpoints |

## Design System

- **Fonts**: Playfair Display (display), Inter (body), Cormorant Garamond (elegant)
- **Palette**: `#0a0a0a` black, `#1a1a1a` dark, `#f5f0eb` cream, `#faf8f5` off-white
- **Animations**: CSS custom transitions with `cubic-bezier` easing

## File Structure

```
src/
├── assets/images.js          — Curated Unsplash URLs by category
├── components/
│   ├── CategoryCard/          — Category navigation cards
│   ├── ContactForm/           — Styled contact form
│   ├── Footer/                — Site footer with social links
│   ├── Gallery/               — Masonry gallery with filters
│   ├── Hero/                  — Full-viewport hero banner
│   ├── Lightbox/              — Image lightbox modal
│   ├── Navbar/                — Transparent → solid navbar
│   ├── ParallaxSection/       — Fixed background quote sections
│   └── ScrollReveal/          — Intersection Observer wrapper
├── pages/
│   ├── About/                 — Photographer bio + approach
│   ├── Contact/               — Contact info + form
│   ├── GalleryPage/           — Category-filtered gallery
│   └── Home/                  — Full homepage with all sections
├── App.jsx                    — React Router setup
├── App.css
├── index.css                  — CSS design system
└── main.jsx                   — Entry point
```

## Site Recording

![Full site walkthrough recording](C:/Users/jayku/.gemini/antigravity/brain/09d8cb3a-4b2e-4cef-ba3b-f81644e345f7/final_site_verification_1773338620199.webp)

## How to Run

```bash
cd "c:\My Program Files\Web Development\FullStackProjects\SamplePhotographySite"
npm run dev
```

Open **http://localhost:5173/** in your browser.
