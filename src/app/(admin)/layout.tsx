import DashboardLayout from "@/components/cards/DashboardLayout";
import { ReactElement } from "react";

const layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <div>this is the admin layout</div>
      <DashboardLayout />
      <div>{children}</div>
    </div>
  );
};

export default layout;
