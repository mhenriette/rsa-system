"use client";
import InputField from "@/components/ui/Input";
import SelectField from "@/components/ui/SelectField";
import { districts } from "@/data/districts";
import { addApplicant } from "@/lib/actions";
import { ReactElement } from "react";

const page = (): ReactElement => {
  return (
    <div className="p-3 w-full px-28 py-16">
      <h1 className="font-medium text-2xl text-[#5F8D4E]">Add a Member</h1>
      <div className="flex justify-end">
        <button className="flex text-red-500 text-lg underline mt-8 text-right">
          Clear
        </button>
      </div>
      <form
        action={addApplicant}
        className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 gap-y-4 w-full mt-8"
      >
        <InputField
          placeholder="First name"
          label="First name"
          name="First_name"
        />
        <SelectField
          placeholder="Select district"
          label="District"
          name="district"
          options={districts}
        />
        <InputField
          placeholder="Last name"
          label="Last name"
          name="last_name"
        />
        <SelectField
          placeholder="Select gender"
          label="Gender"
          name="gender"
          options={["male", "female"]}
        />
        {/* <InputField placeholder="Location" label="Location" name="address" /> */}
        {/* <InputField placeholder="Enter role" label="Role" name="role" /> */}
        {/* <SelectField
          placeholder="Select category"
          label="Category"
          name="category"
          options={["Cub Scouts", "Scouts", "Companions", "Rover Scout"]}
        /> */}
        <InputField
          placeholder="Phone number"
          label="Phone number"
          name="contact"
        />
        <InputField
          placeholder="Enter your Sector"
          label="Sector"
          name="sector"
        />
        <InputField
          placeholder="Email"
          label="Email"
          type="email"
          name="email"
        />

        <InputField
          placeholder="Enter occupation"
          label="Occupation"
          name="occupation"
        />
        <InputField placeholder="Enter Your age" label="age" name="age" />
        <InputField
          placeholder="Describe the reason why you want to Join Scout Association"
          label="Reason"
          name="reason"
        />
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
