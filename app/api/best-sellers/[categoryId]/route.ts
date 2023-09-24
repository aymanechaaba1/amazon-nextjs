import { fetchOxylabs } from '@/utils/helpers';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: {
    categoryId: string;
  };
};
export async function GET(
  request: NextRequest,
  { params: { categoryId } }: Params
) {
  const url = new URL(request.url);
  const start_page = url.searchParams.get('start_page') as string;
  const pages = url.searchParams.get('pages') as string;

  if (!categoryId)
    return NextResponse.next(
      new Response('Missing category id', { status: 400 })
    );

  const data = await fetchOxylabs({
    body: {
      source: 'amazon_bestsellers',
      query: categoryId || '2407760011',
      start_page: +start_page || 1,
      pages: +pages || 1,
    },
  });

  return NextResponse.json(data);
}
