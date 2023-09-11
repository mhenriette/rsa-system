"use client";
import { DonationContext } from "@/store/donationContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const { activities }: any = useContext(DonationContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const handleData = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const activity = activities?.filter(
    (activity: any) => activity.id.toString() === id
  )[0];

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify({ ...data, id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setData({ name: "", email: "", contact: "", address: "" });
        if (response.ok) {
          alert(`${data.name} is saved`);
        } else {
          console.error("failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="bg-gradient-to-r from-black to-theme flex px-32 justify-between py-32">
      <div className="text-white w-1/2 flex flex-col">
        <h1 className="text-4xl font-extrabold">{activity?.name}</h1>
        <div className="my-5 font-normal tracking-wider">
          {activity?.description}
        </div>
        <div className="my-5">
          <Link className="bg-green-600 py-4 px-10" href="/activities">
            Explore Other Activities
          </Link>
        </div>
      </div>
      <div className="flex flex-col rounded-md overflow-hidden">
        <form
          className={`bg-white py-8 px-5 text-theme w-[450px]`}
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-theme font-bold text-2xl">
            Register to join activity
          </h1>
          <input
            placeholder="Enter your name"
            className="border border-theme rounded-lg p-2 w-full"
            name="name"
            onChange={handleData}
            value={data.name}
          />

          <input
            placeholder="email"
            className="py-2 border-theme border w-full my-3 rounded-md px-2 outline-none"
            name="email"
            required
            onChange={handleData}
            value={data.email}
          />
          <input
            placeholder="Your Phone number"
            className="py-2 border-theme border w-full my-3 rounded-md px-2 outline-none"
            name="contact"
            required
            onChange={handleData}
            value={data.contact}
          />
          <input
            placeholder="Your address"
            className="py-2 border-theme border w-full my-3 rounded-md px-2 outline-none"
            name="address"
            required
            onChange={handleData}
            value={data.address}
          />

          <div>
            <button
              type="submit"
              className="py-2 bg-green-700 text-white border w-full my-3 rounded-md px-2 outline-none"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
