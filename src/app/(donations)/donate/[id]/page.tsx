"use client";
import PaymentCard from "@/components/DonationSections/PaymentCard";
import { DonationContext } from "@/store/donationContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
const Page = () => {
  const { donations }: any = useContext(DonationContext);
  const { id } = useParams();
  const donation = donations.filter(
    (donation: any) => donation.id.toString() === id
  )[0];
  return (
    <div className="bg-gradient-to-r from-black to-theme flex px-32 justify-between py-32">
      <div className="text-white w-1/2 flex flex-col">
        <h1 className="text-4xl font-extrabold">{donation?.title}</h1>
        <div className="my-5 font-normal tracking-wider">{donation?.about}</div>
        <div className="my-5">
          <Link className="bg-green-600 py-4 px-10" href="/donate">
            Explore Other Donations
          </Link>
        </div>
      </div>
      <div className="flex flex-col rounded-md overflow-hidden">
        <PaymentCard />
        <div className="bg-green-600 text-white py-5 rounded-b-md px-3">
          <div className="flex justify-between tex-lg font-medium">
            <div>{`$ ${donation?.paidAmount} RAISED`}</div>
            <div>{`$ ${donation?.target} Goal`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
