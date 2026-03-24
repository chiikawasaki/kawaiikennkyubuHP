import React from "react";
import Image from "next/image";

interface ActiveContentItemProps {
  image: string;
  content: React.ReactNode;
  isOdd: boolean;
}
const ActiveContentItem = ({
  image,
  content,
  isOdd,
}: ActiveContentItemProps) => {
  return (
    <div className="activity-item">
      {isOdd ? (
        <>
          <Image
            src={image}
            alt="nail"
            width={200}
            height={200}
            style={{
              borderRadius: "10px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
              flexShrink: 0,
            }}
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
            style={{
              borderRadius: "10px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ActiveContentItem;
