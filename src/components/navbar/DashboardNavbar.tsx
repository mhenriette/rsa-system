import logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-between p-5 items-center bg-purple-900">
      <Link className="flex items-center space-x-2" href="/">
        <Image src={logo} width={32} height={32} alt="logo" />
        <p>Rwanda scouts association</p>
      </Link>
      <div className="relative">
        <button
          onClick={handleClick}
          className="bg-white text-purple-950 font-bold  px-10 py-3 text-center rounded-xl hover:bg-purple-700 hover:text-white"
        >
          Add new admin
        </button>
        {open && (
          <div className="absolute transform translate-y-2 gap-2 w-max shadow bg-gray-100 flex flex-col rounded p-5">
            <Link onClick={() => setOpen(false)} href={"new-admin?type=hqadmin"}>Hq admin</Link>
            <Link onClick={() => setOpen(false)} href={"new-admin?type=districtmanager"}>
              District manager
            </Link>
            <Link onClick={() => setOpen(false)} href={"new-admin?type=unitleader"}>Unit leader</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
