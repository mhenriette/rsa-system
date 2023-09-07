import Image from "next/image";
import scoutss from "../../../public/scoutabout.jpg";
import Link from "next/link";
const About = () => {
  return (
    <div className="w-full flex bg-theme pl-32 gap-5">
      <div className="text-center py-10 flex justify-center  flex-col gap-4 items-start">
        <p className="text-lg font-semibold text-start">
          The Rwanda Scouts Association is an educational movement for young
          people, based on voluntary services. It is a Movement, which remains
          non-political and does include all religions. It is open to all
          without distinction of gender, origin, race or creed, in accordance
          with the purpose, principles and scout method as conceived by the
          Founder, Baden Powell.
        </p>
        <Link
          className="bg-[#429239] block text-white py-4 px-8 text-center font-bold hover:transition-opacity ease-out hover:bg-opacity-80"
          href="#"
        >
          Donate Scout
        </Link>
      </div>
      <Image
        src={scoutss}
        alt="scouts"
        width={600}
        height={300}
        className="object-contain"
      />
    </div>
  );
};

export default About;
