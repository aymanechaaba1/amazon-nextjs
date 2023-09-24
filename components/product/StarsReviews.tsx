import { StarIcon as EmptyStar } from '@heroicons/react/24/outline';
import { StarIcon as FullStar } from '@heroicons/react/24/solid';

type Props = {
  nbStars: number;
  starColor: string;
};

function StarsReviews({ nbStars, starColor }: Props) {
  const fullStars = Math.trunc(nbStars);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }, (_: any) => (
        <FullStar className={`w-4 h-4 ${starColor}`} />
      ))}
      {!Number.isInteger(nbStars) && (
        <EmptyStar className={`w-4 h-4 ${starColor}`} />
      )}
      {Array.from({ length: 5 - Math.ceil(nbStars) }, (_: any) => (
        <EmptyStar className={`w-4 h-4 ${starColor}`} />
      ))}
    </div>
  );
}

export default StarsReviews;
