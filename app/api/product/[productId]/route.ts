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

  const productData = await fetchOxylabs({
    body: {
      source: 'amazon_product',
      query: productId,
    },
  });
  const product: Product = productData?.results[0]?.content;
  return NextResponse.json(product);
}
