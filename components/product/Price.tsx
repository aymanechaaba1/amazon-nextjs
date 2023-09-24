'use client';

type Props = {
  currency: string;
  price: number;
};

function Price({ currency, price }: Props) {
  return (
    <p className="text-sm mt-3 font-medium">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
      }).format(price)}
    </p>
  );
}

export default Price;
