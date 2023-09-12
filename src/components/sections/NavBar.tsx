"use client";

import { Dialog, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import scoutslogo from "../../../public/scouts.svg";

const NavBar = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [memberId, setMemberId] = useState("");
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const router = useRouter();
  const token: any = useReadLocalStorage("token");
  const [isMounted, setIsMounted] = useState(false);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  const handleRedirect = () => {
    // setLoading(true);
    router.push("/dashboard");
    // setLoading(false);
  };
  // if (loading) {
  //   return <h1 className="">Laoding...</h1>;
  // }
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
            <button
              className="close-button bg-theme text-white text-lg font-bold p-4"
              onClick={close}
            >
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
                className="close-button bg-theme text-white text-lg font-bold p-4"
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
      <div className="flex flex-col md:flex-row justify-between text-theme py-8 px-32 items-center bg-white">
        <Image src={scoutslogo} width={182} height={42} alt="logo" priority />
        <div className="flex items-center gap-x-4 font-semibold mt-3 md:mt-0">
          <button
            className="text-white font-bold  px-10 py-3 text-center rounded-lg bg-theme transition-colors ease-in delay-200 "
            onClick={() => open()}
          >
            Get your Membership id
          </button>
          {token && <button onClick={handleRedirect}>Dashboard</button>}
          {!token && (
            <Link
              href="/sign-in"
              className="border border-theme text-theme hover:text-white rounded-lg px-5 py-2.5 hover:bg-theme hover:transition-colors delay-200 ease-in"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
