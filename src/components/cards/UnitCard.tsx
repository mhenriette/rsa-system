import Image from "next/image";
import React from "react";
import activityImg from "../../../public/scout_activity.png";
interface UnitCardProps {
  name: String;
  district: String;
}

const UnitCard = async ({
  name,
  district
}: UnitCardProps) => {

  return (
    <div className="bg-[#EAEAEA] shadow-activity-shadow border-solid border">
      <div className="min-w-[200px] aspect-square grid justify-center rounded-lg py-2">
        <div className="flex flex-col md:flex-row flex-1 w-full items-center gap-8">
          <div className="flex flex-col gap-3">
            <Image
              objectFit="cover"
              width={140}
              height={140}
              priority
              alt="about"
              src={activityImg}
            />
            <span className="text-xl text-center font-bold">{name}</span>
            <span className="text-center -mt-4 text-sm text-slate-600">{district}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
