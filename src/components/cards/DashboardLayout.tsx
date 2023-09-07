import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { AiFillFund, AiFillHome } from "react-icons/ai";
import { BiSolidMessageSquare } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaPeopleGroup, FaPersonDigging } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
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

  return (
    <div className="flex flex-col py-3 gap-2 w-1/5 bg-indigo-500">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href
              ? "bg-indigo-400 border-l-[4px] border-l-indigo-600"
              : ""
          } py-3 px-5 hover:bg-indigo-400 text-lg gap-3  !text-white font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md-`}
        >
          <item.icon size={16} />
          <span className="text-sm font-medium">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default DashboardLayout;
