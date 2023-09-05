"use client";
import { login } from "@/lib/actions";
import logo from "@/public/Logo.png";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [_, setUser] = useLocalStorage("token", "");

  async function onLogin(formData: FormData) {
    const res = await login(formData);
    setUser(JSON.stringify(res?.token));
    redirect("/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-purple-400 to-purple-200">
      <div className="flex flex-col p-5 space-y-5">
        <div className="flex justify-center flex-col items-center">
          <Image src={logo} width={52} height={52} alt="logo" />
          <h1 className="text-xl font-bold text-center">
            RWANDA SCOUTS ASSOCIATION
          </h1>
        </div>
        <form action={onLogin}>
          <input type="text" name="username" />
          <input type="text" name="password" />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default page;
