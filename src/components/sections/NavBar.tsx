import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-5 px-10 items-center bg-violet-900">
      <div className="font-bold text-2xl">RSA</div>
      <div className="flex items-center gap-x-4 mt-3 md:mt-0">
        <Link href="#">Gallery</Link>
        <Link href="#">Join Scouts</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
