"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "ＨＯＭＥ" },
  { href: "/about", label: "ＡＢＯＵＴ" },
  { href: "/news", label: "ＮＥＷＳ" },
  { href: "/links", label: "ＬＩＮＫ" },
  { href: "/join", label: "入部" },
];

const stamps = [
  { src: "/image/3dsstamp.gif", alt: "stamp" },
  { src: "/image/Nekostamp.webp", alt: "stamp" },
  { src: "image/nekostamp2.gif", alt: "stamp" },
  { src: "/image/strawberryaddict.gif", alt: "stamp" },
  { src: "/image/keepdreaming.gif", alt: "stamp" },
  { src: "/image/keyboard.gif", alt: "keyboard" },
];

export default function Sidebar() {
  const [visitorCount, setVisitorCount] = useState<string>("00000");
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    let count = localStorage.getItem("visitorCount");

    if (!count) {
      count = "0";
    } else {
      count = parseInt(count).toString();
    }

    const sessionKey = "visitorCounted_" + new Date().toDateString();
    const hasCountedToday = sessionStorage.getItem(sessionKey);

    if (!hasCountedToday) {
      const newCount = (parseInt(count) + 1).toString();
      localStorage.setItem("visitorCount", newCount);
      sessionStorage.setItem(sessionKey, "true");
      count = newCount;
    }

    setVisitorCount(String(count).padStart(5, "0"));
  }, []);

  return (
    <>
      {/* PC用サイドバー */}
      <aside className="site-sidebar">
        <div style={{ marginBottom: "20px" }}>
          <div className="counter-area">
            あなたは　　　
            <span id="visitor-count" className="counter-num">
              {visitorCount}
            </span>{" "}
            人目の
            <br />
            訪問者です<span style={{ color: "#ff1493" }}>♥</span>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.1em",
              color: "#ff69b4",
              marginBottom: "10px",
            }}
          >
            🌹 Ｍ Ｅ Ｎ Ｕ 🌹
          </div>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
            {menuItems.slice(0, 4).map((item) => (
              <li key={item.href} style={{ margin: "12px 0", fontSize: "14px" }}>
                <span style={{ color: "#ff1493" }}>♥</span>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <p>
            入会希望者は<Link href="/join">こちら</Link>
          </p>
        </div>
        <div className="sidebar-stamps">
          {stamps.map((s) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              style={{
                maxWidth: "100px",
                height: "auto",
                margin: "5px",
                display: "inline-block",
              }}
            />
          ))}
        </div>
      </aside>

      {/* モバイル用ナビバー */}
      <nav className="mobile-nav-bar">
        <div className="mobile-nav-header">
          <ul className="mobile-nav-links">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span style={{ color: "#ff1493" }}>♥</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="mobile-nav-toggle"
            onClick={() => setMoreOpen(!moreOpen)}
            aria-label="もっと見る"
          >
            {moreOpen ? "▲" : "▼"}
          </button>
        </div>

        <div className={`mobile-nav-dropdown${moreOpen ? " open" : ""}`}>
          <div className="mobile-nav-dropdown-content">
            <div className="counter-area">
              あなたは
              <span className="counter-num">{visitorCount}</span>
              人目の訪問者です<span style={{ color: "#ff1493" }}>♥</span>
            </div>
            <div className="sidebar-stamps">
              {stamps.map((s) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  style={{ display: "inline-block" }}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
