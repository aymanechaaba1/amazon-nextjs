'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

function SearchBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="text-sm bg-[#FF9B00] py-2 px-4 rounded-lg text-slate-100 hover:shadow-lg font-medium"
      disabled={pending}
    >
      {pending ? 'Searching...' : 'Search'}
    </button>
  );
}

export default SearchBtn;
