import Applicants from "@/components/sections/Applicants";
import Reports from "@/components/sections/Reports";
import Members from "@/components/ui/Members";
import { getApplicants, getMembers, getReports } from "@/lib/actions";
const DashboardPage = async () => {
  const members = await getMembers();
  const reports = await getReports();
  const applicants = await getApplicants();
  return (
    <div className="p-5">
      <div className="flex gap-x-3 items-center">
        <Members total={members.length} />
      </div>
      <div className="mt-5">
        <h2 className="italic font-medium text-lg">New applications</h2>
        <Applicants applicants={applicants} />
      </div>
      <div className="mt-5 flex">
        <div className="flex-[2]"></div>
        <div className="flex-1">
          <h2 className="italic font-medium text-lg">reports</h2>
          <Reports reports={reports} />
        </div>
        
      </div>
    </div>
  );
};

export default DashboardPage;
