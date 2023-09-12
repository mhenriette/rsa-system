"use client";
import DashboardLayout from "@/components/cards/DashboardLayout";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";
import PageProgres from "@/components/ui/PageProgress";
import { AuthContext } from "@/store/authContext";
import { redirect } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";

const Layout = ({ children }: { children: ReactElement }) => {
  const token: any = useReadLocalStorage("token");
  const [_, setUser] = useLocalStorage("token", "");
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState<any>(null);

  // const router = useRouter();
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
          setAuthUser(val.data);
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
    if (!token) {
      // router.push("/sign-in");
      redirect("/sign-in");
    }
  }, [token]);



  if (token && !loading && authUser) {
    const values: any = { token: token, user: authUser };
    const datee = new Date();
    return (
      <>
        <PageProgres />
        <main className="h-screen flex flex-col bg-theme pr-5">
          <AuthContext.Provider value={values}>
            <DashboardNavbar />
            <div className="flex flex-1 overflow-hidden">
              <DashboardLayout />
              <div className="w-full p-10 bg-light rounded-md overflow-y-scroll dashboard ">
                <div className="text-theme">{children}</div>
              </div>
            </div>
            <footer className="bg-theme py-3 text-sm text-center text-white font-bold">
              © Munezero {datee.getFullYear() - 4} -{datee.getFullYear()}
            </footer>
          </AuthContext.Provider>
        </main>
      </>
    );
  } else {
    return (
      <div className="flex w-full h-screen items-center justify-center bg-light">
        <BiLoader className="text-[40px] animate-spin" />
      </div>
    );
  }
};

export default Layout;
