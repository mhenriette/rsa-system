import FundingsTitle from "@/components/sections/FundingsTitle";
import FundingRow from "@/components/ui/FundingRow";
import { getFundings } from "@/lib/actions";

const page = async () => {
  const fundings = await getFundings();
  return (
    <div className="p-3 pt-16">
      <FundingsTitle />
      <div className="text-black mt-9 bg-white px-5">
        <div className="grid grid-cols-5 h-16 border-b border-b-gray-800 border-opacity-50 items-center">
          <p className="font-medium">About</p>
          <p className="font-medium">Target</p>
          <p className="font-medium">Date published</p>
          <p className="font-medium">action</p>
        </div>
        {fundings.map((funding) => (
          <FundingRow key={funding.id} funding={funding} />
        ))}
      </div>
    </div>
  );
};

export default page;
