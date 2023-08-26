"use client";
import { Donation } from "@prisma/client";
import "@reach/dialog/styles.css";
import { useState } from "react";
import FundingDetails from "../sections/FundingDetails";

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
  return (
    <div className="grid grid-cols-5 leading-[21.6px] text-base text-gray-700 h-16 items-center border-b border-b-[#1B1A1A] border-opacity-10">
      <p>{funding.about}</p>
      <p>{funding.target}</p>
      <p>{formatDate(new Date(funding.created_at))}</p>
      <div className="flex flex-col items-start gap-1">
        <button className="underline" onClick={open}>
          read more
        </button>
        <button className="text-red-400">delete</button>
      </div>
      <FundingDetails close={close} showDialog={showDialog} funding={funding} />
    </div>
  );
}
