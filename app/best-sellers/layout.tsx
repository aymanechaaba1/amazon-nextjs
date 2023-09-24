import SearchBar from '@/components/SearchBar';

export default function BestSellersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-1/4 hidden md:block"></div>
        <SearchBar
          endpoint="best-sellers"
          query_name="category_id"
          placeholder="type a category id..."
        />
      </div>
      {children}
    </>
  );
}
