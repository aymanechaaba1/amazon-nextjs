import Main from '@/components/Main';
import { Sidebar } from 'lucide-react';

function LoadingBestSellers() {
  return (
    <div className="flex flex-col gap-4 md:flex-row flex-1">
      <Sidebar />
      <Main>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
          {/* @ts-ignore */}
          {[...Array(20).keys()].map((i) => (
            <div className="border rounded-lg space-y-3 p-3">
              <div className="w-48 h-48 bg-gray-100 rounded-lg" />
              <div className="w-48 h-5 rounded-lg bg-gray-100" />
              <div className="w-32 h-5 rounded-lg bg-gray-100" />
            </div>
          ))}
        </div>
      </Main>
    </div>
  );
}

export default LoadingBestSellers;
