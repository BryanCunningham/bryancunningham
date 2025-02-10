import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/bryancunningham",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bryancunningham' : '',
};

export default nextConfig;

