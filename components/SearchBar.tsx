'use client';

import SearchBtn from './search_bar/SearchBtn';
import { useRouter } from 'next/navigation';
import SearchFilters from './SearchFilters';
import { useState } from 'react';

type Props = {
  endpoint: string;
  query_name: string;
  placeholder: string;
};
function SearchBar({ endpoint, query_name, placeholder }: Props) {
  const router = useRouter();
  const [pages, setPages] = useState('1');
  const [startPage, setStartPage] = useState('1');

  return (
    <form
      action={(formData: FormData) => {
        const query = formData.get(query_name) as string;
        if (!query) return;

        // new url
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set('pages', pages);
        urlSearchParams.set('start_page', startPage);

        router.push(`/${endpoint}/${query}?${urlSearchParams.toString()}`);
      }}
      className="flex-1 space-y-3"
    >
      <div className="flex ite gap-4">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 px-4 py-2 rounded-lg border"
          name={query_name}
        />
        <SearchBtn />
      </div>

      {/* Search Filters */}
      <SearchFilters
        pages={pages}
        setPages={setPages}
        startPage={startPage}
        setStartPage={setStartPage}
      />
    </form>
  );
}

export default SearchBar;
