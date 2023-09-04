import Image from "next/image";
import React from "react";
import activityImg from "../../../public/scout_activity.png";
interface ActivityCardProps {
  id: String;
  name: String;
  venue: String;
  date: Date;
  description: String;
  admin_id?: Number | null;
  districtManagerId?: Number | null;
  unitLeaderId?: Number | null;
}

const ActivityCard = async ({
  name,
  venue,
  date,
  description,
  admin_id,
  districtManagerId,
  unitLeaderId,
}: ActivityCardProps) => {
  function formatDateToDdMmYyyy(inputDate: Date) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0"); // Get day with leading zero
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month with leading zero
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  const formatDate = formatDateToDdMmYyyy(date);

  return (
    <div className="bg-[#EAEAEA] shadow-activity-shadow border-solid border">
      <div className="py-10 px-16 rounded-lg">
        <div className="flex flex-col md:flex-row flex-1 items-center gap-8">
          <div className="flex flex-col gap-3">
            <Image
              objectFit="cover"
              width={140}
              height={140}
              priority
              alt="about"
              src={activityImg}
            />
            <span className="text-xl text-center font-bold">SCOUNT CAMP</span>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-lg">{name}</h1>
            <p>Venue: {venue}</p>
            <p>Date: {formatDate}</p>
            <p>{description}</p>
            <p>{`Created by:${admin_id}`}</p>
            {districtManagerId && <p>{`Created by:${districtManagerId}`}</p>}
            {unitLeaderId && <p>{`Created by:${unitLeaderId}`}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
