import Link from "next/link";
import React from "react";
import PaymentCard from "./PaymentCard";

const Home = () => {
  return (
    <div className="bg-donation-pattern w-full bg-fill bg-cover relative bg-center text-white">
      <div className="bg-gradient-to-r from-black bg-opacity-40   w-full ">
        <div className="flex justify-between px-32 py-32">
          <div className="flex flex-col items-start gap-y-5 max-w-2xl">
            <h1 className="font-extrabold text-5xl">
              Donate to Rwanda Scouting today!
            </h1>
            <p className="text-xl font-medium">
              Help us reach even more Scouts and expand our impact worldwide.
              Thank you for your support!
            </p>
            <Link href="/" className="bg-theme py-4 px-8 uppercase font-medium">
              Donate a specific project
            </Link>
          </div>

          <PaymentCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
