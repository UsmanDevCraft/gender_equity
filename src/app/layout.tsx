import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "../contexts/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gender Equity - WeCoded 2026",
  description:
    "Built for the Dev Community 2026 challenge, this application leverages Next.js and Three.js to transform static data into an immersive, interactive experience. By using 3D visualization to highlight global gender disparities, the project aims to foster empathy and drive awareness through modern web tech. It’s a high-performance, visual call to action designed to bridge the gap between information and advocacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
