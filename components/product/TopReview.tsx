import { StarIcon } from '@heroicons/react/24/solid';

type Props = {
  review: string;
};

function TopReview({ review }: Props) {
  return (
    <div className="space-y-2">
      <h2 className="font-medium">Top Review</h2>
      <div className="border p-3 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2s">
            {/* @ts-ignore */}
            {[...Array(5).keys()].map((i) => (
              <StarIcon className="w-4 h-4 text-orange-400" />
            ))}
          </div>
          <p className="font-medium">5.0</p>
        </div>

        <p className="text-sm line-clamp-6">{review}</p>
      </div>
    </div>
  );
}

export default TopReview;
