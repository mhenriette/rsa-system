"use client"
import plus from "@/public/plus.svg";
import Image from "next/image";
import { useState } from "react";
import NewReportForm from "./NewReportForm";

export default function ReportsTitle() {
  const [showDialog, setShowDialog] = useState(false)
  const close = () => setShowDialog(false)
  const open = () => setShowDialog(true)
  return (
  <div className="flex justify-between items-center">
    <NewReportForm close={close} showDialog={showDialog} />
    <h1 className="text-green-500 font-medium text-3xl">Reports</h1>
    <button onClick={open} className="bg-[#36043A] text-white py-2 px-4 rounded-3xl flex gap-1.5 items-center text-lg"><Image src={plus} width={36} height={36} alt="plus" />  add new report</button>
  </div>
)
}