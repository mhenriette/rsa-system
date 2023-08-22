"use client";
import Members from "@/components/ui/Members";
import { useUser } from "@clerk/nextjs";

const DashboardPage = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  return (
    <div className="p-5">
      <div className="flex gap-x-3 items-center">
        <Members />
        <Members />
        <Members />
        <Members />
      </div>
    </div>
  );
};

export default DashboardPage;
