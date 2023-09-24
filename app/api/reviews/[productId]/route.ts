import { fetchOxylabs } from '@/utils/helpers';
import { NextRequest, NextResponse } from 'next/server';

type Props = {
  params: {
    productId: string;
  };
};

export async function GET(req: NextRequest, { params: { productId } }: Props) {
  if (!productId)
    return NextResponse.next(
      new NextResponse('Missing product id', { status: 400 })
    );

  const reviewsData: ReviewsResponse = await fetchOxylabs({
    body: {
      source: 'amazon_reviews',
      query: productId,
    },
  });

  const reviews: Review[] = reviewsData?.results[0]?.content?.reviews;

  return NextResponse.json(reviews);
}
