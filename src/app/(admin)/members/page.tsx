"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ReactElement } from "react";

const page = (): ReactElement => {
  return (
    <div className="p-3">
    <h1 className="text-green-500 font-medium text-3xl">Add a Member</h1>
    <Link href={"/members/new"}>
      <Button>Create new member</Button>
    </Link>
  </div>
  );
};

export default page;
