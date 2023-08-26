"use client";
import { useRef } from "react";
import ReactToPdf from "react-to-pdf";
import logo from "@/public/Logo.png";
import Image from "next/image";
import profile from "@/public/profile.jpg";

const MemberIdCertificate = ({
  id,
  First_name,
  last_name,
  category,
  unit,
  district,
}: {
  id: number;
  First_name: string;
  last_name: string;
  category: string;
  unit: string;
  district: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [7, 5],
  };
  return (
    <div className="h-screen flex justify-center flex-col gap-10 items-center">
      <div
        className="rounded bg-gradient-to-b from-blue-200 to-purple-200 text-white w-[40%] h-72 border border-gray-500 border-solid"
        id="certificate"
        ref={ref}
      >
        <div className=" bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600">
          <div className="py-4 px-10 flex justify-center">
            <Image width={60} height={40} alt="logo" src={logo} />
            <div className="flex flex-col gap-1 px-10 items-center text-2xl">
              <h1>Rwanda Scout Association</h1>
              <p>Membership Card</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-16 py-5">
          <div className="rounded-s-md h-[150px] w-[150px] bg-black relative overflow-hidden">
            <Image src={profile} fill alt="profile" priority />
          </div>
          <div className="flex  flex-col items-start gap-1 text-xl text-black font-medium">
            <h1>
              Name: {First_name} {last_name}
            </h1>
            <h1>Category: {category}</h1>
            <h1>Unit: {unit}</h1>
            <h1>District: {district}</h1>
            <h1>Member ID: {id}</h1>
          </div>
        </div>
      </div>
      <ReactToPdf
        targetRef={ref}
        filename={`${First_name}.pdf`}
        options={options}
      >
        {({ toPdf }: { toPdf: any }) => (
          <button
            onClick={toPdf}
            className="bg-purple-700 text-white font-bold rounded-md text-center px-10 py-4 hover:bg-purple-500"
          >
            Generate pdf
          </button>
        )}
      </ReactToPdf>
    </div>
  );
};

export default MemberIdCertificate;
