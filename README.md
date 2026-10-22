# Lucky Photography

A sample photography portfolio website built to showcase freelance web development work. The site presents a fictional photography studio with a polished, responsive layout, category-based galleries, and contact details.

> **Private project:** Designed and developed by me for my freelance portfolio. All rights reserved. Do not copy, reuse, modify, or distribute this code without my prior permission.

## Features

- Responsive home, gallery, about, and contact pages
- Portfolio categories for weddings, pre-weddings, events, portraits, and landscapes
- Category-specific gallery pages with URL-based navigation
- Masonry-style image gallery with a lightbox and keyboard navigation
- Scroll reveal effects and parallax image sections
- Mobile navigation menu
- Contact form with required-field validation and a demo confirmation

> **Demo note:** The contact form currently displays a confirmation in the browser; it does not send or store submissions. Connect it to a backend or form service before using the site for real client inquiries.

## Tech stack

- React 19
- React Router
- Vite
- CSS

## Getting started

### Requirements

- Node.js (a current version compatible with the installed Vite release)
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Pages and routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/gallery` | Full portfolio |
| `/gallery/:category` | Gallery filtered by category, such as `/gallery/wedding` |
| `/about` | Photographer profile and approach |
| `/contact` | Contact information and inquiry form |

## Project structure

```text
src/
├── assets/
│   └── images.js             # Gallery and hero image data
├── components/               # Reusable navigation, gallery, form, and UI components
├── pages/                    # Home, gallery, about, and contact pages
├── App.jsx                   # Application routes
├── App.css
├── index.css                 # Global styles
└── main.jsx                  # Application entry point
```

## Ownership and project inquiries

This website is a demonstration of my web development work. Interested in a website for your business or personal project? Contact me to discuss your project and freelance availability.

The gallery uses sample images hosted by Unsplash and requires an internet connection.
