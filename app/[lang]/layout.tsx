import '@/styles/globals.css';

// FONT
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

// TYPES
import type { Metadata } from 'next';

// COMPONENTS
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// DATA
import { meta } from '@/data/constants';

/**
|--------------------------------------------------
| LAYOUT
|--------------------------------------------------
*/

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = meta;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
