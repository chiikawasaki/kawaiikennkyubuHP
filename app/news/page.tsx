import React from "react";
import { newsData } from "../../data/news";
import Image from "next/image";

export default function News() {
  const replaceEmojis = (text: string) => {
    // ハート絵文字とリボン絵文字を画像に置き換える関数
    const parts = text.split(/(❤︎|💖|❤️|🎀)/);
    return parts.map((part, index) => {
      if (part === '❤︎' || part === '💖' || part === '❤️') {
        return (
          <img 
            key={index}
            src="/image/Emoji/HousekiHeartEmoji.gif" 
            alt="heart" 
            style={{width: '20px', height: '20px', display: 'inline', verticalAlign: 'middle', margin: '0 3px'}} 
          />
        );
      }
      if (part === '🎀') {
        return (
          <img 
            key={index}
            src="/image/Emoji/RibbonEmoji.gif" 
            alt="ribbon" 
            style={{width: '20px', height: '20px', display: 'inline', verticalAlign: 'middle', margin: '0 3px'}} 
          />
        );
      }
      return part;
    });
  };
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="https://images.cooltext.com/5747844.gif"
          width={212}
          height={64}
          alt="新着情報"
        />
      </div>

      <div style={{ padding: "0 20px" }}>
        {newsData.map((news, index) => (
          <div key={news.id}>
            <div
              style={{
                display: "flex",
                border: "5px solid",
                borderImage: "url(/image/GlitterHeartBG.gif) 50",
                padding: "5px",
                marginBottom: "20px",
                minHeight: "200px",
                alignItems: "flex-start",
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
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  marginLeft: "20px",
                  minWidth: "400px",
                  flex: "1",
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
                  {replaceEmojis(news.content)}
                </p>
              </div>
            </div>
            {index < newsData.length - 1 && (
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
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Image
          src="/image/RibbonLine.gif"
          alt="ribbon"
          width={100}
          height={20}
        />
      </div>
    </>
  );
}

