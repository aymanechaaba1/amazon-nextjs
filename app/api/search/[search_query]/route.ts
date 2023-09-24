import { fetchOxylabs } from '@/utils/helpers';
import { NextRequest, NextResponse } from 'next/server';

type Props = {
  params: {
    search_query: string;
  };
};

export async function GET(
  req: NextRequest,
  { params: { search_query } }: Props
) {
  const url = new URL(req.url);
  const pages = url.searchParams.get('pages');
  const start_page = url.searchParams.get('start_page');

  if (!pages || !start_page) return;

  if (!search_query)
    return NextResponse.next(
      new Response('Missing search query', { status: 400 })
    );

  const data = await fetchOxylabs({
    body: {
      source: 'amazon_search',
      query: search_query,
      start_page: +start_page || 1,
      pages: +pages || 1,
    },
  });

  return NextResponse.json(data);
}
