const withBuilderDevTools = require("@builder.io/dev-tools/next")()
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withBuilderDevTools({
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
      esmExternals: "loose",
    },
    webpack(config, { isServer }) {
      // https://github.com/wojtekmaj/react-pdf/issues/799
      // https://github.com/mozilla/pdf.js/issues/13373
      if (isServer) {
        config.resolve.alias.canvas = false
        config.resolve.alias.encoding = false
      }
      config.module.rules.push({
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      })

      return config
    },
  }),
)
