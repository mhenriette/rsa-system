import ApplicationRow from "@/components/ui/ApplicationRow";
import { getApplicants, getMembers } from "@/lib/actions";

const page = async () => {
  const members = await getMembers();
  const applicants = await getApplicants();
  console.log(applicants);
  return (
    <div className="p-3 pt-16">
      <div className="flex justify-between items-center">
        <h1 className="text-green-500 font-medium text-3xl">Applicants</h1>
      </div>
      <div className="text-black mt-9 bg-white px-5">
        <div className="grid grid-cols-7 h-16 border-b border-b-gray-800 border-opacity-50 items-center">
          <p className="font-medium">Name</p>
          <p className="font-medium">Requested unit</p>
          <p className="font-medium">Gender</p>
          <p className="font-medium">District</p>
          <p className="font-medium">Occupation</p>
          <p className="font-medium">Contact</p>
          <p className="font-medium">Actions</p>
        </div>
        {applicants.map((applicant) => (
          <ApplicationRow key={applicant.id} applicant={applicant} />
        ))}
      </div>
    </div>
  );
};

export default page;
