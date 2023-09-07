"use client";
import { login } from "@/lib/actions";
import logo from "@/public/Logo.png";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [_, setUser] = useLocalStorage("token", "");
  // const router = useRouter();

  async function onLogin(formData: FormData) {
    const res = await login(formData);
    setUser(JSON.stringify(res?.token));
    redirect("/dashboard");
  }

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
        <Image src={logo} width={52} height={52} alt="logo" />
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
        <h1 className="mb-8 font-semibold">Log in to your RSA account</h1>
        <form action={onLogin} className="w-full max-w-sm">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-[#4c1d95] text-white hover:bg-[#4c1d95] w-full"
          >
            <span>Sign in to account</span>
          </button>
          <input type="hidden" name="remember" defaultValue="true" />
        </form>
      </div>
    </main>
  );
};

export default Page;
