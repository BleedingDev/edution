import { Analytics } from "@vercel/analytics/react";
import { Lexend } from "next/font/google";
import { Partytown } from "@builder.io/partytown/react";
import { Tracking } from "components/Tracking";

import "./styles.css";

const font = Lexend({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="overflow-x-hidden">
        <Partytown
          resolveUrl={function (url) {
            if (url.hostname === "connect.facebook.net") {
              var proxyUrl = new URL(
                `${process.env.NEXT_PUBLIC_SITE_URL}/fb${url.pathname}`
              );
              return proxyUrl;
            }
            return url;
          }}
          debug={true}
          forward={["gtag", "dataLayer.push", "fbq"]}
        />
        {children}
        <Analytics />
        <Tracking />
      </body>
    </html>
  );
}
