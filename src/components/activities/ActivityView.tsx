import Image from "next/image";
import scouts from "@/public/scout_activity.png";
import Link from "next/link";

const ActivityView = ({ activity }: any) => {
  function formatDateToDdMmYyyy(inputDate: Date) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0"); // Get day with leading zero
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month with leading zero
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  const formatDate = formatDateToDdMmYyyy(activity.date);
  return (
    <div className="shadow-activity-shadow- text-theme border-solid border bg-[#e3ccf9] p-5 rounded-md shadow-light shadow-md flex flex-col items-start ">
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-2 w-[50%]">
          <Image
            objectFit="cover"
            width={140}
            height={140}
            priority
            alt="about"
            src={scouts}
          />
          <h1 className="font-bold text-2xl">{activity.name}</h1>
          <p className="font-medium text-lg">Venue: {activity.venue}</p>
        </div>
        <div className="w-[50%]">
          <p>{activity.description}</p>
          <p className="pt-3 font-medium text-lg">Date: {formatDate}</p>
          {/* <p>{`Created by:${activity.admin_id}`}</p>
        {activity.districtManagerId && (
          <p>{`Created by:${activity.districtManagerId}`}</p>
        )}
        {activity.unitLeaderId && (
          <p>{`Created by:${activity.unitLeaderId}`}</p>
        )} */}
        </div>
      </div>
      <Link
        href={`activities/${activity.id}`}
        className="text-white font-bold bg-green-700 py-3 my-4 px-5 hover:bg-opacity-70"
      >
        Joing this Activity
      </Link>
    </div>
  );
};

export default ActivityView;
