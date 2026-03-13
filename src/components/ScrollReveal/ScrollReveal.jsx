import { useEffect, useRef } from 'react';

export default function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.15,
  className = '',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal--visible');
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  const variantClass = {
    up: '',
    fade: 'reveal--fade',
    scale: 'reveal--scale',
    left: 'reveal--left',
    right: 'reveal--right',
  }[variant] || '';

  const delayClass = delay > 0 ? `reveal--delay-${delay}` : '';

  return (
    <div ref={ref} className={`reveal ${variantClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
