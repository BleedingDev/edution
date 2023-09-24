const withBuilderDevTools = require("@builder.io/dev-tools/next")();

module.exports = withBuilderDevTools({
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  experimental: {
    nextScriptWorkers: true,
  },
});
