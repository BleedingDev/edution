const withBuilderDevTools = require("@builder.io/dev-tools/next")();

module.exports = withBuilderDevTools({
  reactStrictMode: true,
  transpilePackages: ["ui", "@builder.io/sdk-react-nextjs"],
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
  experimental: {
    nextScriptWorkers: true,
    serverActions: true,
  },
});
