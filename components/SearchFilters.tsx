'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function SearchFilters({ pages, setPages, startPage, setStartPage }: any) {
  return (
    <div className="flex items-center gap-4">
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
    </div>
  );
}

export default SearchFilters;
