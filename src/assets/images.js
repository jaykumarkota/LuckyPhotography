/* ========================================
   LUCKY PHOTOGRAPHY — Image Assets
   Curated high-quality Unsplash photos
   ======================================== */

const images = {
  hero: {
    main: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&q=85',
    secondary: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85',
    slides: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&q=85',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=900&q=80',
    ],
  },

  about: {
    photographer: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww',
    studio: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&q=80',
  },

  categories: {
    wedding: {
      cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      label: 'Wedding',
    },
    prewedding: {
      cover: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80',
      label: 'Pre-Wedding',
    },
    events: {
      cover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      label: 'Events',
    },
    portraits: {
      cover: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
      label: 'Portraits',
    },
    landscape: {
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      label: 'Landscape',
    },
  },

  gallery: {
    wedding: [
      { id: 'w1', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80', alt: 'Wedding ceremony moment', aspect: 'portrait' },
      { id: 'w2', src: 'https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=900&q=80', alt: 'Bride preparation', aspect: 'portrait' },
      { id: 'w3', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80', alt: 'Wedding couple outdoors', aspect: 'landscape' },
      { id: 'w4', src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80', alt: 'Wedding rings detail', aspect: 'square' },
      { id: 'w5', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=80', alt: 'Wedding venue', aspect: 'landscape' },
      { id: 'w6', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80', alt: 'Wedding reception', aspect: 'portrait' },
      { id: 'w7', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80', alt: 'Wedding dance', aspect: 'landscape' },
      { id: 'w8', src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=900&q=80', alt: 'Wedding bouquet', aspect: 'portrait' },
    ],
    prewedding: [
      { id: 'p1', src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&q=80', alt: 'Couple in golden light', aspect: 'portrait' },
      { id: 'p2', src: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=900&q=80', alt: 'Romantic couple shoot', aspect: 'landscape' },
      { id: 'p3', src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900&q=80', alt: 'Pre-wedding beach', aspect: 'portrait' },
      { id: 'p4', src: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=900&q=80', alt: 'Couple portrait sunset', aspect: 'landscape' },
      { id: 'p5', src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=80', alt: 'Engagement session', aspect: 'portrait' },
      { id: 'p6', src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=900&q=80', alt: 'Couple laughing together', aspect: 'landscape' },
    ],
    events: [
      { id: 'e1', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80', alt: 'Corporate event stage', aspect: 'landscape' },
      { id: 'e2', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=80', alt: 'Concert photography', aspect: 'portrait' },
      { id: 'e3', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80', alt: 'Event decoration details', aspect: 'landscape' },
      { id: 'e4', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80', alt: 'Festival lights', aspect: 'portrait' },
      { id: 'e5', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80', alt: 'Party celebration', aspect: 'landscape' },
      { id: 'e6', src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=80', alt: 'Outdoor event gathering', aspect: 'portrait' },
    ],
    portraits: [
      { id: 'pt1', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80', alt: 'Fashion portrait closeup', aspect: 'portrait' },
      { id: 'pt2', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80', alt: 'Natural light portrait', aspect: 'portrait' },
      { id: 'pt3', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80', alt: 'Male portrait dramatic', aspect: 'portrait' },
      { id: 'pt4', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80', alt: 'Fashion editorial', aspect: 'landscape' },
      { id: 'pt5', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80', alt: 'Lifestyle portrait', aspect: 'portrait' },
      { id: 'pt6', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80', alt: 'Studio portrait', aspect: 'portrait' },
      { id: 'pt7', src: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=900&q=80', alt: 'Creative portrait', aspect: 'landscape' },
      { id: 'pt8', src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=900&q=80', alt: 'Portrait golden hour', aspect: 'portrait' },
    ],
    landscape: [
      { id: 'l1', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80', alt: 'Mountain peaks dramatic', aspect: 'landscape' },
      { id: 'l2', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=80', alt: 'Misty forest morning', aspect: 'landscape' },
      { id: 'l3', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80', alt: 'Sunlit forest path', aspect: 'portrait' },
      { id: 'l4', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80', alt: 'Lake sunset reflection', aspect: 'landscape' },
      { id: 'l5', src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&q=80', alt: 'Rolling green hills', aspect: 'landscape' },
      { id: 'l6', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80', alt: 'Dramatic sunset', aspect: 'portrait' },
    ],
  },

  parallax: {
    quote1: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80',
    quote2: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1920&q=80',
    contact: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1920&q=80',
  },

  featured: [
    { id: 'f1', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80', alt: 'Wedding magic', category: 'wedding' },
    { id: 'f2', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80', alt: 'Portrait beauty', category: 'portraits' },
    { id: 'f3', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80', alt: 'Mountain drama', category: 'landscape' },
    { id: 'f4', src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&q=80', alt: 'Couple golden hour', category: 'prewedding' },
    { id: 'f5', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80', alt: 'Event grandeur', category: 'events' },
    { id: 'f6', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80', alt: 'Natural beauty portrait', category: 'portraits' },
    { id: 'f7', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=80', alt: 'Forest mystery', category: 'landscape' },
    { id: 'f8', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80', alt: 'Wedding couple embrace', category: 'wedding' },
  ],
};

export default images;
