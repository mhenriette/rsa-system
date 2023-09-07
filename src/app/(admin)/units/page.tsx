
import Link from "next/link";
import Image from "next/image";
import sort from "@/public/sort.svg";
import {  getUnits } from "@/lib/actions";
import { Unit } from "@prisma/client";
import UnitCard from "@/components/cards/UnitCard";

async function page() {
  const units:Unit[] = await getUnits();
  return (
    <div className="bg-[#E3E1E1] max-w-7xl mx-auto px-10 py-4">
      <div className="flex flex-col md:flex-row gap-2  md:justify-between p-5">
        <div className="flex items-center gap-2 text-lg font-normal">
          <span>Show</span>
          <input className="w-14 h-8 p-1" type="number" />
          <span>Entries</span>
        </div>
        <Link
          href="/units/new"
          className="text-white text-lg p-2 rounded-full bg-violet-900 px-4 md:px-10  py-3 font-medium text-center hover:bg-violet-600"
        >
          + Add Unit
        </Link>
      </div>
      <div className="bg-white">
        <div className="flex border-b solid border-b-[#1B1A1A] px-16 pt-4 pb-5">
          <span>Date</span>
          <Image src={sort} width={32} height={32} alt="sort" />
        </div>

        <div className="flex flex-wrap gap-6 p-5">
          {units.map((unit) => (
            <UnitCard name={unit.username} district={unit.district} key={unit.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
