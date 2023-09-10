"use client";
import { deactivateMember } from "@/lib/actions";
import Link from "next/link";

export default function MemberRow({ member }: any) {
  return (
    <div className="grid grid-cols-7 gap-1 leading-[21.6px] text-base text-gray-700 h-16 items-center border-b border-b-[#1B1A1A] border-opacity-10">
      <p>
        {member.First_name} {member.last_name}
      </p>
      <p>{member.unit_name}</p>
      <p>{member.address}</p>
      <p>{member.district}</p>
      <p>{member.occupation}</p>
      <p>{member.contact}</p>
      <div className="flex gap-2">
        {/* <button className="py-px px-2 bg-gray-300 rounded-full">Edit</button> */}
        <button
          className="py-px px-2 bg-red-400 text-white rounded-full"
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to deactivate member"
              )
            ) {
              deactivateMember(member.id);
            }
          }}
        >
          Deactivate
        </button>
        <Link className="py-px px-2 bg-gray-300 rounded-full block" href={`members/${member.id}`}>Edit</Link>
      </div>
    </div>
  );
}
