import FundingsTitle from "@/components/sections/FundingsTitle";
import FundingRow from "@/components/ui/FundingRow";
import { getFundings } from "@/lib/actions";

const page = async () => {
  const fundings = await getFundings();
  return (
    <div className="p-3 pt-5">
      <FundingsTitle />
      <div className="mt-9 bg-white px-5 py-10 flex gap-10 flex-wrap h-screen overflow-y-scroll donation">
        {fundings.map((funding) => (
          <FundingRow key={funding.id} funding={funding} />
        ))}
      </div>
    </div>
  );
};

export default page;
