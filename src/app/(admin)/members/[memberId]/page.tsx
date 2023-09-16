import InputField from "@/components/ui/Input";
import SelectField from "@/components/ui/SelectField";
import { districts } from "@/data/districts";
import { updateMember } from "@/lib/actions";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { memberId: string } }) => {
  const memberId = params.memberId;
  const memberInfo: any = await prisma.member.findUnique({
    where: {
      id: Number(memberId),
    },
  });
  console.log(memberId, memberInfo);
  if (!memberInfo) {
    redirect("/members");
    return null;
  }
  return (
    <div className="p-3 w-full px-28 py-16">
      <h1 className="font-medium text-2xl text-[#5F8D4E]">update member</h1>
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
        action={updateMember}
        className="grid md:grid-cols-2 grid-cols-1 md:gap-x-28 gap-y-4 w-full mt-8"
      >
        <input type="hidden" name="id" value={memberInfo.id} />
        <InputField
          placeholder="First name"
          label="First name"
          name="first_name"
          required={true}
          pattern="[A-Za-z]+"
          title="Only letters are allowed for first name"
          defaultValue={memberInfo.First_name}
        />
        <SelectField
          placeholder="Select district"
          label="District"
          name="district"
          options={districts}
          required={true}
          defaultValue={memberInfo.district}
        />
        <InputField
          placeholder="Last name"
          label="Last name"
          name="last_name"
          required={true}
          pattern="[A-Za-z]+"
          title="Only letters are allowed for last name"
          defaultValue={memberInfo.last_name}
        />
        <SelectField
          placeholder="Select gender"
          label="Gender"
          name="gender"
          options={["male", "female"]}
          required={true}
          defaultValue={memberInfo.gender}
        />
        <InputField
          placeholder="Location"
          label="Location"
          name="address"
          required={true}
          defaultValue={memberInfo.address}
        />
        <InputField
          placeholder="Enter role"
          label="Role"
          name="role"
          required={true}
          pattern=".*\S+.*"
          title="Role cannot be empty or contain only spaces"
          defaultValue={memberInfo.role}
        />
        <SelectField
          placeholder="Select category"
          label="Category"
          name="category"
          required={true}
          options={[
            "Squirrels",
            "Beavers",
            "Cubs",
            "scouts",
            "Explorers",
            "Network",
          ]}
          defaultValue={memberInfo.category}
        />
        <InputField
          placeholder="Phone number"
          label="Phone number"
          name="contact"
          required={true}
          type="tel"
          pattern="^\+250\d{9}$"
          title="provide a valid Rwandan phone number of format: +250xxxxxxxxx"
          defaultValue={memberInfo.contact}
        />
        {/* <InputField
          placeholder="Enter unit name"
          label="Unit name"
          name="unit_name"
          required={true}
          defaultValue={memberInfo.unit_name}
        /> */}
        <InputField
          placeholder="Email"
          label="Email"
          type="email"
          name="email"
          required={true}
          defaultValue={memberInfo.email}
        />
        <InputField
          placeholder="Enter occupation"
          label="Occupation"
          name="occupation"
          required={true}
          pattern=".*\S+.*"
          title="Occupation cannot be empty or contain only spaces"
          defaultValue={memberInfo.occupation}
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
