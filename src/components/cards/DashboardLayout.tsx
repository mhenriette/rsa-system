import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiFillFund, AiFillHome } from "react-icons/ai";
import { BiLogOut, BiSolidMessageSquare } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaPeopleGroup, FaPersonDigging } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";

const DashboardLayout = () => {
  const items = [
    { href: "/dashboard", icon: AiFillHome, label: "Dashboard" },
    { href: "/members", icon: FaPeopleGroup, label: "Members" },
    { href: "/units", icon: FaPeopleGroup, label: "Units" },
    { href: "/activity", icon: FaPersonDigging, label: "Activities" },
    { href: "/reports", icon: TbReportSearch, label: "Reports" },
    { href: "/donation", icon: AiFillFund, label: "Donations" },
    { href: "/messages", icon: BiSolidMessageSquare, label: "Messages" },
    { href: "#", icon: CgWebsite, label: "Website" },
    { href: "#", icon: CgWebsite, label: "Gallery" },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    console.log("first");
    router.push("/sign-in");
  };

  return (
    <div className="flex flex-col w-1/5 gap-2 py-3 bg-indigo-500">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href ? "bg-indigo-400 border-l-[4px] border-l-indigo-600" : ""
          } py-3 px-5 hover:bg-indigo-400 text-lg gap-3  !text-white font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md-`}
        >
          <item.icon size={16} />
          <span className="text-sm font-medium">{item.label}</span>
        </Link>
      ))}
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
