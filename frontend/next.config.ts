import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This will disable ESLint checks during builds
  },
};

export default nextConfig;
