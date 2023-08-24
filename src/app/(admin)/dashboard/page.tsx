import Members from "@/components/ui/Members";
const DashboardPage = () => {
  return (
    <div className="p-5">
      <div className="flex gap-x-3 items-center">
        <Members />
        <Members />
        <Members />
        <Members />
      </div>
    </div>
  );
};

export default DashboardPage;
