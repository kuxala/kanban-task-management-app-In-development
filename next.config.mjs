// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
    serverComponents: false,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
