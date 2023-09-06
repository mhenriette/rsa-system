"use client";

import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [memberId, setMemberId] = useState("");
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <>
      <DialogOverlay
        style={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.4,
        }}
        isOpen={showDialog}
        onDismiss={close}
      >
        <Dialog isOpen={showDialog} onDismiss={close}>
          <div className="flex flex-col gap-4">
            <button className="close-button bg-red-500 p-4" onClick={close}>
              <span aria-hidden>Close</span>
            </button>
            <div className="flex flex-col gap-3">
              <input
                placeholder="Enter your Membership card ID"
                className="border-gray-500 p-5 rounded-lg border-solid border"
                name="member_id"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
              />
              <button
                className="close-button bg-red-500 p-4"
                onClick={() => {
                  router.push(`/membershipCard/${memberId}`);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </Dialog>
      </DialogOverlay>
      <div className="flex flex-col md:flex-row justify-between py-5 px-10 items-center bg-violet-900">
        <div className="font-bold text-2xl">RSA</div>
        <div className="flex items-center gap-x-4 mt-3 md:mt-0">
          <button
            className="bg-white text-purple-950 font-bold  px-10 py-3 text-center rounded-xl hover:bg-purple-700 hover:text-white"
            onClick={() => open()}
          >
            Get your Membership id
          </button>
          <Link href="#">Gallery</Link>
          <Link href="#">Join Scouts</Link>
          <Link href="#">About Us</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/sign-in">Login</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
