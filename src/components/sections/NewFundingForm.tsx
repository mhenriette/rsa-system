import { addNewFunding } from "@/lib/actions";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface NewFundingFormProps {
  close: () => void;
  showDialog: boolean;
}

const NewFundingForm = ({ close, showDialog }: NewFundingFormProps) => {
  const { pending } = useFormStatus();
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
        <form action={addNewFunding}>
          <div className="text-gray-600 flex mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-3">About:</span>{" "}
            <input
              className="flex-1 align-baseline outline-none"
              name="about"
              placeholder="Enter funding description here"
            />
          </div>
          <div className="text-gray-600 flex mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-3">Target:</span>{" "}
            <input
              className="flex-1 align-baseline outline-none"
              name="target"
              placeholder="Enter funding target here"
            />
          </div>
          <button
            disabled={pending}
            className="bg-[#38023D] mt-6 px-9 py-2.5 rounded-xl text-white"
          >
            {pending ? "creating funding..." : "create funding"}
          </button>
        </form>
      </DialogContent>
    </DialogOverlay>
  );
};
export default NewFundingForm;
