export const formatString = (inputString: string) => {
  const words = inputString.split('_');

  return words
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
};

type Params = {
  body: {
    source?: string;
    domain?: string | 'com';
    query: string;
    start_page?: number | 1;
    pages?: number | 1;
    parse?: boolean | true;
    context?: {
      key: string;
      value: string;
    }[];
  };
  method?: string | 'POST';
};
export const fetchOxylabs = async ({
  body: {
    source,
    domain = 'com',
    query,
    start_page = 1,
    pages = 1,
    parse = true,
  },
  method = 'POST',
}: Params) => {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASS;

  const body = {
    source,
    domain,
    query,
    start_page,
    pages,
    parse,
  };

  const res = await fetch(process.env.OXYLABS_URL!, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
    },
  });

  const data = await res.json();

  return data;
};

export const getFetchUrl = (route: string) => {
  return `${
    process.env.NODE_ENV === 'production'
      ? process.env.VERCEL_URL
      : 'http://localhost:3000'
  }/${route}`;
};
