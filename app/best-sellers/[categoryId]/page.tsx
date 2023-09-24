import Main from '@/components/Main';
import { Sidebar } from 'lucide-react';
import { getFetchUrl } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import StarsReviews from '@/components/product/StarsReviews';

type Params = {
  params: {
    categoryId: string;
  };
  searchParams: {
    pages: string;
    start_page: string;
  };
};
async function BestSellersPage({
  params: { categoryId },
  searchParams: { pages, start_page },
}: Params) {
  const res = await fetch(
    getFetchUrl(
      `api/best-sellers/${categoryId}?pages=${pages}&start_page=${start_page}`
    )
  );

  if (!res.ok) throw new Error(`Failed to get best-sellers. ${res.status}`);

  const data = await res.json();

  const products: BestSellerProduct[] = data.results[0].content.results;

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row flex-1">
        <Sidebar />
        <Main>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((product) => (
              <Link
                href={`/product/${product.asin}`}
                prefetch={false}
                key={product.asin}
                className="p-3 rounded-lg border space-y-2 hover:shadow-lg"
              >
                <p className="text-orange-300 font-medium">#{product.pos}</p>
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

export default BestSellersPage;
