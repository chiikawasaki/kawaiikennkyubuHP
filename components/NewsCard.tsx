import React from "react";
import { NewsItem } from "../data/news";

function replaceEmojis(text: string) {
  const parts = text.split(/(❤︎|💖|❤️|🎀)/);
  return parts.map((part, index) => {
    if (part === "❤︎" || part === "💖" || part === "❤️") {
      return (
        <img
          key={index}
          src="/image/Emoji/HousekiHeartEmoji.gif"
          alt="heart"
          style={{ width: "20px", height: "20px", display: "inline", verticalAlign: "middle", margin: "0 3px" }}
        />
      );
    }
    if (part === "🎀") {
      return (
        <img
          key={index}
          src="/image/Emoji/RibbonEmoji.gif"
          alt="ribbon"
          style={{ width: "20px", height: "20px", display: "inline", verticalAlign: "middle", margin: "0 3px" }}
        />
      );
    }
    return part;
  });
}

interface NewsCardProps {
  news: NewsItem;
  truncate?: number;
}

export default function NewsCard({ news, truncate }: NewsCardProps) {
  const content = truncate && news.content.length > truncate
    ? news.content.substring(0, truncate) + "..."
    : news.content;

  return (
    <div className="news-card">
      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className="news-card-image"
        />
      )}
      <div className="news-card-body">
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ color: "#ff1493", fontSize: "12px", marginRight: "10px" }}>
            {news.date}
          </span>
        </div>
        <h2 style={{ marginTop: "0" }}>{news.title}</h2>
        <p style={{ textAlign: "left", lineHeight: 2, marginRight: "20px" }}>
          {replaceEmojis(content)}
        </p>
      </div>
    </div>
  );
}
