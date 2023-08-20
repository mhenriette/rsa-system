import logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
const DashboardNavbar = () => {
  return (
    <div className="flex justify-between p-5 items-center bg-purple-900">
      <Link className="flex items-center space-x-2" href="/">
        <Image src={logo} width={32} height={32} alt="logo" />
        <p>Rwanda scouts association</p>
      </Link>
      <div>profile</div>
    </div>
  );
};

export default DashboardNavbar;
