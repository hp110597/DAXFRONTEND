/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "./components"
    );
    config.resolve.alias["hooks"] = path.resolve(
      __dirname,
      "../dax-frontend/hooks"
    );
    config.resolve.alias["pages"] = path.resolve(
      __dirname,
      "../dax-frontend/pages"
    );
    config.resolve.alias["public"] = path.resolve(
      __dirname,
      "../dax-frontend/public"
    );
    config.resolve.alias["scenes"] = path.resolve(
      __dirname,
      "../dax-frontend/scenes"
    );
    config.resolve.alias["styles"] = path.resolve(
      __dirname,
      "../dax-frontend/styles"
    );
    config.resolve.alias["utils"] = path.resolve(
      __dirname,
      "../dax-frontend/utils"
    );

    return config;
  },
};

module.exports = nextConfig;
