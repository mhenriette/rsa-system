"use client";
import InputField from "@/components/ui/Input";
import { districts } from "@/data/districts";
import { addNewUser } from "@/lib/actions";
import { ReactElement } from "react";
import SelectField from "../ui/SelectField";

const page = (): ReactElement => {
  return (
    <div className="p-3 w-full px-28 py-16">
      <h1 className="font-medium text-2xl text-[#5F8D4E]">Add a Member</h1>
      <div className="flex justify-end">
        <button className="flex text-red-500 text-lg underline mt-8 text-right">Clear</button>
      </div>
      <form
        action={addNewUser}
        className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 gap-y-4 w-full mt-8"
      >
        <InputField placeholder="Picture" label="Profile picture" name="" />
        <InputField placeholder="Select gender" label="Gender" />
        <InputField placeholder="First name" label="First name" name="first_name" />
        <SelectField
          placeholder="Enter district"
          label="District"
          name="district"
          options={districts}
        />
        {/* <InputField placeholder="Enter district" label="District" name="district" /> */}
        <InputField placeholder="Last name" label="Last name" name="last_name" />
        <InputField placeholder="Location" label="Location" />
        <InputField placeholder="Phone number" label="Phone number" />
        <InputField placeholder="Date of joining" label="Date of joining" type="date" />
        <InputField placeholder="Email" label="Email" type="email" name="email" />
        <InputField placeholder="Date" label="Date" type="date" />
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

export default page;
