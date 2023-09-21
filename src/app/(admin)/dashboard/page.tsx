"use client";
import Applicants from "@/components/sections/Applicants";
import Fundings from "@/components/sections/Fundings";
import FemaleMembers from "@/components/ui/FemaleMember";
import MaleMembers from "@/components/ui/MaleMember";
import Members from "@/components/ui/Members";
import { HiDownload } from "react-icons/hi";
import { getApplicants, getDonaters, getMembers } from "@/lib/actions";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/ui/Loader";
import ReactToPdf from "react-to-pdf";
import Resolution from "react-to-pdf";
import margin from "react-to-pdf";
import Link from "next/link";
const DashboardPage = () => {
  const [applicants, setApplicants] = useState([]);
  const [donations, setDonations] = useState([]);
  const [members, setMembers] = useState([]);

  // const members = await getMembers();
  // const applicants = await getApplicants();
  // const donations = await getDonaters();
  // const female = members.filter((member) => member.gender === "female");
  // const male = members.filter((member: any) => member.gender === "male");
  // const printDonaters = () => {};
  // const ref = useRef<HTMLDivElement>(null);
  // const options = {
  //   orientation: "landscape",
  //   unit: "in",
  //   format: [7, 5],
  // };
  useEffect(() => {
    fetch("api/applicants")
      .then((response) => response.json())
      .then((data) => setApplicants(data.data));
  }, []);
  useEffect(() => {
    fetch("api/members")
      .then((response) => response.json())
      .then((members) => setMembers(members.data));
  }, []);

  useEffect(() => {
    fetch("api/donators")
      .then((response) => response.json())
      .then((donators) => setDonations(donators.data));
  }, []);

  const female = members.filter((member: any) => member.gender === "female");
  const male = members.filter((member: any) => member.gender === "male");
  const ref = useRef<HTMLDivElement>(null);
  const options = {
    orientation: "portrait",
    unit: "in",
    format: "letter",
    // resolution: Resolution.,
    // format: 'letter',
  };

  return (
    <div className="p-5">
      <div className="flex gap-x-3 items-center">
        <Members total={members.length} />
        <FemaleMembers total={female.length} />
        <MaleMembers total={male.length} />
      </div>
      <div className="mt-5">
        <h2 className="capitalize mb-4 font-semibold text-base">
          Pending applications
        </h2>
        {applicants.length ? (
          <Applicants applicants={applicants} />
        ) : (
          <Loader />
        )}
      </div>
      <div className="mt-5 flex gap-2 flex-col">
        <div className="flex-[3]" ref={ref}>
          <div className="flex justify-between items-center my-3">
            <h2 className="font-semibold font-medium- text-lg my-3">
              Latest Donations
            </h2>
            <ReactToPdf
              targetRef={ref}
              filename={`donations.pdf`}
              options={options}
            >
              {({ toPdf }: { toPdf: any }) => (
                <button
                  className="px-10 py-2 text-white font-bold text-md gap-3 rounded-md bg-theme self-start flex items-center"
                  onClick={toPdf}
                >
                  Get Document
                  <HiDownload className="text-md font-bold" />
                </button>
              )}
            </ReactToPdf>
          </div>
          {donations.length ? <Fundings fundings={donations} /> : <Loader />}
        </div>

        <div className="flex justify-between items-center">
          <Link
            className="px-10 py-3 text-white font-bold text-md gap-3 rounded-md bg-theme self-start flex items-center"
            href={`/membersReport`}
          >
            Members
            <HiDownload className="text-md font-bold" />
          </Link>
          <Link
            className="px-10 py-3 text-white font-bold text-md gap-3 rounded-md bg-theme self-start flex items-center"
            href="/donationReports"
          >
            Donations
            <HiDownload className="text-md font-bold" />
          </Link>
          <button className="px-10 py-3 text-white font-bold text-md gap-3 rounded-md bg-theme self-start flex items-center">
            Applicants
            <HiDownload className="text-md font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
