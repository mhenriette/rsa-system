import Link from "next/link";
import ReportSummary from "../ui/ReportSummary";
// import { Report } from ".prisma/client";

interface ReportsProps {
  reports: Report[]
}
function formatDate(date: any) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export default function Reports({ reports }: ReportsProps) {
  return
  <></>
  //   <div className="text-black bg-white px-5">
  //     <div className="flex justify-between h-16 border-b border-b-gray-800 border-opacity-50 items-center">
  //      <h3 className="text-2xl font-semibold text-gray-800">Recept reports</h3>
  //      <Link href="/reports">view all</Link>
  //   </div>
  //   {reports.map((report) => (
  //     <ReportSummary key={report.id} content={report.content} author={report.author} createdAt={formatDate(new Date(report.created_at))} />
  //   ))}
  // </div>)
}