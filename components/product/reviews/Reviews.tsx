import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import StarsReviews from '../StarsReviews';

type Props = {
  reviews: Review[];
};

function Reviews({ reviews }: Props) {
  return (
    <div className="p-3 space-y-3">
      <h2 className="font-medium">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {reviews?.map((review) => (
          <div className="border rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-xs">{review.timestamp}</p>
            </div>
            <StarsReviews nbStars={review.rating} starColor="text-orange-400" />
            <h2 className="font-medium">{review.title}</h2>
            <p className="text-sm line-clamp-4">{review.content}</p>
            <div className="flex items-center gap-2 mt-5">
              <p className=" text-sm">{review.author}</p>
              <span>
                {review.is_verified && <CheckBadgeIcon className="w-4" />}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
