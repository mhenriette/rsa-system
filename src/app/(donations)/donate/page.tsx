"use client";
import DonationLayout from "@/components/DonationSections/DonationLayout";
import { useContext } from "react";
import { getDonations } from "@/lib/actions";
import DonationCard from "@/components/DonationSections/DonationCard";
import { DonationContext } from "@/store/donationContext";

const Page = () => {
  const { donations }: any = useContext(DonationContext);
  return (
    <div className="flex">
      <DonationLayout />
      <div className="bg-[#f2eafa] text-theme flex-grow">
        <h1 className="text-3xl font-bold">Explore projects</h1>
        <div className="grid grid-cols-3">
          {donations.map((donation: any) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
