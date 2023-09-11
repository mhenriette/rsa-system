import logo from "@/public/Rwanda_scouts.png";
import Image from "next/image";
import Link from "next/link";
const DonationNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-black to-theme text-white py-4 px-32 flex justify-between items-center">
      <div className="bg-red-900 p-2 w-20 h-20 relative rounded-full overflow-hidden drop-shadow shadow-theme shadow-sm">
        <Image alt="logo" priority src={logo} fill />
      </div>
      <div className="flex items-center gap-5 font-semibold text-lg">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/donate">Explore Projects</Link>
        <Link href="/activities">View Activities</Link>
      </div>
    </div>
  );
};

export default DonationNavbar;
