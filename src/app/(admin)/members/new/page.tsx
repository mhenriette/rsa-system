"use client";
import InputField from "@/components/ui/Input";
import SelectField from "@/components/ui/SelectField";
import { districts } from "@/data/districts";
import { AddNewMember } from "@/lib/actions";
import { ReactElement } from "react";

const page = (): ReactElement => {
  return (
    <div className="p-3 w-full px-28 py-16">
      <h1 className="font-medium text-2xl text-[#5F8D4E]">Add a Member</h1>
      <div className="flex justify-end">
        <button
          type="reset"
          form="register-form"
          className="flex text-red-500 text-lg underline mt-8 text-right"
        >
          Clear
        </button>
      </div>
      <form
        id="register-form"
        action={AddNewMember}
        className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 gap-y-4 w-full mt-8"
      >
        <InputField placeholder="First name" label="First name" name="first_name" required={true} />
        <SelectField
          placeholder="Select district"
          label="District"
          name="district"
          options={districts}
          required={true}
        />
        <InputField placeholder="Last name" label="Last name" name="last_name" required={true} />
        <SelectField
          placeholder="Select gender"
          label="Gender"
          name="gender"
          options={["male", "female"]}
          required={true}
        />
        <InputField placeholder="Location" label="Location" name="address" required={true} />
        <InputField placeholder="Enter role" label="Role" name="role" required={true} />
        <SelectField
          placeholder="Select category"
          label="Category"
          name="category"
          required={true}
          options={["Cub Scouts", "Scouts", "Companions", "Rover Scout"]}
        />
        <InputField
          placeholder="Phone number"
          label="Phone number"
          name="contact"
          required={true}
        />
        <InputField
          placeholder="Enter unit name"
          label="Unit name"
          name="unit_name"
          required={true}
        />
        <InputField placeholder="Email" label="Email" type="email" name="email" required={true} />
        <InputField
          placeholder="Enter occupation"
          label="Occupation"
          name="occupation"
          required={true}
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
