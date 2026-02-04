import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable experimental features for performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
