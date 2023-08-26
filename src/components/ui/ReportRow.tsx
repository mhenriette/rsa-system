"use client"
import { useState } from "react";
import ReportDetails from "../sections/ReportDetails";
import "@reach/dialog/styles.css";
import { Report } from "@prisma/client";

function formatDate(date:any) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}


export default function ReportRow({ report }: { report: Report}) {
  const [showDialog, setShowDialog] = useState(false)
  const close = () => setShowDialog(false)
  const open = () => setShowDialog(true)
  return (
    <div className="grid grid-cols-5 leading-[21.6px] text-base text-gray-700 h-16 items-center border-b border-b-[#1B1A1A] border-opacity-10">
      <p>{report.author}</p>
      <p>{report.type}</p>
      <p>{formatDate(new Date(report.created_at))}</p>
      <p>{report.status}</p>

      <div className="flex flex-col items-start gap-1" >
        <button className="underline" onClick={open}>read more</button>
        <button className="text-red-400">delete</button>
      </div>
      <ReportDetails close={close} showDialog={showDialog} report={report} />
    </div>
  );
}