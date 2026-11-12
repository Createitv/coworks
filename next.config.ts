import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "coworks.dev" }],
        destination: "https://www.coworks.dev/:path*",
        permanent: true,
      },
      { source: "/login", destination: "/docs", permanent: true },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
