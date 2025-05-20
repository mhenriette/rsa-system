"use client";
import Loader from "@/components/ui/Loader";
import Image from "next/image";
import React, { useEffect, useRef, useState, useContext } from "react";
import logo from "@/public/Logo.png";
import ReactToPdf from "react-to-pdf";
import { AuthContext } from "@/store/authContext";

const DonationReport = () => {
  const [donator, setDonators] = useState([]);
  useEffect(() => {
    fetch("api/donators")
      .then((response) => response.json())
      .then((el) => setDonators(el.data));
  }, []);
  const date = new Date();
  const ref = useRef<HTMLDivElement>(null);
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [10, 18],
  };
  function formatDateToDdMmYyyy(inputDate: Date) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0"); // Get day with leading zero
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month with leading zero
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  const totalAmount = donator.reduce(
    (accumulator, el: any) => accumulator + el.amount,
    0
  );
  const { user }: any = useContext(AuthContext);
  const dates = new Date();

  return (
    <>
      <ReactToPdf targetRef={ref} filename={`Members.pdf`} options={options}>
        {({ toPdf }: { toPdf: any }) => (
          <button
            onClick={toPdf}
            className="bg-purple-700 text-white font-bold rounded-md text-center px-10 py-4 hover:bg-purple-500 my-5"
          >
            Generate pdf
          </button>
        )}
      </ReactToPdf>
      <div className=" p-5 w-[900px] h-auto" ref={ref}>
        <div className="flex justify-center flex-col gap-3 text-center items-center">
          <Image width={50} height={50} alt="logo" src={logo} />
          <h1 className="text-theme text-xl font-bold">
            Rwanda Scouts Association
          </h1>
        </div>
        <div className="my-5 flex flex-col">
          <p className="font-bold text-lg text-theme">
            Rwanda scouts Donation Report
          </p>
          <p>{`Date: ${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`}</p>
          {/* <div>
          <></>
        </div> */}
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-theme ">
            <thead className="text-xs text-theme uppercase bg-purple-600">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Names
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Email
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {donator.length ? (
                donator.map((el: any) => {
                  const date = formatDateToDdMmYyyy(el.processed_at);

                  return (
                    <>
                      <tr
                        className="bg-light border-b  hover:bg-gray-50"
                        key={el.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-theme whitespace-nowrap "
                        >
                          {el.name}
                        </th>
                        <td className="px-6 py-4">{el.contact}</td>
                        <td className="px-6 py-4">{date}</td>
                        <td className="px-6 py-4">{el.amount}</td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <Loader />
              )}
              {totalAmount && (
                <tr className="bg-light border-b  hover:bg-gray-50 font-bold text-theme">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-theme whitespace-nowrap "
                  >
                    Total
                  </th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">{totalAmount}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="text-gray-600 font-medium text-md flex justify-end flex-col mt-5 w-full">
          <p>Printed by: {`${user.first_name} ${user.last_name}`}</p>
          <p>
            Date:
            {`${dates.getDate()}/${dates.getMonth()}/${dates.getFullYear()}`}
          </p>
          <p>Role: {user.role}</p>
        </div>
      </div>
    </>
  );
};

export default DonationReport;
