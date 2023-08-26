import { addNewReport } from "@/lib/actions";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import "@reach/dialog/styles.css";

interface NewReportFormProps {
  close: () => void;
  showDialog: boolean;
}

export default function NewReportForm({ close, showDialog }: NewReportFormProps) {
  const { pending } = useFormStatus();
  return (
    <DialogOverlay
    isOpen={showDialog}
    onDismiss={close}
  >
    <DialogContent
      style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)", paddingRight: 12, paddingLeft: 12 }}
    >
     <div className="h-14 bg-[#BCB9B9] flex justify-between items-center px-5">
      <h2>Report</h2>
      <button onClick={close}>x</button>
     </div>
     <form action={addNewReport}>
      <div className="text-gray-600 flex mt-5 border-b pb-2 border-opacity-20"><span className="font-medium inline-block mr-3">Author:</span> <input className="flex-1 align-baseline outline-none" name="author" placeholder="Enter report author here" /></div>
      <div className="text-gray-600 flex mt-5 border-b pb-2 border-opacity-20"><span className="font-medium inline-block mr-3">Type:</span> <input className="flex-1 align-baseline outline-none" name="type" placeholder="Enter report type here" /></div>
      <textarea className="h-[320px] w-full block mt-5 placeholder:inline-block placeholder:font-medium placeholder:text-gray-950 placeholder:text-opacity-100 border-b borber-b-opacity-40 mb-2" name="content" placeholder="Content" />
      <button disabled={pending} className="bg-[#38023D] px-9 py-2.5 rounded-xl text-white">{pending ? 'creating report...' : 'create report'}</button>
     </form>
    </DialogContent>
  </DialogOverlay>
  );
}
