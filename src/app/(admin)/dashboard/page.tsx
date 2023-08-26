import Applicants from "@/components/sections/Applicants";
import Fundings from "@/components/sections/Fundings";
import Reports from "@/components/sections/Reports";
import FemaleMembers from "@/components/ui/FemaleMember";
import MaleMembers from "@/components/ui/MaleMember";
import Members from "@/components/ui/Members";
import { getApplicants, getFundings, getMembers, getReports } from "@/lib/actions";
const DashboardPage = async () => {
  const members = await getMembers();
  const reports = await getReports();
  const applicants = await getApplicants();
  const fundings = await getFundings();
  return (
    <div className="p-5">
      <div className="flex gap-x-3 items-center">
        <Members total={members.length} />
        <FemaleMembers total={members.slice(0, 20).length} />
        <MaleMembers total={members.slice(20).length} />
      </div>
      <div className="mt-5">
        <h2 className="italic font-medium text-lg">New applications</h2>
        <Applicants applicants={applicants} />
      </div>
      <div className="mt-5 flex gap-2">
        <div className="flex-[3]">
        <h2 className="italic font-medium text-lg">Latest funding request</h2>
          <Fundings fundings={fundings} />
        </div>
        <div className="flex-[2]">
          <h2 className="italic font-medium text-lg">Latest reports</h2>
          <Reports reports={reports} />
        </div>
        
      </div>
    </div>
  );
};

export default DashboardPage;
