const nextConfig = {
  images: {
    domains: ["localhost","www.driveshikhun.com", "driveshikhun.com"],
  },
  env: {
    baseUrl: "https://backend.driveshikhun.com/api/v1",
  },
  webpack: (config, { dev, isServer }) => {
    // Enable persistent caching for webpack 5 in production aaaaaaaa
    if (!dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        cacheDirectory: '.webpack-cache',
      };
    }
    return config;
  },
};

module.exports = nextConfig;
