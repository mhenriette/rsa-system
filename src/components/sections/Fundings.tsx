import FundingSmallRow from "../ui/FundingSmallRow";

interface FundingsProps {
  fundings: any;
}

export default function Fundings({ fundings }: FundingsProps) {
  return (
    <div className="text-theme bg-white shadow-activity-shadow px-5">
      <div className="grid-cols-6 grid justify-between h-16 border-b border-b-theme border-opacity-50 items-center items-start- text-centers px-5">
        {/* <p className="font-medium ">Number</p> */}
        <p className="font-medium ">Names</p>
        <p className="font-medium">Email</p>
        <p className="font-medium px-14">Contact</p>
        <p className="font-medium px-14">Amount</p>
        <p className="font-medium px-14">Donating</p>
        <p className="font-medium px-14">Date</p>
      </div>
      {fundings.map((funding: any) => (
        <FundingSmallRow key={funding.id} funding={funding} />
      ))}
      <h1>generate</h1>
    </div>
  );
}
