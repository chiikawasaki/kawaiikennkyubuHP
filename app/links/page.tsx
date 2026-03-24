import React from "react";
import Image from "next/image";

export default function Links() {
  const links = [
    {
      category: "公式SNS",
      items: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/otomeism_seikei",
          description: "かわいい研求部の日常を発信中！",
        },
        {
          name: "X (Twitter)",
          url: "https://twitter.com/otomeism_seikei",
          description: (
            <>
              最新情報をお届けします
              <img
                src="/image/Emoji/IchigoHeartEmoji.gif"
                alt="heart"
                style={{
                  width: "20px",
                  height: "20px",
                  display: "inline",
                  verticalAlign: "middle",
                  marginLeft: "5px",
                }}
              />
            </>
          ),
        },
      ],
    },
    {
      category: "成蹊大学関連",
      items: [
        {
          name: "成蹊大学",
          url: "https://www.seikei.ac.jp/",
          description: "成蹊大学公式サイト",
        },
      ],
    },
  ];

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#ff69b4", fontSize: "28px" }}>
          <span style={{ color: "#d4af37" }}>✧</span> LINK{" "}
          <span style={{ color: "#d4af37" }}>✧</span>
        </h1>
        <p style={{ fontSize: "14px", color: "#666" }}>
          かわいい研求部と関連のあるリンク集です
        </p>
      </div>

      <div style={{ padding: "0 20px" }}>
        {links.map((linkGroup, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            <h2
              style={{
                color: "#ff1493",
                fontSize: "20px",
                borderBottom: "2px solid #ffb6c1",
                paddingBottom: "8px",
                marginBottom: "20px",
              }}
            >
              {linkGroup.category}
            </h2>

            <div style={{ paddingLeft: "10px" }}>
              {linkGroup.items.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  style={{
                    marginBottom: "20px",
                    padding: "15px",
                    border: "2px solid #ffe4e1",
                    borderRadius: "8px",
                    backgroundColor: "#fffaf0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      margin: "0 0 8px 0",
                      color: "#ff69b4",
                    }}
                  >
                    <img
                      src="/image/Emoji/HousekiHeartEmoji.gif"
                      alt="heart"
                      style={{
                        width: "20px",
                        height: "20px",
                        display: "inline",
                        verticalAlign: "middle",
                        marginRight: "5px",
                      }}
                    />
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "#ff69b4",
                      }}
                    >
                      {link.name}
                    </a>
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: "1.6",
                    }}
                  >
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
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
