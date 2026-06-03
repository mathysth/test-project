/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@ui/components', '@shared/types'],
};

module.exports = nextConfig;
