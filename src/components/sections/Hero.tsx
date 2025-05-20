import Button from "../ui/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-hero-pattern w-full bg-fill bg-cover relative bg-center">
      <div className="bg-black bg-opacity-20 w-full">
        <div className="py-20 px-5 md:py-32 md:pl-32">
          <div className="p-8 md:pt-[100px] pb-[80px] px-12 w-1/2 block bg-[#321548] bg-opacity-95">
            <h1 className="font-bold !leading-[65px] text-lg md:text-5xl mb-2 md:mb-5">
              Preparing young people with skills for life.
            </h1>
            <p className="text-lg leading-8 pt-5">
              We are Scouts and everyone is welcome here. Every week, we help
              almost half a million people aged 4-25 develop skills for life.
              Are you ready to join the adventure?
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-start mt-8 uppercase">
              <Link
                className="bg-[#429239] text-white text-[15px] py-4 px-8 text-center font-bold hover:transition-opacity ease-out hover:bg-opacity-80"
                href="/donations"
              >
                Donate a project
              </Link>
              <Link
                href="/applicant"
                className="bg-purple-800 text-white  text-[15px]  py-4 px-8 text-center font-bold hover:transition-opacity ease-out hover:bg-opacity-80"
              >
                Join Scouts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
