/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  distDir: './dist',
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US'
  }
};

module.exports = nextConfig;
