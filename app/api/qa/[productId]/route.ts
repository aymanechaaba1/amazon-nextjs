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

  const data = await fetchOxylabs({
    body: {
      source: 'amazon_questions',
      query: productId,
    },
  });

  const questions: Question[] = data?.results[0]?.content?.questions;

  return NextResponse.json(questions);
}
