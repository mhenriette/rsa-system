"use client";
import { addNewFunding } from "@/lib/actions";
import { AuthContext } from "@/store/authContext";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useContext } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface NewFundingFormProps {
  close: () => void;
  showDialog: boolean;
}

const NewFundingForm = ({ close, showDialog }: NewFundingFormProps) => {
  const { pending } = useFormStatus();
  const { user }: any = useContext(AuthContext);
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
          <h2>Donations</h2>
          <button onClick={close}>x</button>
        </div>
        <form action={addNewFunding}>
          <div className="text-gray-600 flex mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-3">Title:</span>{" "}
            <input
              className="flex-1 align-baseline outline-none"
              name="title"
              placeholder="Enter the name of the donation"
            />
          </div>
          <div className="text-gray-600 flex mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-3">About:</span>{" "}
            <input
              className="flex-1 align-baseline outline-none"
              name="about"
              placeholder="Enter donation description here"
            />
          </div>
          <div className="text-gray-600 flex mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-3">Target:</span>{" "}
            <input
              className="flex-1 align-baseline outline-none"
              name="target"
              placeholder="Enter donation target here"
            />
          </div>
          <div className="text-gray-600 flex mt-5 border-b pb-2 border-opacity-20">
            <span className="font-medium inline-block mr-3">Paid amount:</span>{" "}
            <input
              className="flex-1 align-baseline outline-none"
              name="paid_amount"
              placeholder="Paid amount"
            />
          </div>
          <input type="hidden" name="admin_id" value={user.id} />

          <button
            disabled={pending}
            className="bg-[#38023D] mt-6 px-9 py-2.5 rounded-xl text-white"
          >
            {pending ? "creating Donation..." : "create Donation"}
          </button>
        </form>
      </DialogContent>
    </DialogOverlay>
  );
};
export default NewFundingForm;
