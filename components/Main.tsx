import { ReactNode } from 'react';

function Main({ children }: { children: React.ReactNode }) {
  return <main className="flex-1 border p-4 rounded-lg">{children}</main>;
}

export default Main;
