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
        <Partytown debug={true} forward={["gtag", "dataLayer.push"]} />
        {children}
        <Analytics />
        <Tracking />
      </body>
    </html>
  );
}
