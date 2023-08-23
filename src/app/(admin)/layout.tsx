import DashboardLayout from "@/components/cards/DashboardLayout";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";
import { ReactElement } from "react";


const layout = ({ children }: { children: ReactElement }) => {
  return (

      <main>
        <DashboardNavbar />
        <div className="flex">
          <DashboardLayout />
          <div>{children}</div>
        </div>
      </main>

  );
};

export default layout;
