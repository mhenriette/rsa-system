import DashboardLayout from "@/components/cards/DashboardLayout";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";
import { ReactElement } from "react";

const layout = ({ children }: { children: ReactElement }) => {
  return (

      <main className="bg-[#e3e0e0] h-screen">
        <DashboardNavbar />
        <div className="flex">
          <DashboardLayout />
          <div className="w-full">{children}</div>
        </div>
      </main>

  );
};

export default layout;
