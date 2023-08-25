import MemberIdCard from "@/components/certificate/MemberIdCertificate";
import Members from "@/components/ui/Members";
import { getUsers } from "@/lib/actions";

const DashboardPage = async () => {
  const usersWithNoId = await getUsers();
  return (
    <div className="p-5">
      <div className="flex gap-x-3 items-center">
        <Members />
        <Members />
        <Members />
        <Members />
      </div>
      <div>
        {usersWithNoId.map((user, key) => (
          <h1 key={key}>{user.email}</h1>
        ))}
      </div>
      <div className="bg-gray-400 p-10">
        <MemberIdCard />

        <button className="bg-orange-400 text-white m-5 p-5">
          Dowload Certificate
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
