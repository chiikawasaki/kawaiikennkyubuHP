import React from "react";
import { newsData } from "../data/news";
import Link from "next/link";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const latestNews = newsData.slice(0, 3);
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="https://images.cooltext.com/5747850.gif"
          className="home-title-main"
          width={361}
          height={63}
          alt="かわいい研求部"
        />
        <div style={{ marginTop: "-10px" }}>
          <img
            src="https://images.cooltext.com/5747851.gif"
            className="home-title-sub"
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
          <NewsCard news={news} truncate={300} />
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
