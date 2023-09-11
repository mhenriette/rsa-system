"use client";
import DonationNavbar from "@/components/navbar/DonationNavbar";
import Footer from "@/components/sections/Footer";
import { DonationContext } from "@/store/donationContext";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [donation, setDonation] = useState([]);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("/api/donations")
      .then((response) => response.json())
      .then((data) => setDonation(data.data))
      .catch((error) => {
        console.log("Data not found", error);
        setDonation([]);
      });
  }, []);
  useEffect(() => {
    fetch("/api/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data.data))
      .catch((error) => {
        console.log("Data not found", error);
        setActivities([]);
      });
  }, []);

  const data: any = { donations: donation, activities: activities };
  return (
    <section className="text-white">
      <DonationContext.Provider value={data}>
        <DonationNavbar />
        {children}
        <Footer />
      </DonationContext.Provider>
    </section>
  );
}
