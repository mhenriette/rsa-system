import { Donation } from "@prisma/client";
import { DialogContent, DialogOverlay } from "@reach/dialog";
interface ReportDetailsProps {
  close: () => void;
  showDialog: boolean;
  funding: Donation;
}

function formatDate(date: any) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
export default function FundingDetails({ close, showDialog, funding }: ReportDetailsProps) {
  return (
    <DialogOverlay isOpen={showDialog} onDismiss={close}>
      <DialogContent
        style={{
          boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
          paddingRight: 12,
          paddingLeft: 12,
        }}
      >
        <div className="h-14 bg-[#BCB9B9] flex justify-between items-center px-5">
          <h2>Funding</h2>
          <button onClick={close}>x</button>
        </div>
        <div>
          <h2 className="text-gray-600 mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-2">About</span> {funding.about}
          </h2>
          <h2 className="text-gray-600 mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-2">Target</span> {funding.target}
          </h2>
          <h2 className="text-gray-600 mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-2">created at</span>{" "}
            {formatDate(new Date(funding.created_at))}
          </h2>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
}
