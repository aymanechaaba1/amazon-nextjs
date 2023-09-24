'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="grid place-content-center place-items-center space-y-3">
      <h2>Something went wrong! {error.message}</h2>
      <button
        className="bg-orange-400 rounded-lg text-white px-4 py-2"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
