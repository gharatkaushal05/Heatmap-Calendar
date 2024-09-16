/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose', // Try 'true' if 'loose' does not work
  },
};

export default nextConfig;
