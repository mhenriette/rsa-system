import Image from "next/image";
import Link from "next/link";
import React from "react";

const Activity = ({ image, link, title, description }: any) => {
  return (
    <div className="bg-[#f2eafa]  drop-shadow shadow-indigo-700 rounded-lg overflow-hidden my-8">
      <div className="relative w-full h-[220px]">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="">{description}</p>
        <Link
          href={link}
          className="text-theme font-semibold hover:text-green-500"
        >
          Discover more {">"}
        </Link>
      </div>
    </div>
  );
};

export default Activity;
