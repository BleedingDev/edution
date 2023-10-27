const withBuilderDevTools = require("@builder.io/dev-tools/next")()

/** @type {import('next').NextConfig} */
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
    ]
  },
  experimental: {
    nextScriptWorkers: true,
  },
})
