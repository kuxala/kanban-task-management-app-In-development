// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
    serverComponents: false,
  }
};

export default nextConfig;
