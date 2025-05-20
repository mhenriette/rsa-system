"use client";
import { Donation } from "@prisma/client";
import "@reach/dialog/styles.css";
import { useState } from "react";

function formatDate(date: any) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export default function FundingSmallRow({ funding }: any) {
  // const [showDialog, setShowDialog] = useState(false);
  // const close = () => setShowDialog(false);
  // const open = () => setShowDialog(true);
  return (
    <div className="grid grid-cols-6 justify-between- items-center leading-[21.6px] text-base text-theme h-16 items-center- border-b border-b-[#1B1A1A] border-opacity-10 text-center">
      {/* <p>{funding.id}</p> */}
      <p>{funding.name}</p>
      <p>{funding.email}</p>
      <p>{funding.contact}</p>
      <p>{funding.amount}</p>
      <p>{funding.donation_id}</p>
      <p>{formatDate(new Date(funding.processed_at))}</p>
    </div>
  );
}
