import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        gridArea: "header",
        backgroundColor: "#ffffff",
        border: "3px double #ff69b4",
        padding: "15px",
        boxShadow: "0 0 10px rgba(255, 105, 180, 0.5)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "1.5em",
            color: "#ff69b4",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "#d4af37" }}>♛</span>
          Love & Princess
          <span style={{ color: "#d4af37" }}>♛</span>
          <br />
          <span style={{ fontSize: "14px" }}>～かわいい研求部ＨＰ～</span>
        </div>
      </div>
    </header>
  );
}
