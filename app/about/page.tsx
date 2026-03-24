import React from "react";
import Image from "next/image";
import BulletPoints from "./components/BulletPoints";
import ActiveContentItem from "./components/ActiveContentItem";

const purposeOfActivity = [
  {
    text: (
      <>
        自分らしい
        <span style={{ color: "#ff1493" }}>「可愛い」</span>
        を楽しみながら、趣味や個性を大切にして理想の自分になること
      </>
    ),
    emojiImage: "/image/Emoji/KiraKiraEmoji.gif",
  },
  {
    text: "好きなことをきっかけに、共感し合える友達と出会える場所を作る",
    emojiImage: "/image/Emoji/IchigoHeartEmoji.gif",
  },
];

const charmPoints = [
  {
    text: "好きなことを自由に楽しめる",
    emojiImage: "/image/Emoji/MusicEmoji.gif",
  },
  {
    text: "まだ発足したばかりなので、一緒に団体を作り上げる経験ができる",
    emojiImage: "/image/Emoji/UpEmoji.gif",
  },
  {
    text: "「可愛い」が好きな仲間と繋がることができる",
    emojiImage: "/image/Emoji/KiraKiraEmoji.gif",
  },
];

export default function About() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px" }}>かわいい研求部とは？</h1>
        <p className="about-intro" style={{ marginBottom: "40px" }}>
          <span>一言で言うと、</span>
          <span style={{ color: "#ff1493" }}>
            かわいいことならなんでもやるサークル
          </span>
          <span>
            です
            <Image
              src="/image/Emoji/HousekiHeartEmoji.gif"
              alt="heart"
              width={20}
              height={20}
              style={{ display: "inline", verticalAlign: "middle" }}
            />
          </span>
        </p>
        <h2 style={{ marginBottom: "20px" }}>活動目的</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <div style={{ textAlign: "left", marginLeft: "20px" }}>
            {purposeOfActivity.map((point, index) => (
              <BulletPoints
                key={index}
                pointImage="/image/kirakiraHeart.gif"
                text={point.text}
                emojiImage={point.emojiImage}
              />
            ))}
          </div>
        </div>
        <h2 style={{ marginBottom: "20px" }}>サークルの魅力</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            {charmPoints.map((point, index) => (
              <BulletPoints
                key={index}
                pointImage="/image/kirakiraHeart.gif"
                text={point.text}
                emojiImage={point.emojiImage}
              />
            ))}
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <Image
            src="/image/RibbonLine.gif"
            alt="heart"
            width={100}
            height={20}
          />
        </div>
        <h2 style={{ marginBottom: "30px" }}>活動内容</h2>
        <ActiveContentItem
          image="/image/about/Nail.jpeg"
          content={
            <>
              <p>ネイルを作る会</p>
              <Image
                src="/image/Emoji/NikukyuEmoji.gif"
                alt="nail"
                width={20}
                height={20}
              />
              <p>をやったり...</p>
            </>
          }
          isOdd={true}
        />
        <ActiveContentItem
          image="/image/about/Headdress.jpeg"
          content={
            <>
              <p>ヘッドドレス</p>
              <Image
                src="/image/Emoji/RibbonEmoji.gif"
                alt="nail"
                width={20}
                height={20}
              />
              <p>を作ったり...</p>
            </>
          }
          isOdd={false}
        />
        <ActiveContentItem
          image="/image/about/Hayama.jpeg"
          content={
            <>
              夏合宿では、葉山に行きました
              <Image
                src="/image/Emoji/KiraKiraEmoji.gif"
                alt="nail"
                width={20}
                height={20}
              />
            </>
          }
          isOdd={true}
        />
        <ActiveContentItem
          image="/image/about/Tarot.jpeg"
          content={
            <>
              <p>文化祭ではタロット占いをしました</p>
              <Image
                src="/image/Emoji/NikukyuEmoji.gif"
                alt="nail"
                width={20}
                height={20}
              />
            </>
          }
          isOdd={false}
        />
        <div style={{ textAlign: "center", marginTop: "100px" , marginBottom: "50px" ,justifyContent: "center"}}>
          <p>可愛いことならなんでもやる予定です！</p>
          <p>何かやりたいことがあったらお気軽にお申し付けください</p>
          <p>日々の活動は<a href="/news">News</a>で随時報告するので、欠かさずチェックしてね</p>
        </div>
      </div>
    </>
  );
}
