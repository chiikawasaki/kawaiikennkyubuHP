import React from "react";
import Image from "next/image";

interface BulletPointsProps {
  pointImage: string;
  text: React.ReactNode;
  emojiImage: string;
}

const BulletPoints = ({ pointImage, text, emojiImage }: BulletPointsProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image src={pointImage} alt="point image" width={20} height={20} />
      <p>{text}</p>
      <Image src={emojiImage} alt="emoji image" width={20} height={20} />
    </div>
  );
};

export default BulletPoints;
