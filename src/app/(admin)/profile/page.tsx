"use client";
import { AuthContext } from "@/store/authContext";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const Page = () => {
  const userInfo: any = useContext(AuthContext);
  return (
    <div className="justify-center">
      <div className="w-full h-60 bg-[#909090] px-10">
        <h1 className="py-10 text-2xl font-semibold text-gray-100">Profile</h1>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center w-full max-w-xl -mt-20 bg-white rounded-md px-5">
          <FaUserCircle className="mx-auto -mt-10 text-[#909090] border-white border-2 rounded-full bg-white text-8xl" />
          <div className="flex flex-col gap-1 text-lg items-center justify-center mx-auto mt-5 text mb-9">
            <h2 className="text-2xl font-medium mb-2">
              {userInfo.user.first_name} {userInfo.user.last_name}
            </h2>
            <p>Role: {userInfo.user.role}</p>
            <p>Email: {userInfo.user.email}</p>
            <p>Contact: {userInfo.user.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
