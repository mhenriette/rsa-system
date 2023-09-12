import ActivityCard from "@/components/cards/ActivityCard"
import Link from "next/link";
import Image from "next/image";
import sort from "@/public/sort.svg";
import { getActivities } from "@/lib/actions";

async function page() {
  const activities = await getActivities();
  return (
    <div className="max-w-7xl mx-auto px-10 py-4">
      <div className="flex flex-col md:flex-row gap-2  md:justify-between p-5">
        {/* <div className="flex items-center gap-2 text-lg font-normal">
          <span>Show</span>
          <input className="w-14 h-8 p-1" type="number" />
          <span>Entries</span>
        </div> */}
        <h1 className="text-green-500 text-2xl font-semibold">Activities</h1>
        <Link
          href="/activity/new"
          className="text-white text-lg p-2 rounded-full bg-violet-900 px-4 md:px-10  py-3 font-medium text-center hover:bg-violet-600"
        >
          + Add activity
        </Link>
      </div>
      {/* <div className=""> */}
      {/* <div className="flex border-b solid border-b-[#1B1A1A] px-16 pt-4 pb-5">
          <span>Date</span>
          <Image src={sort} width={32} height={32} alt="sort" />
        </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
        {activities.map((activity) => (
          <ActivityCard {...activity} key={activity.id} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default page;
