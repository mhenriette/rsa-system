import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-violet-900 flex justify-between flex-col md:items-center py-5 px-10 md:py-10 md:px-16 ">
      <div className="flex md:justify-center font-bold text-3xl mb-8 md:mb-0">
        RSA
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:w-3/4">
        <div className="flex flex-col md:items-center mb-8 md:mb-0">
          <h1 className="font-bold text-2xl mb-5">Contact us</h1>
          <div className="flex flex-col gap-2 items-start">
            <p>rwandascout@gmail.com</p>
            <p>000-xxx-xxx</p>
            <p>Open from 9AM - 5PM</p>
            <p>Kigali, Rwanda</p>
          </div>
        </div>
        <div className="flex flex-col md:items-center">
          <h1 className="font-bold text-2xl mb-5">Websites</h1>
          <div className="flex flex-col items-start gap-2">
            <Link href="#">Home</Link>
            <Link href="#">Gallery</Link>
            <Link href="#">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
