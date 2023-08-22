import logo from "@/public/Logo.png";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-purple-400 to-purple-200">
      <div className="flex flex-col p-5 space-y-5">
        <div className="flex justify-center flex-col items-center">
          <Image src={logo} width={52} height={52} alt="logo" />
          <h1 className="text-xl font-bold text-center">
            RWANDA SCOUTS ASSOCIATION
          </h1>
        </div>
        <SignIn afterSignInUrl="/dashboard" redirectUrl="/dashboard" />
      </div>
    </div>
  );
};

export default page;
