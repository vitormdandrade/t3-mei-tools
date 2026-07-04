'use client';

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl',
};

export default function StarRating({ rating, max = 5, size = 'md', showNumber = true }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className={`inline-flex items-center gap-0.5 ${sizeClasses[size]}`} title={`${rating} de ${max}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-500 dark:text-yellow-400">★</span>
      ))}
      {hasHalf && (
        <span className="text-yellow-500 dark:text-yellow-400 relative">
          <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>★</span>
          <span className="text-gray-300 dark:text-gray-600">★</span>
        </span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 dark:text-gray-600">★</span>
      ))}
      {showNumber && (
        <span className="ml-1 font-semibold text-gray-700 dark:text-gray-300">{rating.toFixed(1)}</span>
      )}
    </span>
  );
}
