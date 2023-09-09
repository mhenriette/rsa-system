import { FaFemale } from "react-icons/fa";
interface MembersProps {
  total: number;
}
const FemaleMembers = ({ total }: MembersProps) => {
  return (
    <div className="flex items-center justify-center p-5 rounded bg-white border-slate-400">
      <div className="flex gap-2 flex-col items-center">
        <p className="text-xl font-bold">{total}</p>
        <span className="text-sm font-medium text-slate-500">
          Female members
        </span>
      </div>
    </div>
  );
};

export default FemaleMembers;
