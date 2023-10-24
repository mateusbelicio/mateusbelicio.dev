import type { Metadata } from 'next';

const BASE_URL = {
  development: `localhost:${process.env.PORT || 3000}`,
  production: 'mateusbelicio.dev',
  test: `localhost:${process.env.PORT || 3000}`
};

export const meta: Metadata = {
  title: 'Mateus Belício | Front-end Developer for Websites',
  generator: 'Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', 'Web development', 'Portfolio'],
  authors: [{ name: 'Mateus Belício', url: 'https://mateusbelicio.dev' }],
  creator: 'Mateus Belício',
  description:
    'Mateus Belicio is a front-end developer based in Brazil, specialized in creating clean and fast websites. As an experienced developer, I can help your business with all its website needs. Contact me today for more information!',
  metadataBase: new URL(`https://${BASE_URL[process.env.NODE_ENV]}`),
  alternates: {
    canonical: '/',
    languages: {
      en: 'en-US',
      pt: 'pt-BR'
    }
  },
  openGraph: {
    title: 'Mateus Belício | Front-end Developer for Websites',
    description: "Mateus Belicio's portfolio website.",
    url: new URL(`https://${BASE_URL[process.env.NODE_ENV]}`),
    siteName: 'Mateus Belício',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png'
    }
  }
};

export const menuItems = [
  { path: '/', name: 'Home', new: false },
  { path: '/projects', name: 'Projects', new: false },
  { path: '/about', name: 'About me', new: false },
  { path: '/contact', name: 'Contact', new: false }
];
