import Image from "next/image";
import Link from "next/link";
import React from "react";

const Activity = ({ image, link, title, description }: any) => {
  return (
    <div>
      <div className="relative w-full h-16">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
      <div className="pt-5 flex flex-col">
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
        <Link href={link} className="text-theme">
          Discover more {">"}
        </Link>
      </div>
    </div>
  );
};

export default Activity;
