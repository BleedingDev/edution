import { Analytics } from "@vercel/analytics/react";
import { Lexend } from "next/font/google";

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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
