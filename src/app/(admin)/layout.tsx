import DashboardLayout from "@/components/cards/DashboardLayout";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";
import { ReactElement } from "react";

const layout = ({ children }: { children: ReactElement }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <DashboardNavbar />
      <div className="flex flex-1 h-full bg-[#E3E1E1]">
        <DashboardLayout />
        <div className="w-full h-full p-10 ">
          <div className="bg-white">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default layout;
