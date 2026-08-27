import type { NextConfig } from "next";

const repoBasePath = process.env.GITHUB_ACTIONS ? "/portefolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
  basePath: repoBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
};

export default nextConfig;
