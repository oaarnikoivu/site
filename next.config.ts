import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "media.licdn.com",
      "www.siliconluxembourg.lu",
      "encrypted-tbn0.gstatic.com",
      "cdn.movember.com",
    ],
  },
};

export default nextConfig;
