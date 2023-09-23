import "./styles.css";

import { Lexend } from "next/font/google";

const font = Lexend({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
