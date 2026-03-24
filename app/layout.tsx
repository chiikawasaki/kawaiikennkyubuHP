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
      <body className={dotGothic16.className}>
        <div
          style={{
            width: "1000px",
            display: "grid",
            gridGap: "10px",
            gridTemplate:
              "'header header' auto 'leftSidebar main' auto 'footer footer' auto / 200px auto",
          }}
        >
          <img
            src="/image/Roseborder.gif"
            alt="Roseborder"
            style={{
              width: "100%",
              height: "auto",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          />
          <Header />
          <Sidebar />
          <main
            style={{
              gridArea: "main",
              backgroundColor: "#ffffff",
              border: "3px double #ff69b4",
              padding: "15px",
              boxShadow: "0 0 10px rgba(255, 105, 180, 0.5)",
              minHeight: "400px",
            }}
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
