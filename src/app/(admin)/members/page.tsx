import plus from "@/public/plus.svg";
import Image from "next/image";
import { getMembers } from "@/lib/actions";
import MemberRow from "@/components/ui/MemberRow";


const page = async () => {
  const members = await getMembers()
  return (
    <div className="p-3 pt-16">
      
      <div className="flex justify-between items-center">
        <h1 className="text-green-500 font-medium text-3xl">Members</h1>
        <button className="bg-[#36043A] text-white py-2 px-4 rounded-3xl flex gap-1.5 items-center text-lg"><Image src={plus} width={36} height={36} alt="plus" />  add new member</button>
      </div>
      <div className="text-black mt-9 bg-white px-5">
        <div className="grid grid-cols-6 h-16 border-b border-b-gray-800 border-opacity-50 items-center">
          <p className="font-medium">Name</p>
          <p className="font-medium">Unit name</p>
          <p className="font-medium">Address</p>
          <p className="font-medium">District</p>
          <p className="font-medium">Occupation</p>
          <p className="font-medium">Contact</p>
        </div>
        {members.map((member) => (<MemberRow key={member.id} member={member} />))}
      </div>
      
    </div>
  );
};

export default page;
