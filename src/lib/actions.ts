"use server";
import { prisma } from "./db";

// interface Data {
//     email: String,
//     First_name: String,
//     last_name: String,
//     member_id:  String,
//     category:  String,
//     hasCard: boolean,
//     joined_at: String,
//     unit_name:  String,
//     district: String,
//     address: String,
//     role:  String
// }
const date = new Date()
export const addNewUser = async (formData: any) => {
  const user = await prisma.member.create({
    data: {
      email: formData.get("email"),
      First_name: formData.get("First_name"),
      last_name: formData.get("last_name"),
      member_id: formData.get("member_id"),
      category: formData.get("category"),
      hasCard: true,
      joined_at: date,
      unit_name: formData.get("unit_name"),
      district: formData.get("district"),
      address: formData.get("address"),
      role: formData.get("role"),
      contact: formData.get("contact"),
      occupation: formData.get("occupation")
    },
    include: {
      payment: true,
      activities: true,
    },
  });
};
