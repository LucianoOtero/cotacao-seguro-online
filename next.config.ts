import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
      },
      {
        protocol: "https",
        hostname: "uploads.webflow.com",
      },
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
      },
      {
        protocol: "https",
        hostname: "assets.website-files.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/artigos/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
