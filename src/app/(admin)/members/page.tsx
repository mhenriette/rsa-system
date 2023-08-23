"use client";
import { addNewUser } from "@/lib/actions";
import { ReactElement } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const page = (): ReactElement => {
  return (
    <div className="p-3">
      <h1 className="text-green-500 font-medium text-3xl">Add a Member</h1>
      <form action={addNewUser} className="flex flex-col gap-5">
        <input name="email" placeholder="email" />
        <input name="First_name" placeholder="First_name" />
        <input name="last_name" placeholder="last_name" />
        <input name="member_id" placeholder="member_id" />
        <input name="category" placeholder="category" />
        <input name="hasCard" placeholder="hasCard" />
        <input name="joined_at" placeholder="joined_at" />
        <input name="unit_name" placeholder="unit_name" />
        <input name="district" placeholder="district" />
        <input name="address" placeholder="address" />
        <input name="role" placeholder="role" />
        <input name="contact" placeholder="contact" />
        <input name="occupation" placeholder="occupation" />
        <button
          type="submit"
          className="bg-purple-800 p-3 font-medium text-white"
        >
          Save User
        </button>
      </form>
    </div>
  );
};

export default page;
