'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Filters() {
  const router = useRouter();

  const [pages, setPages] = useState('1');
  const [startPage, setStartPage] = useState('1');

  return (
    <form
      action={(formData: FormData) => {
        const reviewsFiltersParams = new URLSearchParams();
        reviewsFiltersParams.set(`pages`, pages);
        reviewsFiltersParams.set(`start_page`, startPage);
      }}
      className="flex items-center justify-between md:justify-start md:gap-4"
    >
      <Select onValueChange={(val) => setPages(val)} defaultValue={pages}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Pages" />
        </SelectTrigger>
        <SelectContent>
          {/* @ts-ignore */}
          {[...Array(5).keys()].map((i) => (
            <SelectItem value={`${i + 1}`}>{i + 1} Pages</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(val) => setStartPage(val)}
        defaultValue={startPage}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Start Page" />
        </SelectTrigger>
        <SelectContent>
          {/* @ts-ignore */}
          {[...Array(5).keys()].map((i) => (
            <SelectItem value={`${i + 1}`}>{i + 1}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </form>
  );
}

export default Filters;
