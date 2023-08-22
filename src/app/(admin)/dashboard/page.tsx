// "use client";
import Members from "@/components/ui/Members";
import { useUser } from "@clerk/nextjs";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";

const DashboardPage = async () => {
  // const { isSignedIn, isLoaded, user } = useUser();
  const allUsers = await prisma.member.findMany();
  console.log(allUsers, "all userss");

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
