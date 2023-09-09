import React from "react";
import scoutss from "@/public/camping.jpg";
import Image from "next/image";
import Link from "next/link";

const DonationCard = ({ donation }: { donation: any }) => {
  return (
    <Link
      className="m-5 rounded-md bg-light shadow"
      href={`/donate/${donation.id}`}
    >
      <div className="relative h-52 w-full rounded-md overflow-hidden">
        <Image src={scoutss} fill priority alt="logo" />
        <div className="bg-green-600 m-3 text-white font-medium py-2 px-4 rounded-md absolute top-0 right-0">
          Active
        </div>
      </div>
      <div className="flex flex-col gap-y-3 my-3 p-3">
        <h1 className="text-theme font-bold text-xl">{donation.title}</h1>
        <p className="text-[#0c0d2c] line-clamp-4">{donation.about}</p>
        <div className="flex justify-between">
          <p>Paid Amount: {donation.paidAmount}</p>
          <p>Target: {donation.target}</p>
        </div>
        <div>{donation.created_at}</div>
      </div>
    </Link>
  );
};

export default DonationCard;
