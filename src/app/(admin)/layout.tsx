"use client";
import DashboardLayout from "@/components/cards/DashboardLayout";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";

const Layout = ({ children }: { children: ReactElement }) => {
  const token: any = useReadLocalStorage("token");
  const [_, setUser] = useLocalStorage("token", "");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    async function handleFetch() {
      setLoading(true);
      fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
        .then((res) => res.json())
        .then((val) => {
          if (!val.success) {
            setUser("");
            throw val.message;
          }
        })
        .catch((err) => {
          console.table(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    if (token) {
      handleFetch();
    }
  }, [token]);
  if (!token) {
    router.push("/sign-in");
  }
  if (token && !loading) {
    return (
      <main className="bg-[#e3e0e0] h-screen">
        <DashboardNavbar />
        <div className="flex lex-1 h-full bg-[#E3E1E1]">
          <DashboardLayout />
          <div className="w-full h-full p-10 ">
            <div className="">{children}</div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <BiLoader className="text-[40px] animate-spin" />
      </div>
    );
  }
};

export default Layout;
