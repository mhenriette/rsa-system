"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const NavBar = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="flex flex-col md:flex-row justify-between py-5 px-10 items-center bg-violet-900">
      <div className="font-bold text-2xl">RSA</div>
      <div className="flex items-center gap-x-4 mt-3 md:mt-0">
        <Link href="#">Gallery</Link>
        <Link href="#">Join Scouts</Link>
        <Link href="#">About Us</Link>
        {/* <Link href="/sign-in">Login</Link> */}
        {isSignedIn ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <Link href="/sign-in">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
