import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex-1 border p-4 flex items-center gap-4 rounded-lg">
      <Link href={`/search`} className="">
        Search
      </Link>
      <Link href={`/best-sellers`}>Best Sellers</Link>
    </div>
  );
}

export default Navbar;
