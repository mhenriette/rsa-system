import ReportRow from "@/components/ui/ReportRow";
import ReportsTitle from "@/components/sections/ReportsTitle";


const page = async () => {
  // const reports = await getReports()
  return (
    <div className="p-3 pt-16">
      <ReportsTitle />
      <div className="text-black mt-9 bg-white px-5">
        <div className="grid grid-cols-5 h-16 border-b border-b-gray-800 border-opacity-50 items-center">
          <p className="font-medium">Author</p>
          <p className="font-medium">Type</p>
          <p className="font-medium">Date published</p>
          <p className="font-medium">status</p>
          <p className="font-medium">action</p>
        </div>
        {/* {reports.map((report) => (<ReportRow key={report.id} report={report} />))} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, natus!
      </div>

    </div>
  );
};

export default page;
