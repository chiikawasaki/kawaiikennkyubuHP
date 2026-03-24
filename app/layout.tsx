import React from "react";
import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const dotGothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "†かわいい研求部ＨＰ†",
  description: "成蹊大学かわいい研求部の公式ホームページ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={dotGothic16.className}>
        <div className="site-grid">
          <img
            src="/image/Roseborder.gif"
            alt="Roseborder"
            className="roseborder-bg"
          />
          <Header />
          <Sidebar />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
