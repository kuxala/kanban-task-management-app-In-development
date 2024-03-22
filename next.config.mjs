// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
    serverComponents: false,
    reactStrictMode: false,
  }
};

export default nextConfig;
