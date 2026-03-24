import React from "react";
import Image from "next/image";

interface ActiveContentItemProps {
  image: string;
  content: React.ReactNode; // <p>タグの中身全体（文字とImageを含む）
  isOdd: boolean;
}
const ActiveContentItem = ({
  image,
  content,
  isOdd,
}: ActiveContentItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "100px",
        marginTop: "50px",
        marginBottom: "30px",
      }}
    >
      {isOdd ? (
        <>
          <Image
            src={image}
            alt="nail"
            width={200}
            height={200}
            style={{ borderRadius: "10px" }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>{content}</div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>{content}</div>
          <Image
            src={image}
            alt="nail"
            width={200}
            height={200}
            style={{ borderRadius: "10px" }}
          />
        </>
      )}
    </div>
  );
};

export default ActiveContentItem;
