import { FaFemale } from "react-icons/fa"
interface MembersProps {
    total: number
}
const FemaleMembers = ({ total }: MembersProps) => {
    return <div className="flex items-center justify-center p-3 rounded bg-gray-500">
      
        <div className="flex flex-col items-center">
            <p className="text-xl font-bold">{total}</p>
            <span className="flex gap-0.5"><FaFemale /> Female members</span>
        </div>


    </div>;
};

export default FemaleMembers;
