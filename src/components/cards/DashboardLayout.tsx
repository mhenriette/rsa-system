"use client";
import { AuthContext } from "@/store/authContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { AiFillFund, AiFillHome } from "react-icons/ai";
import { BiLogOut, BiSolidMessageSquare } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaPeopleGroup, FaPersonDigging } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";

const DashboardLayout = () => {
  const authUser: any = useContext(AuthContext);
  const items = [
    { href: "/dashboard", icon: AiFillHome, label: "Dashboard" },
    { href: "/members", icon: FaPeopleGroup, label: "Members" },
    authUser?.user?.role === "districtManager" && {
      href: "/applicants",
      icon: FaPeopleGroup,
      label: "Applications",
    },
    authUser?.user?.role === "hqadmin" && {
      href: "/donation",
      icon: AiFillFund,
      label: "Donations",
    },
    { href: "/activity", icon: FaPersonDigging, label: "Activities" },
    { href: "/units", icon: FaPeopleGroup, label: "Units" },
    // { href: "/reports", icon: TbReportSearch, label: "Reports" },
    // { href: "#", icon: CgWebsite, label: "Gallery" },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/sign-in");
  };

  return (
    <div className="flex flex-col w-1/5 gap-2 py-3">
      {items?.map(
        (item: any) =>
          item && (
            <Link
              key={item?.href}
              href={item?.href}
              className={`${
                pathname === item?.href
                  ? "bg-purple-800 border-l-[4px] border-l-green-700"
                  : ""
              } py-3 px-5 hover:bg-light hover:text-theme text-lg gap-3 text-white font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md-`}
            >
              <item.icon size={16} />
              <span className="text-sm font-medium">{item?.label}</span>
            </Link>
          )
      )}
      <button
        onClick={logout}
        className="flex font-medium text-sm py-3 items-center gap-4 px-5 text-center text-red-400 hover:bg-red-400 hover:text-white"
      >
        <BiLogOut className="text-lg" /> Logout
      </button>
    </div>
  );
};

export default DashboardLayout;
