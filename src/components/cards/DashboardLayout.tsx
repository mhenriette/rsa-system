import Link from "next/link";
import { AiFillFund, AiFillHome } from "react-icons/ai";
import { BiSolidMessageSquare } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaPeopleGroup, FaPersonDigging } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
const DashboardLayout = () => {
  return (
    <div className="flex flex-col w-1/5 bg-indigo-400">
      <Link
        href="/dashboard"
        className="py-2 px-5 text-lg font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md"
      >
        <AiFillHome />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/members"
        className="py-2 px-5 text-lg font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md"
      >
        <FaPeopleGroup />
        <span>Members</span>
      </Link>
      <Link
        href="/activity"
        className="py-2 px-5 text-lg font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md"
      >
        <FaPersonDigging />
        <span>Activities</span>
      </Link>
      <Link
        href="/reports"
        className="py-2 px-5 text-lg font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md"
      >
        <TbReportSearch />
        <span>Reports</span>
      </Link>
      <Link
        href="/donation"
        className="py-2 px-5 text-lg font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md"
      >
        <AiFillFund />
        <span>Donations</span>
      </Link>
      <Link
        href="/messages"
        className="py-2 px-5 text-lg font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md"
      >
        <BiSolidMessageSquare />
        <span>Messages</span>
      </Link>
      <Link
        href="#"
        className="py-2 px-5 text-lg font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md"
      >
        <CgWebsite />
        <span>Website</span>
      </Link>
      <Link
        href="#"
        className="py-2 px-5 text-lg font-semibold flex items-center space-x-2 active:bg-gray-400 rounded-md"
      >
        <GrGallery />
        <span>Gallery</span>
      </Link>
    </div>
  );
};

export default DashboardLayout;
