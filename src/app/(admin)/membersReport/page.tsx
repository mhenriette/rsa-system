"use client";
import Loader from "@/components/ui/Loader";
import Image from "next/image";
import React, { useEffect, useRef, useState, useContext } from "react";
import logo from "@/public/Logo.png";
import ReactToPdf from "react-to-pdf";
import { AuthContext } from "@/store/authContext";

const Page = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("api/members")
      .then((response) => response.json())
      .then((el) => setMembers(el.data));
  }, []);
  console.log(members, "memberss");
  const date = new Date();
  const ref = useRef<HTMLDivElement>(null);
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [10, 18],
  };
  const { user }: any = useContext(AuthContext);
  const dates = new Date();
  return (
    <>
      <ReactToPdf targetRef={ref} filename={`Members.pdf`} options={options}>
        {({ toPdf }: { toPdf: any }) => (
          <button
            onClick={toPdf}
            className="bg-purple-700 text-white font-bold rounded-md text-center px-10 py-4 hover:bg-purple-500"
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
            Rwanda scouts members from Unit A
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
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Occupation
                </th>
              </tr>
            </thead>
            <tbody>
              {members.length ? (
                members.map((el: any) => {
                  return (
                    <tr
                      className="bg-light border-b  hover:bg-gray-50"
                      key={el.id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-theme whitespace-nowrap "
                      >
                        {`${el.First_name} ${el.last_name}`}
                      </th>
                      {/* <td className="px-6 py-4">{el.email}</td> */}
                      <td className="px-6 py-4">{el.contact}</td>
                      <td className="px-6 py-4">{el.email}</td>
                      {/* <td className="px-6 py-4">{el.unit_name}</td> */}
                      <td className="px-6 py-4">{el.occupation}</td>
                    </tr>
                  );
                })
              ) : (
                <Loader />
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

export default Page;
