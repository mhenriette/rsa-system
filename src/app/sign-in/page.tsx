"use client";
import { login } from "@/lib/actions";
import { redirect } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [_, setUser] = useLocalStorage("token", "");

  async function onLogin(formData: FormData) {
    const res = await login(formData);
    setUser(JSON.stringify(res?.token));
    redirect("/dashboard");
  }

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full rounded-md px-1 mx-auto bg-purple-50">
        <div className="relative flex  w-full flex-1 flex-col items-center justify-center pb-16 pt-12">
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
      </div>
    </main>
  );
};

export default Page;
