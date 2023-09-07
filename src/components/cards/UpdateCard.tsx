import React from "react";
import school from "../../../public/school.png";
import Image from "next/image";

const UpdateCard = ({ image, description, date }: any) => {
  return (
    <div className="bg-[#f2eafa]  drop-shadow shadow-indigo-700 rounded-lg overflow-hidden my-8">
      <div className="relative w-full h-[220px]">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <p className="">{description}</p>
        <p className="text-gray-500 font-semibold italic">{date}</p>
      </div>
    </div>
  );
};

export default UpdateCard;
