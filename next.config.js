/** @type {import('next').NextConfig} */
const path = require("path");

console.log(`DAX DIR ${__dirname}`);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.alias["components"] = path.join(__dirname, "./components");
    config.resolve.alias["hooks"] = path.join(__dirname, "./hooks");
    config.resolve.alias["pages"] = path.join(__dirname, "./pages");
    config.resolve.alias["public"] = path.join(__dirname, "./public");
    config.resolve.alias["scenes"] = path.join(__dirname, "./scenes");
    config.resolve.alias["styles"] = path.join(__dirname, "./styles");
    config.resolve.alias["utils"] = path.join(__dirname, "./utils");

    console.log(`ALIASES ${JSON.stringify(config.resolve.alias)}`);

    return config;
  },
};

module.exports = nextConfig;
