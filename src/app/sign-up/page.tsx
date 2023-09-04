import { SignUp } from "@clerk/nextjs";
import logo from "@/public/Logo.png";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-purple-400 to-purple-200">
      <div className="flex flex-col p-5 space-y-5">
        <div className="flex justify-center flex-col items-center">
          <Image src={logo} width={52} height={52} alt="logo" />
          <h1 className="text-xl font-bold text-center">
            RWANDA SCOUTS ASSOCIATION
          </h1>
          <h2 className="text-lg font-medium text-center">
            Create new Admin Account
          </h2> 
        </div>
        {/* <SignUp /> */}
      </div>
    </div>
  );
};
export default SignUpPage;
