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
  webpack(config, { isServer }) {
    // https://github.com/wojtekmaj/react-pdf/issues/799
    // https://github.com/mozilla/pdf.js/issues/13373
    if (isServer) {
      config.resolve.alias.canvas = false
      config.resolve.alias.encoding = false
    }

    return config
  },
})
