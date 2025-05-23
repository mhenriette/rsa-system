"use client";
import InputField from "@/components/ui/Input";
import SelectField from "@/components/ui/SelectField";
import { districts } from "@/data/districts";
import { addApplicant } from "@/lib/actions";
import { ReactElement } from "react";

const page = (): ReactElement => {
  return (
    <div className="p-3 w-full px-28 py-16 bg-white ">
      <h1 className="font-medium- text-2xl text-theme text-xl- font-bold">
        Apply to join scouts
      </h1>
      <div className="flex justify-end">
        <button className="flex text-red-500 text-lg underline mt-8 text-right">
          Clear
        </button>
      </div>
      <form
        action={addApplicant}
        className="grid md:grid-cols-2 bg-light grid-cols-1 md:gap-x-28 gap-y-4  p-10 rounded-md w-full mt-8"
      >
        <InputField
          placeholder="First name"
          label="First name"
          name="First_name"
          pattern="[A-Za-z]+"
          title="Only letters are allowed for first name"
          required
        />
        <SelectField
          placeholder="Select district"
          label="District"
          name="district"
          options={districts}
          required
        />
        <InputField
          placeholder="Last name"
          label="Last name"
          name="last_name"
          pattern="[A-Za-z]+"
          title="Only letters are allowed for last name"
          required
        />
        <SelectField
          placeholder="Select gender"
          label="Gender"
          name="gender"
          options={["male", "female"]}
          required
        />
        <InputField
          placeholder="Phone number"
          label="Phone number"
          name="contact"
          type="tel"
          pattern="^\+250\d{9}$"
          title="provide a valid Rwandan phone number of format: +250xxxxxxxxx"
          required
        />
        <InputField
          placeholder="Enter your Sector"
          label="Sector"
          name="sector"
          pattern="[A-Za-z]+"
          title="Only alphabet letters allowed for sector"
          required
        />
        <InputField
          placeholder="Email"
          label="Email"
          type="email"
          name="email"
          required
        />

        <InputField
          placeholder="Enter occupation"
          label="Occupation"
          name="occupation"
          pattern=".*\S+.*"
          title="Occupation cannot be empty or contain only spaces"
          required
        />
        <InputField type="number" placeholder="Enter Your age" label="age" name="age" required />
        <InputField
          placeholder="Describe the reason why you want to Join Scout Association"
          label="Reason"
          name="reason"
          pattern=".*\S+.*"
          title="Reason cannot be empty or contain only spaces"
          required
        />
        <div className="col-span-2 flex justify-center mt-16">
          <button
            type="submit"
            className="bg-theme px-5 py-4 rounded font-medium text-white uppercase"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
