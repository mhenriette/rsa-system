"use client";

import { AddNewMember } from "@/lib/actions";

export default function ApplicationRow({ applicant }: any) {
  const applicantAge = Number(applicant.age);
  const findCategory = (age: any) => {
    if (age >= 4 && age <= 6) {
      return "Squirrels";
    }
    if (age >= 8 && age <= 10) {
      return "Cubs";
    }
    if (age >= 10 && age <= 14) {
      return "Scouts";
    }
    if (age >= 15 && age <= 18) {
      return "Explorers";
    }
    if (age >= 18) return "Network";
  };

  const category = findCategory(applicantAge);
  return (
    <div className="grid grid-cols-7 leading-[21.6px] text-base text-gray-700 h-16 items-center border-b border-b-[#1B1A1A] border-opacity-10">
      <p>
        {applicant.First_name} {applicant.last_name}
      </p>
      <p>{applicant.requeste_unit}</p>
      <p>{applicant.gender}</p>
      <p>{applicant.district}</p>
      <p>{applicant.occupation}</p>
      <p>{applicant.contact}</p>
      <div className="flex gap-2">
        <form action={AddNewMember}>
          <input type="hidden" name="id" value={applicant.id} />
          <input type="hidden" name="first_name" value={applicant.First_name} />
          <input type="hidden" name="last_name" value={applicant.last_name} />
          <input type="hidden" name="email" value={applicant.email} />
          <input
            type="hidden"
            name="unit_name"
            value={applicant.requeste_unit}
          />
          <input type="hidden" name="category" value={"Explorers"} />
          <input type="hidden" name="district" value={applicant.district} />
          <input type="hidden" name="address" value={applicant.address} />
          <input type="hidden" name="role" value={"role"} />
          <input type="hidden" name="contact" value={applicant.contact} />
          <input type="hidden" name="occupation" value={applicant.occupation} />
          <input type="hidden" name="gender" value={applicant.gender} />
          <input type="hidden" name="category" value={category} />
          <button
            className="py-1 px-3 bg-green-400 text-white rounded-full"
            type="submit"
          >
            Admit
          </button>
        </form>
      </div>
    </div>
  );
}
