import Button from "../ui/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-hero-pattern w-full bg-fill bg-cover relative bg-center">
      <div className="bg-black bg-opacity-30 w-full">
        <div className="py-20 px-5 md:py-40 md:pl-32">
          <div className="p-8 md:p-16 flex flex-col md:w-[45%] bg-black bg-opacity-60">
            <h1 className="font-bold text-lg md:text-4xl mb-2 md:mb-5">
              Preparing young people with skills for life
            </h1>
            <p>
              The Rwanda Scouts Association is an educational movement for young
              people, based on voluntary services. It is a Movement, which
              remains non-political and does include all religions. It is open
              to all without distinction of gender, origin, race or creed, in
              accordance with the purpose, principles and scout method as
              conceived by the Founder, Baden Powell.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mt-5">
              <Button full="true">Volunteer</Button>
              <Link href="/applicant" className="w-full">
                <Button full="true">Join Scouts</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
