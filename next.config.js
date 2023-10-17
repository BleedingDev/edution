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
  rewrites: () => {
    return [
      {
        source: "/fb/:path*",
        destination: "https://connect.facebook.net/:path*",
      },
    ];
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.m?js$/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
  experimental: {
    nextScriptWorkers: true,
    serverActions: true,
  },
});
