import { Analytics } from "@vercel/analytics/react";
import { Lexend } from "next/font/google";
import { Partytown } from "@builder.io/partytown/react";

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
        <Partytown debug={true} forward={["gtag", "dataLayer.push"]} />
        {children}
        <Analytics />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/partytown"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_KEY}`}
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA4_KEY}', {
                page_path: window.location.pathname,
            });
        `,
          }}
        />
      </body>
    </html>
  );
}
