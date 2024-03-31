const path = require('path');

const nextConfig = {
  images: {
    domains: ["localhost","www.driveshikhun.com", "driveshikhun.com"],
  },
  env: {
    baseUrl: "https://backend.driveshikhun.com/api/v1",
  },
  webpack: (config, { dev, isServer }) => {
    // Enable persistent caching for webpack 5 in production
    if (!dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.webpack-cache'), // make it absolute
      };
    }
    return config;
  },
};

module.exports = nextConfig;
