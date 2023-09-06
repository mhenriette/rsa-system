"use client";
import { Donation } from "@prisma/client";
import "@reach/dialog/styles.css";
import { useState } from "react";
import FundingDetails from "../sections/FundingDetails";
import donationpic from "../../../public/Donation.png";
import Image from "next/image";

function formatDate(date: any) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export default function FundingRow({ funding }: { funding: Donation }) {
  const [showDialog, setShowDialog] = useState(false);
  const close = () => setShowDialog(false);
  const open = () => setShowDialog(true);
  const create_at = formatDate(funding.created_at);
  return (
    <div className="bg-purple-300 rounded-lg w-[30%]">
      <div className="w-full h-40 relative">
        <Image
          src={donationpic}
          alt="donation_pic"
          fill
          className="object-cover"
        />
      </div>
      <div className="py-4 px-2">
        <h1 className="font-semibold text-lg py-2">{funding.title}</h1>
        <p className="line-clamp-6">{funding.about}</p>
        <div className="flex justify-between items-center py-5 text-gray-500">
          {" "}
          <p>
            <span>Target: </span>${funding.target}
          </p>
          <p>
            <span> Paid Amount: </span> ${funding.paidAmount}
          </p>
        </div>

        <p className="text-gray-500">{create_at}</p>
      </div>
    </div>
  );
}
