/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@immomatch/ui', '@immomatch/shared'],
  reactStrictMode: true,
};

module.exports = nextConfig;
