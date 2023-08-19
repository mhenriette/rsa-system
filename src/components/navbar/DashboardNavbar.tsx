import logo from "@/public/Logo.png";
import Image from "next/image";
const DashboardNavbar = () => {
  return (
    <div className="flex justify-between p-5 items-center bg-purple-900">
      <div className="flex items-center space-x-2">
        <Image src={logo} width={32} height={32} alt="logo" />
        <p>Rwanda scouts association</p>
      </div>
      <div>profile</div>
    </div>
  );
};

export default DashboardNavbar;
