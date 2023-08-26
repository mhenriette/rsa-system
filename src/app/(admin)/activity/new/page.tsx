"use client";
import InputField from "@/components/ui/Input";
import { organizers } from "@/data/organizers";
import { addNewActivity } from "@/lib/actions";
import { ReactElement } from "react";
import SelectField from "@/components/ui/SelectField";
import { useForm } from 'react-hook-form';
import Link from "next/link";




const Page = (): ReactElement => {
  const { register, reset } = useForm();
  return (
    <div className="p-3 w-full px-28 py-16">
      <Link href="/activity" className="mb-4 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="27" viewBox="0 0 49 27" fill="none">
  <path d="M46.2778 4.95874H16.9799V1.86411C16.9799 0.134951 15.9727 -0.50811 14.7409 0.434164L0.939211 10.9959C-0.292593 11.9382 -0.315732 13.5202 0.887489 14.5121L14.7912 25.9698C15.9944 26.965 16.9785 26.3583 16.9785 24.6291V21.4899H46.2778C46.9998 21.4899 47.6922 21.1415 48.2027 20.5215C48.7132 19.9015 49 19.0605 49 18.1836V8.26496C49 7.3881 48.7132 6.54715 48.2027 5.92711C47.6922 5.30707 46.9998 4.95874 46.2778 4.95874Z" fill="#31373D" fill-opacity="0.65"/>
</svg>
      </Link>
      <h1 className="font-medium text-2xl text-[#5F8D4E] underline">Add Activity</h1>
      <div className="flex justify-end">
        <button type="button" onClick={() => reset()}  className="flex text-red-500 text-lg underline mt-8 text-right">Clear</button>
      </div>
      <form
        action={addNewActivity}
         className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 gap-y-4 w-full mt-8"
      >
       
        <InputField {...register("name")} placeholder="Name" label="Name" name="name" />
        <InputField {...register("date")} placeholder="Date" label="Date" type="date" name="date" />

        <InputField {...register("venue")} placeholder="Venue" label="Venue" name="venue" />
       
        <InputField {...register("description ")} placeholder="Description" label="description" name="description" />
      
            <SelectField {...register("organizer")} placeholder="Organizer" label="Organizer" name="organizer" options={organizers} />
        <InputField placeholder="Location" label="Location" name="location" />
         
      
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