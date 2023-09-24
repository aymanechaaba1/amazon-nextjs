'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

function Sidebar() {
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState('0_to_50');
  const [pages, setPages] = useState('1');

  return (
    <aside className="w-full md:w-1/4 border p-4 rounded-lg flex flex-row md:flex-col items-center gap-4">
      <Select
        value={sortBy}
        onValueChange={(val) => setSortBy(val)}
        defaultValue={sortBy}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="lowest_price">Lowest Price</SelectItem>
          <SelectItem value="highest_price">Highest Price</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={priceRange}
        onValueChange={(val) => setPriceRange(val)}
        defaultValue={priceRange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0_to_50">0 to $50</SelectItem>
          <SelectItem value="50_to_100">50$ to 100$</SelectItem>
          <SelectItem value="100_up">$100 & Up</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={pages}
        onValueChange={(val) => setPages(val)}
        defaultValue={pages}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="# of pages" />
        </SelectTrigger>
        <SelectContent>
          {/* @ts-ignore */}
          {[...Array(10).keys()].map((i) => (
            <SelectItem value={(i + 1).toString()}>{`${i + 1} ${
              i + 1 === 1 ? 'page' : 'pages'
            }`}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </aside>
  );
}

export default Sidebar;
