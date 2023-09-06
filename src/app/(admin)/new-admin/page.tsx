"use server";
import InputField from "@/components/ui/Input";
import { addNewHqAdmin, getUnits } from "@/lib/actions";
import Link from "next/link";
import leftArrow from "@/public/leftArrow.svg";
import Image from "next/image";
import SelectField from "@/components/ui/SelectField";

const Page = async ({
  searchParams,
}: {
  searchParams: { type?: "hqadmin" | "districtmanager" | "unitleader" };
}) => {
  const units = await getUnits();
  console.log(units, "=====sdfs====");
  const type = searchParams.type;
  const admins = {
    hqadmin: "HQ Admin",
    districtmanager: "District Manager",
    unitleader: "Unit Leader",
  };
  return (
    <div className="p-3 w-full px-28 py-16">
      <Link href="/activity" className="mb-4 cursor-pointer">
        <Image width={40} height={40} alt="arrow" src={leftArrow} />
      </Link>
      <h1 className="font-medium text-2xl text-[#5F8D4E] underline">
        Add {type ? admins[type] : "Hq Admin"}
      </h1>
      <div className="flex justify-end">
        <button
          type="button"
          className="flex text-red-500 text-lg underline mt-8 text-right"
        >
          Clear
        </button>
      </div>
      <form
        action={addNewHqAdmin}
        className="grid md:grid-cols-2 grid-cols-1 md:gap-x-16 gap-y-4 w-full mt-8"
      >
        <InputField
          placeholder="First name"
          label="First Name"
          name="firstname"
        />
        <InputField placeholder="Last name" label="Last name" name="lastname" />
        <InputField placeholder="Username" label="Username" name="username" />
        <InputField placeholder="email" label="Email" name="email" type="email" />
        <InputField
          placeholder="Password"
          label="Password"
          name="password"
          type="password"
        />
        <InputField placeholder="Contact" label="Contact" name="contact" />
        {type === "districtmanager" && (
          <InputField placeholder="District" label="District" name="district" />
        )}
        {type === "unitleader" && (
          <>
            <InputField
              placeholder="District"
              label="District"
              name="district"
            />
            <div>
              <SelectField
              label="Unit"
              placeholder="Select unit"
              name="unit"
              options={units.map((unit) => unit.username)}

              />
            </div>
          </>
        )}
        <div className="col-span-2 flex justify-center mt-16">
          <button
            type="submit"
            className="bg-[#5F8D4E] px-5 py-4 rounded font-medium text-white uppercase"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
