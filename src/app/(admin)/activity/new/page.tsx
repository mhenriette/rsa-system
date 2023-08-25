"use client";
import InputField from "@/components/ui/Input";
import { districts } from "@/data/districts";
import { addNewUser } from "@/lib/actions";
import { ReactElement } from "react";
import SelectField from "@/components/ui/SelectField";



const page = (): ReactElement => {
  return (
    <div className="p-3 w-full px-28 py-16">
      <h1 className="font-medium text-2xl text-[#5F8D4E] underline">Add Activity</h1>
      <div className="flex justify-end">
        <button className="flex text-red-500 text-lg underline mt-8 text-right">Clear</button>
      </div>
      <form
        action={addNewUser}
         className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 gap-y-4 w-full mt-8"
      >
       
        <InputField placeholder="Event name" label="Event name" name="event_name" />
        <SelectField placeholder="choose organizer" label="Organizer" name="gender"  options={districts}/>
       
        <InputField placeholder="Enter participation link" label="Participation link" name="participation_link" />
        <SelectField
          placeholder="Enter district"
          label="District"
          name="district"
          options={districts}
        />
        <InputField placeholder="Location" label="Location" name="location" />
        <SelectField placeholder="capacity" label="maximum capacity" name="maximum_capacity" options={districts} />
        <InputField placeholder="Date" label="Date" type="date" name="date" />
        <InputField placeholder="Time" label="Time" type="time" name="time" step="900" />
        
       
      
        
        

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