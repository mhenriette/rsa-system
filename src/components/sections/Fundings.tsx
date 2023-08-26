
import FundingSmallRow from "../ui/FundingSmallRow";

interface FundingsProps {
    fundings: any
  }

export default function Fundings({ fundings }: FundingsProps) {
  return       (
  <div className="text-black bg-white px-5">
    <div className="grid grid-cols-3 h-16 border-b border-b-gray-800 border-opacity-50 items-center">
    <p className="font-medium">About</p>
    <p className="font-medium">Target</p>
    <p className="font-medium">Date published</p>
  </div>
  {fundings.map((funding:any) => (
    <FundingSmallRow key={funding.id} funding={funding} />
  ))}
</div>)
}