import { FaFemale } from "react-icons/fa"
interface MembersProps {
    total: number
}
const Members = ({ total }: MembersProps) => {
    return <div className="flex items-center justify-center p-3 rounded bg-gray-500">
        <FaFemale />
        <div className="flex flex-col items-center">
            <p className="text-xl font-bold">{total}</p>
            <span>Members</span>
        </div>


    </div>;
};

export default Members;
