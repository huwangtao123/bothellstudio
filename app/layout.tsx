import type { Metadata } from "next";
import { Baloo_2, Noto_Sans, Nunito_Sans } from "next/font/google";

import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"]
});

const nunitoSans = Nunito_Sans({
  variable: "--font-display",
  subsets: ["latin"]
});

const baloo = Baloo_2({
  variable: "--font-accent",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bothellartstudio.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${nunitoSans.variable} ${baloo.variable}`}>
        {children}
      </body>
    </html>
  );
}
