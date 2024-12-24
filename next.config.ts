import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  //   redirects: async () => {
  //     return [
  //       {
  //         source: '/tools',
  //         destination: '/',
  //         permanent: true,
  //       },
  //     ];
  //   },
};

export default nextConfig;
