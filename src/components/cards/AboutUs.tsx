import Image from "next/image";
import React from "react";
import aboutImg from "../../../public/sculf.jpg";

const AboutUs = ({ reverse }: { reverse?: string }) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center relative my-5 ${reverse && "md:flex-row-reverse"
        }`}
    >
      <Image
        objectFit="cover"
        width={500}
        height={500}
        priority
        alt="about"
        src={aboutImg}
      />
      {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, assumenda! */}
      <div className=" p-3 md:p-10 flex flex-col text-violet-900 md:w-1/2">
        <h1 className="pb-5 font-bold text-2xl">Who we are</h1>
        <p className="text-lg font-medium">
          The Rwanda Scouts Association is an educational movement for young
          people, based on voluntary services. It is a Movement, which remains
          non-political and does include all religions. It is open to all
          without distinction of gender, origin, race or creed, in accordance
          with the purpose, principles and scout method as conceived by the
          Founder, Baden Powell.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
