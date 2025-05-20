"use client";

import Image from "next/image";
import logo from "@/public/Logo.png";
import { useContext, useEffect, useRef, useState } from "react";
import Loader from "@/components/ui/Loader";
import ReactToPdf from "react-to-pdf";
import { AuthContext } from "@/store/authContext";

const Page = () => {
  const [hq, setHq] = useState([]);
  const [district, setDistrict] = useState([]);
  const [unit, setUnit] = useState([]);
  // const [authUser, setAuthUser] = useState([]);
  const { user }: any = useContext(AuthContext);

  useEffect(() => {
    fetch("api/unitLeaders")
      .then((response) => response.json())
      .then((leader) => setUnit(leader.data));
  }, []);
  useEffect(() => {
    fetch("api/districtManagers")
      .then((response) => response.json())
      .then((leader) => setDistrict(leader.data));
  }, []);
  useEffect(() => {
    fetch("api/hqadmins")
      .then((response) => response.json())
      .then((leader) => setHq(leader.data));
  }, []);

  function formatDateToDdMmYyyy(inputDate: Date) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0"); // Get day with leading zero
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month with leading zero
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
  const ref = useRef<HTMLDivElement>(null);
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [11.5, 22],
  };
  const date = new Date();

  return (
    <div className="mx-28">
      <ReactToPdf targetRef={ref} filename={`Leaders.pdf`} options={options}>
        {({ toPdf }: { toPdf: any }) => (
          <button
            onClick={toPdf}
            className="bg-purple-700 text-white font-bold rounded-md text-center px-10 py-4 hover:bg-purple-500 my-3"
          >
            Generate pdf
          </button>
        )}
      </ReactToPdf>
      <div className="bg-white p-5" ref={ref}>
        <div className="flex justify-center flex-col gap-3 text-center items-center">
          <Image width={50} height={50} alt="logo" src={logo} />
          <h1 className="text-theme text-xl font-bold">
            Rwanda Scouts Association
          </h1>
        </div>
        <div className=" mt-10 text-center font-medium text-xl">
          <p className="text-theme text-lg font-bold">
            Rwanda scout Association Leader Annual Report 2022-2023
          </p>
        </div>
        {/* Unit leadersss */}
        <div className="my-3">
          <p className="text-xl font-bold text-theme my-3">Unit Leaders</p>
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
                    District
                  </th>
                  <th scope="col" className="px-6 py-3">
                    UnitId
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                  Occupation
                </th> */}
                </tr>
              </thead>
              <tbody>
                {unit.length ? (
                  unit.map((el: any) => {
                    return (
                      <tr
                        className="bg-light border-b  hover:bg-gray-50"
                        key={el.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-theme whitespace-nowrap "
                        >
                          {`${el.first_name} ${el.last_name}`}
                        </th>
                        {/* <td className="px-6 py-4">{el.email}</td> */}
                        <td className="px-6 py-4">{el.contact}</td>
                        <td className="px-6 py-4">{el.district}</td>
                        <td className="px-6 py-4">{el.unitId}</td>
                        {/* <td className="px-6 py-4">{el.occupation}</td> */}
                      </tr>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </tbody>
            </table>
          </div>
        </div>
        {unit.length ? (
          <div className="text-theme font-semibold text-lg my-3">
            <p>Total Unit leaders: {unit.length}</p>
          </div>
        ) : (
          <></>
        )}
        {/* District managers */}
        <div className="my-3 border-t border-gray-500">
          <p className="text-xl font-bold text-theme my-3">District Managers</p>
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
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3">
                    District
                  </th>

                  {/* <th scope="col" className="px-6 py-3">
                  Occupation
                </th> */}
                </tr>
              </thead>
              <tbody>
                {district.length ? (
                  district.map((el: any) => {
                    return (
                      <tr
                        className="bg-light border-b  hover:bg-gray-50"
                        key={el.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-theme whitespace-nowrap "
                        >
                          {`${el.first_name} ${el.last_name}`}
                        </th>
                        {/* <td className="px-6 py-4">{el.email}</td> */}
                        <td className="px-6 py-4">{el.email}</td>
                        <td className="px-6 py-4">{el.contact}</td>
                        <td className="px-6 py-4">{el.district}</td>
                        {/* <td className="px-6 py-4">{el.occupation}</td> */}
                      </tr>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </tbody>
            </table>
          </div>
        </div>
        {district.length ? (
          <div className="text-theme font-semibold text-lg my-3">
            <p>Total district managers: {district.length}</p>
          </div>
        ) : (
          <></>
        )}
        {/*  HQ leaders*/}
        <div className="my-3  border-t border-gray-500">
          <p className="text-xl font-bold text-theme my-3">HQ admins</p>
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
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Create At
                  </th>

                  {/* <th scope="col" className="px-6 py-3">
                  Occupation
                </th> */}
                </tr>
              </thead>
              <tbody>
                {hq.length ? (
                  hq.map((el: any) => {
                    const date = formatDateToDdMmYyyy(el.created_at);
                    return (
                      <tr
                        className="bg-light border-b  hover:bg-gray-50"
                        key={el.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-theme whitespace-nowrap "
                        >
                          {`${el.first_name} ${el.last_name}`}
                        </th>
                        {/* <td className="px-6 py-4">{el.email}</td> */}
                        <td className="px-6 py-4">{el.email}</td>
                        <td className="px-6 py-4">{el.contact}</td>
                        <td className="px-6 py-4">{date}</td>
                        {/* <td className="px-6 py-4">{el.occupation}</td> */}
                      </tr>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </tbody>
            </table>
          </div>
        </div>
        {hq.length ? (
          <div className="text-theme font-semibold text-lg my-3">
            <p>Total HQ admins: {hq.length}</p>
          </div>
        ) : (
          <></>
        )}
        <div className="text-gray-600 font-medium text-md flex justify-end flex-col pt-5 w-full  border-t border-gray-500 ">
          <p>Printed by: {`${user.first_name} ${user.last_name}`}</p>
          <p>
            Date:{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
          </p>
          <p>Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
