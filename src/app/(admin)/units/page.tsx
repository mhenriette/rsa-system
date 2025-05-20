
import Link from "next/link";
import Image from "next/image";
import sort from "@/public/sort.svg";
import {  getUnits } from "@/lib/actions";
import { Unit } from "@prisma/client";
import UnitCard from "@/components/cards/UnitCard";

async function page() {
  const units:Unit[] = await getUnits();
  return (
    <div className="max-w-7xl mx-auto px-10 py-4">
      <div className="flex flex-col md:flex-row gap-2  md:justify-between p-5">
        <h1 className="text-green-500 text-2xl font-semibold">Scout Units</h1>

        <Link
          href="/units/new"
          className="text-white text-lg p-2 rounded-full bg-violet-900 px-4 md:px-10  py-3 font-medium text-center hover:bg-violet-600"
        >
          + Add Unit
        </Link>
      </div>
      {/* <div className=""> */}
      {/* <div className="flex border-b solid border-b-[#1B1A1A] px-16 pt-4 pb-5">
          <span>Date</span>
          <Image src={sort} width={32} height={32} alt="sort" />
        </div> */}

      <div className="flex flex-wrap gap-6 p-5">
        {units.map((unit) => (
          <UnitCard
            name={unit.username}
            district={unit.district}
            key={unit.id}
          />
        ))}
      </div>
    </div>
    // </div>
  );
}

export default page;
