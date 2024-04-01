const nextConfig = {
  images: {
    domains: ["localhost", "www.driveshikhun.com", "driveshikhun.com"],
  },
  env: {
    baseUrl: "https://backend.driveshikhun.com/api/v1",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
};

module.exports = nextConfig;
