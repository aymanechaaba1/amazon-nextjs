import { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Amazon App with NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col gap-5 p-4 h-screen">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-1/4 p-4 flex justify-center">
              <Image
                src={`https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg`}
                width={100}
                height={100}
                alt="Amazon Logo"
              />
            </div>
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
