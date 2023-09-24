import SearchBar from '@/components/SearchBar';
import React from 'react';

function SearchPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-1/4 hidden md:block"></div>
        <SearchBar
          endpoint="search"
          query_name="search_query"
          placeholder="search for a product..."
        />
      </div>
      {children}
    </>
  );
}

export default SearchPageLayout;
