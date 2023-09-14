import { prisma } from "./db";
import { sendMailPromise } from "./mailer";

export async function createNewMember(formData: any) {
  const date = new Date();
  console.log(formData, "form data");
  const user = await prisma.member.create({
    data: {
      email: formData.get("email"),
      First_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      category: formData.get("category"),
      hasCard: false,
      joined_at: date,
      unit_name: formData.get("unit_name"),
      district: formData.get("district"),
      address: formData.get("address"),
      role: formData.get("role"),
      contact: formData.get("contact"),
      occupation: formData.get("occupation"),
      gender: formData.get("gender"),
      age: formData.get("age"),
    },
    include: {
      activities: true,
    },
  });
  await prisma.applicants.delete({ where: { id: Number(formData.get("id")) } });
  await sendMailPromise(
    user.email,
    "Rwanda scouts association application status",
    "Your application for membership has been accepted. Welcome to the Rwanda Scouts Association"
  );
}

export async function deleteMember(id: number) {
  await prisma.member.update({
    where: { id },
    data: {
      deactivated: true,
    },
  });
}

export async function modifyMember(formData: any) {
  const memberId = Number(formData.get("id"));
  await prisma.member.update({
    where: { id: memberId },
    data: {
      email: formData.get("email"),
      First_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      category: formData.get("category"),
      district: formData.get("district"),
      address: formData.get("address"),
      role: formData.get("role"),
      contact: formData.get("contact"),
      occupation: formData.get("occupation"),
      gender: formData.get("gender")
    },
  });
}

export async function retrieveMembers() {
  const item = await prisma.member.findMany();
  return [...item];
}
