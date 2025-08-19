import type { NextConfig, Redirect } from "next";
import fs from "node:fs/promises";
import path from "node:path";

const nextConfig: NextConfig = {
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
    // Optional: load additional redirects from a JSON file at project root: redirects.config.json
    // Format: [{ "source": "/old", "destination": "/new", "permanent": true }]
    const redirectsFromFile: Redirect[] = [];
    try {
      const filePath = path.join(process.cwd(), "redirects.config.json");
      const content = await fs.readFile(filePath, "utf8");
      const parsed = JSON.parse(content) as Redirect[];
      for (const rule of parsed) {
        if (rule.source && rule.destination) {
          redirectsFromFile.push({ ...rule, permanent: rule.permanent ?? true });
        }
      }
    } catch {
      // No external redirects file found; fall back to inline rules below
    }

    const inlineRules: Redirect[] = [
      // Example mapping if any slug changed; extend as needed
      // { source: "/home-copy", destination: "/", permanent: true },
      // { source: "/seguro-uber", destination: "/uber", permanent: true },
      { source: "/artigos/:slug", destination: "/blog/:slug", permanent: true },
    ];

    return [...redirectsFromFile, ...inlineRules];
  },
};

export default nextConfig;
