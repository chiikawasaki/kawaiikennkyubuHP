import React from "react";
import { newsData } from "../../data/news";
import Image from "next/image";
import NewsCard from "../../components/NewsCard";

export default function News() {
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
            <NewsCard news={news} />
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

