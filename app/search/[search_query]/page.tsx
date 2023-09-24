import Main from '@/components/Main';
import StarsReviews from '@/components/product/StarsReviews';
import { getFetchUrl } from '@/utils/helpers';
import { Sidebar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    search_query: string;
  };
  searchParams: {
    start_page: string;
    pages: string;
  };
};

async function SearchResultsPage({
  params: { search_query },
  searchParams: { start_page, pages },
}: Props) {
  // if (!search_query) redirect(`/search`);

  // fetch results
  const res = await fetch(
    getFetchUrl(
      `api/search/${search_query}?pages=${pages}&start_page=${start_page}`
    )
  );

  if (!res.ok) throw new Error(`Failed to get results for your search query.`);

  const data = await res.json();

  const searchResults: SearchResult[] =
    data?.results[0]?.content?.results?.organic;

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row flex-1">
        <Sidebar />
        <Main>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults?.map((product) => (
              <Link
                href={`/product/${product.asin}`}
                prefetch={false}
                key={product.asin}
                className="p-3 rounded-lg border space-y-2 hover:shadow-lg"
              >
                <Image
                  src={product.url_image}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="object-cover rounded-lg border p-3"
                />
                <h1 className="font-medium line-clamp-2">{product.title}</h1>
                <p className="text-sm">${product.price}</p>
                <StarsReviews
                  nbStars={product.rating}
                  starColor="text-orange-400"
                />
              </Link>
            ))}
          </div>

          <p className="text-center text-sm mt-5">Page {start_page}</p>
        </Main>
      </div>
    </>
  );
}

export default SearchResultsPage;
