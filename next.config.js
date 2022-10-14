/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["hooks"] = path.join(__dirname, "hooks");
    config.resolve.alias["pages"] = path.join(__dirname, "pages");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["scenes"] = path.join(__dirname, "scenes");
    config.resolve.alias["styles"] = path.join(__dirname, "styles");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");

    return config;
  },
};

module.exports = nextConfig;
