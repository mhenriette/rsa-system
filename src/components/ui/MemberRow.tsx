export default function MemberRow({ member }: any) {
  return (
    <div className="grid grid-cols-6 leading-[21.6px] text-base text-gray-700 h-16 items-center border-b border-b-[#1B1A1A] border-opacity-10">
      <p>{member.First_name} {member.last_name}</p>
      <p>{member.unit_name}</p>
      <p>{member.address}</p>
      <p>{member.district}</p>
      <p>{member.occupation}</p>
      <p>{member.contact}</p>
    </div>
  );
}