"use client";
import { ActivityContext } from "@/store/activityContext";
import { useContext } from "react";
import Image from "next/image";
import scouts from "@/public/activity.png";
import { DonationContext } from "@/store/donationContext";
import ActivityView from "@/components/activities/ActivityView";

const Page = () => {
  const { activities }: any = useContext(DonationContext);
  if (!activities) return <h1>Loading....</h1>;
  return (
    <div className="flex bg-light px-32 py-20 flex-col gap-5">
      <h1 className="text-theme text-3xl font-extrabold">
        Explore coming Activites
      </h1>
      <div className="flex flex-col gap-5">
        {activities.map((activity: any) => (
          <ActivityView key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default Page;
