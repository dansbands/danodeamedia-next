import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  // assetPrefix: isProd ? "/danodeamedia-next" : "",
  // basePath: isProd ? "/danodeamedia-next" : "",
};

export default nextConfig;
