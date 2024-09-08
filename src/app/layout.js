import { Suspense } from 'react';
import { Banner } from './components/Banner';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'profolios',
  description:
    'Profolios delivers professional, ready-made portfolios for careers and personal branding, designed to help you stand out.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} custom-scrollbar`}>
        <Banner />
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
