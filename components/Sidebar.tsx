"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [visitorCount, setVisitorCount] = useState<string>("00000");

  useEffect(() => {
    // LocalStorageから訪問者数を取得
    let count = localStorage.getItem("visitorCount");

    // 初回訪問の場合
    if (!count) {
      count = "0";
    } else {
      count = parseInt(count).toString();
    }

    // このセッションで既にカウント済みかチェック
    const sessionKey = "visitorCounted_" + new Date().toDateString();
    const hasCountedToday = sessionStorage.getItem(sessionKey);

    if (!hasCountedToday) {
      // 今日初めて訪問した場合のみカウントを増やす
      const newCount = (parseInt(count) + 1).toString();
      localStorage.setItem("visitorCount", newCount);
      sessionStorage.setItem(sessionKey, "true");
      count = newCount;
    }

    // 5桁になるように0で埋める
    setVisitorCount(String(count).padStart(5, "0"));
  }, []);

  return (
    <aside
      style={{
        gridArea: "leftSidebar",
        backgroundColor: "#ffffff",
        border: "3px double #ff69b4",
        padding: "15px",
        boxShadow: "0 0 10px rgba(255, 105, 180, 0.5)",
      }}
    >
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
          <li style={{ margin: "12px 0", fontSize: "14px" }}>
            <span style={{ color: "#ff1493" }}>♥</span>
            <Link href="/">ＨＯＭＥ</Link>
          </li>
          <li style={{ margin: "12px 0", fontSize: "14px" }}>
            <span style={{ color: "#ff1493" }}>♥</span>
            <Link href="/about">ＡＢＯＵＴ</Link>
          </li>
          <li style={{ margin: "12px 0", fontSize: "14px" }}>
            <span style={{ color: "#ff1493" }}>♥</span>
            <Link href="/news">ＮＥＷＳ</Link>
          </li>
          <li style={{ margin: "12px 0", fontSize: "14px" }}>
            <span style={{ color: "#ff1493" }}>♥</span>
            <Link href="/links">ＬＩＮＫ</Link>
          </li>
        </ul>
        <p>
          入会希望者は<Link href="/join">こちら</Link>
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          src="/image/3dsstamp.gif"
          alt="stamp"
          style={{
            maxWidth: "100px",
            height: "auto",
            margin: "5px",
            display: "inline-block",
          }}
        />
        <img
          src="/image/Nekostamp.webp"
          alt="stamp"
          style={{
            maxWidth: "100px",
            height: "auto",
            margin: "5px",
            display: "inline-block",
          }}
        />
        <img
          src="image/nekostamp2.gif"
          alt="stamp"
          style={{
            maxWidth: "100px",
            height: "auto",
            margin: "5px",
            display: "inline-block",
          }}
        />
        <img
          src="/image/strawberryaddict.gif"
          alt="stamp"
          style={{
            maxWidth: "100px",
            height: "auto",
            margin: "5px",
            display: "inline-block",
          }}
        />
        <img
          src="/image/keepdreaming.gif"
          alt="stamp"
          style={{
            maxWidth: "100px",
            height: "auto",
            margin: "5px",
            display: "inline-block",
          }}
        />
        <img
          src="/image/keyboard.gif"
          alt="keyboard"
          style={{ maxWidth: "100px", height: "auto", margin: "5px" }}
        />
      </div>
    </aside>
  );
}
