"use client";
import InputField from "@/components/ui/Input";
import { addNewActivity } from "@/lib/actions";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import leftArrow from "@/public/leftArrow.svg";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/store/authContext";

const Page = (): ReactElement => {
  const { user }: any = useContext(AuthContext);
  const { reset } = useForm();
  return (
    <div className="p-3 w-full px-28 py-16">
      <Link href="/activity" className="mb-4 cursor-pointer">
        <Image width={40} height={40} alt="arrow" src={leftArrow} />
      </Link>
      <h1 className="font-medium text-2xl text-[#5F8D4E] underline">
        Add Activity
      </h1>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => reset()}
          className="flex text-red-500 text-lg underline mt-8 text-right"
        >
          Clear
        </button>
      </div>
      <form
        action={addNewActivity}
        className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 gap-y-4 w-full mt-8"
      >
        <InputField placeholder="Name" label="Name" name="name" />
        <InputField placeholder="Date" label="Date" type="date" name="date" />
        <InputField placeholder="Venue" label="Venue" name="venue" />
        <InputField
          placeholder="Description"
          label="description"
          name="description"
        />
        <InputField type="hidden" name="admin_id" value={user.id} />
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