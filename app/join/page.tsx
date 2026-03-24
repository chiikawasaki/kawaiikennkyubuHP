import React from "react";
import Image from "next/image";

export default function Join() {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#ff69b4", fontSize: "28px", marginBottom: "20px" }}>
          <span style={{ color: "#d4af37" }}>✧</span> 入部までの流れ{" "}
          <span style={{ color: "#d4af37" }}>✧</span>
        </h1>
      </div>

      <div
        style={{
          padding: "30px",
          margin: "0 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>

          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "300px",
                padding: "20px 30px",
                backgroundColor: "#ffe4e1",
                borderRadius: "10px",
                border: "2px solid #ff69b4",
              }}
            >
              <div style={{ fontSize: "18px", fontWeight: "bold", color: "#ff1493", marginBottom: "10px" }}>
                STEP 1
              </div>
              <div style={{ fontSize: "16px" }}>
                X または Instagram の<br />DMで連絡
              </div>
            </div>

            <div style={{ fontSize: "24px", color: "#ff69b4" }}>↓</div>

            <div
              style={{
                width: "300px",
                padding: "20px 30px",
                backgroundColor: "#ffe4e1",
                borderRadius: "10px",
                border: "2px solid #ff69b4",
              }}
            >
              <div style={{ fontSize: "18px", fontWeight: "bold", color: "#ff1493", marginBottom: "10px" }}>
                STEP 2
              </div>
              <div style={{ fontSize: "16px" }}>
                体験参加
              </div>
            </div>

            <div style={{ fontSize: "24px", color: "#ff69b4" }}>↓</div>

            <div
              style={{
                width: "300px",
                padding: "20px 30px",
                backgroundColor: "#ffe4e1",
                borderRadius: "10px",
                border: "2px solid #ff69b4",
              }}
            >
              <div style={{ fontSize: "18px", fontWeight: "bold", color: "#ff1493", marginBottom: "10px" }}>
                STEP 3
              </div>
              <div style={{ fontSize: "16px" }}>
                気に入ってくれたら入部
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "25px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              border: "2px dashed #ff69b4",
              marginBottom: "30px",
            }}
          >
            <div style={{ fontSize: "16px", lineHeight: "2", textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
              <p style={{ margin: "0 0 15px 0", display: "flex", alignItems: "center" }}>
                <Image
                  src="/image/Emoji/HousekiHeartEmoji.gif"
                  alt="emoji"
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                <strong>部費：</strong> 500円
              </p>
              <p style={{ margin: "0 0 15px 0", display: "flex", alignItems: "center" }}>
                <Image
                  src="/image/Emoji/MusicEmoji.gif"
                  alt="emoji"
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                <strong>活動頻度：</strong>月に1回~3回
              </p>
              <p style={{ margin: "0 0 15px 0", display: "flex", alignItems: "center" }}>
                <Image
                  src="/image/Emoji/RibbonEmoji.gif"
                  alt="emoji"
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                <strong>兼部大歓迎！</strong>
              </p>
              <p style={{ margin: "0 0 15px 0", display: "flex", alignItems: "center" }}>
                <Image
                  src="/image/Emoji/IchigoHeartEmoji.gif"
                  alt="emoji"
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                1年生はもちろん、2年生からなど、途中からの入部も歓迎です！
              </p>
              <p style={{ margin: "0 0 15px 0", display: "flex", alignItems: "center" }}>
                <Image
                  src="/image/Emoji/KiraKiraEmoji.gif"
                  alt="emoji"
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                必要なのは、可愛いを楽しむ心のみ！
              </p>
              <p style={{ margin: "0", display: "flex", alignItems: "center" }}>
                <Image
                  src="/image/Emoji/NikukyuEmoji.gif"
                  alt="emoji"
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                ご気軽にご連絡ください！
              </p>
            </div>
          </div>

          <p style={{ fontSize: "14px", color: "#666", marginTop: "20px" }}>
            ※新歓期間はXで体験会を告知する予定があります
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "50px", fontSize: "16px" }}>
          SNSアカウントは<a href="/links" style={{ color: "#ff1493", textDecoration: "underline" }}>こちら</a>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Image
          src="/image/RibbonLine.gif"
          alt="ribbon"
          width={100}
          height={20}
        />
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#999" }}>
          みんなで一緒に可愛いを楽しみましょう💕
        </p>
      </div>
    </>
  );
}

