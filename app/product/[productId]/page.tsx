import Main from '@/components/Main';
import Price from '@/components/product/Price';
import QuestionsAnswers from '@/components/product/QuestionsAnswers';
import Reviews from '@/components/product/reviews/Reviews';
import StarsReviews from '@/components/product/StarsReviews';
import TopReview from '@/components/product/TopReview';
import { formatString, getFetchUrl } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    productId: string;
  };
};

async function ProductPage({ params: { productId } }: Props) {
  const [productRes, reviewsRes, questionsRes] = await Promise.all([
    fetch(getFetchUrl(`api/product/${productId}`)),
    fetch(getFetchUrl(`api/reviews/${productId}`)),
    fetch(getFetchUrl(`api/qa/${productId}`)),
  ]);

  [productRes, reviewsRes, questionsRes].forEach((res) => {
    if (!res.ok)
      throw new Error(`Failed to get your product details! ${res.status}`);
  });

  const product: Product = await productRes.json();
  const reviews: Review[] = await reviewsRes.json();
  const questions: Question[] = await questionsRes.json();

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row flex-1">
        <aside className="w-1/4 hidden p-4"></aside>
        <Main>
          <div className="flex flex-col md:flex-row md:items-start gap-10 px-3">
            {/* Gallery */}
            <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-3 md:w-1/4">
              <Image
                src={product?.images[0]}
                alt={product?.title}
                width={200}
                height={200}
                className="col-span-full self-center"
              />
              {product.images.map((img, i) => {
                if (i > 0)
                  return (
                    <Image
                      src={img}
                      alt={product?.title}
                      width={100}
                      height={100}
                      className=""
                    />
                  );
              })}
            </div>
            {/* Product Info */}
            <div className="flex flex-col flex-1 gap-7">
              <div>
                <div className="flex items-center justify-between">
                  <small className="text-xs text-orange-400">
                    {product.manufacturer}
                  </small>
                  {/* Category */}
                  <div>
                    {product?.category.map((category) => (
                      <a
                        className="text-xs text-orange-500 hover:text-orange-600"
                        href={`https://www.amazon.com/${category.ladder[0].url}`}
                      >
                        {category.ladder[0].name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium">{product.reviews_count}</p>
                  <StarsReviews
                    nbStars={product.rating}
                    starColor="text-gray-900"
                  />
                </div>
                <h1 className="line-clamp-2">{product?.title}</h1>
                <Price currency={product.currency} price={product.price} />
              </div>
              {/* Product Details */}
              {product.product_details && (
                <div className="space-y-3">
                  <h2 className="font-medium">Product Details</h2>
                  <ul className="space-y-2 h-60 overflow-y-scroll border rounded-lg p-3">
                    {Object.entries(product.product_details).map(
                      ([key, value]) => (
                        <li className="space-x-3">
                          <span className="font-medium">
                            {formatString(key)}:
                          </span>
                          <span>{value}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* BulletPoints */}
              <div className="space-y-3">
                <h1 className="font-medium">Highlights</h1>
                <ul className="space-y-2 lg:w-3/4">
                  {product.bullet_points.split('\n').map((bulletPoint) => (
                    <li>{bulletPoint}</li>
                  ))}
                </ul>
              </div>
              {/* Top Review */}
              <TopReview review={product.top_review} />

              {/* Reviews */}
              {reviews.length !== 0 && <Reviews reviews={reviews} />}

              {/* Questions & Answers */}
              {questions.length !== 0 && (
                <QuestionsAnswers questions={questions} />
              )}
            </div>
          </div>
        </Main>
      </div>
    </>
  );
}

export default ProductPage;
