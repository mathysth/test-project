import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@immomatch/shared', '@immomatch/ui'],
};

export default nextConfig;
