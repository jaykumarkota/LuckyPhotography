import { Link } from 'react-router-dom';
import './CategoryCard.css';

export default function CategoryCard({ category, image, label, count }) {
  return (
    <Link to={`/gallery/${category}`} className="category-card">
      <div className="category-card__image-wrapper">
        <img
          src={image}
          alt={label}
          className="category-card__image"
          loading="lazy"
        />
      </div>
      <div className="category-card__overlay" />
      <div className="category-card__content">
        <h3 className="category-card__title">{label}</h3>
        <span className="category-card__count">{count} Photos</span>
      </div>
    </Link>
  );
}
