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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/donations")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => {
        console.log("Data not found", Error);
        setData([]);
      });
  }, []);

  const donations: any = { donations: data };
  return (
    <section>
      <DonationContext.Provider value={donations}>
        <DonationNavbar />
        {children}
        <Footer />
      </DonationContext.Provider>
    </section>
  );
}
