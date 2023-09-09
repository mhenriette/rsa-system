import logo from "@/public/Logo.png";
import { AuthContext } from "@/store/authContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const userInfo: any = useContext(AuthContext);
  return (
    <div className="flex justify-between px-5 py-3 items-center text-white bg-purple-900">
      <Link className="flex gap-3 items-center space-x-2" href="/">
        <Image src={logo} width={32} height={32} alt="logo" />
        <p className="text-white font-semibold">RSA</p>
      </Link>
      {userInfo?.user?.role === "hqadmin" && (
        <div className="relative flex gap-5 items-center">
          <button
            onClick={handleClick}
            className="bg-white text-purple-950 font-bold  px-5 text-sm py-2 text-center rounded-md hover:bg-purple-700 hover:text-white"
          >
            Add new admin
          </button>
          <Link href="/profile">
            <FaUserAlt className="text-2xl" />
          </Link>
          {open && (
            <div className="absolute text-gray-800 transform translate-y-2 gap-2 w-max shadow bg-gray-100 flex flex-col rounded p-5">
              <Link onClick={() => setOpen(false)} href={"new-admin?type=hqadmin"}>
                Hq admin
              </Link>
              <Link onClick={() => setOpen(false)} href={"new-admin?type=districtmanager"}>
                District manager
              </Link>
              <Link onClick={() => setOpen(false)} href={"new-admin?type=unitleader"}>
                Unit leader
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardNavbar;
