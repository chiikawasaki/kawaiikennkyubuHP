import React from "react";
import { newsData } from "../data/news";
import Link from "next/link";

export default function Home() {
  // 最新3件のニュースを取得
  const latestNews = newsData.slice(0, 3);
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="https://images.cooltext.com/5747850.gif"
          width={361}
          height={63}
          alt="かわいい研求部"
        />
        <div style={{ marginTop: "-10px" }}>
          <img
            src="https://images.cooltext.com/5747851.gif"
            width={80}
            height={56}
            alt="HP"
          />
        </div>
      </div>

      <div
        style={{
          background: "#ffe4e1",
          color: "#d14787",
          border: "1px solid #ff69b4",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "4px 0",
          fontSize: "12px",
          backgroundImage: "url(/image/HeartTileBG.png)",
        }}
      >
        <div className="marquee-text">
          HP作りました！可愛いことならなんでもやります！応援してね❤︎
        </div>
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        ここは<span style={{ color: "#ff1493" }}>成蹊大学かわいい研求部</span>
        の<br />
        公式ホムペだよ<span style={{ color: "#ff1493" }}>❤</span>
        <br />
        <br />
        足跡残していってね<span style={{ color: "#d4af37" }}>✝</span>
      </div>

      <div
        style={{
          borderTop: "2px dotted #ffb6c1",
          borderBottom: "2px dotted #ffb6c1",
          height: "4px",
          margin: "15px 0",
        }}
      ></div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img
          src="https://images.cooltext.com/5747844.gif"
          width={212}
          height={64}
          alt="新着情報"
        />
      </div>

      {latestNews.map((news, index) => (
        <div key={news.id}>
          <div
            style={{
              display: "flex",
              border: "5px solid",
              borderImage: "url(/image/GlitterHeartBG.gif) 50",
              padding: "5px",
              marginBottom: "20px",
            }}
          >
            {news.image && (
              <img
                src={news.image}
                alt={news.title}
                style={{ width: "300px", height: "auto", objectFit: "cover" }}
              />
            )}
            <div
              style={{
                flexDirection: "column",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "#ff1493",
                    fontSize: "12px",
                    marginRight: "10px",
                  }}
                >
                  {news.date}
                </span>
              </div>
              <h2 style={{ marginTop: "0" }}>{news.title}</h2>
              <p
                style={{
                  textAlign: "left",
                  lineHeight: 2,
                  marginRight: "20px",
                }}
              >
                {news.content.length > 300
                  ? news.content.substring(0, 300) + "..."
                  : news.content}
              </p>
            </div>
          </div>
          {index < latestNews.length - 1 && (
            <div
              style={{
                borderTop: "2px dotted #ffb6c1",
                borderBottom: "2px dotted #ffb6c1",
                height: "4px",
                margin: "15px 0",
              }}
            ></div>
          )}
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          href="/news"
          style={{
            color: "#ff1493",
            textDecoration: "underline",
            fontSize: "14px",
          }}
        >
          もっと見る →
        </Link>
      </div>
    </>
  );
}
