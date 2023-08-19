import Button from "@/components/ui/Button";
import loginImg from "@/public/login.png";
import logo from "@/public/Logo.png";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-purple-400 to-purple-200">
      <div className="flex my-32 p-10 bg-gray-400 rounded-lg">
        <div className="w-[250px] h-[400px] relative">
          <Image
            //   objectFit=""
            className="overflow-hidden object-cover"
            fill
            src={loginImg}
            priority
            alt="loginImg"
          />
        </div>
        <div className="flex flex-col p-5">
          <div className="flex justify-center flex-col items-center">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h1 className="text-xl font-bold text-center">
              RWANDA SCOUTS ASSOCIATION
            </h1>
          </div>
          <div className="flex flex-col mt-3">
            <h1 className="font-medium text-lg text-center">Admin Log In</h1>
            <form className="flex flex-col gap-2">
              <label>Username</label>
              <input
                placeholder="Enter your username"
                type="text"
                className="p-3 rounded"
              />
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                className="p-3 rounded"
              />
              <Button>Login</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
