"use server";
import { prisma } from "./db";
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


export const addNewActivity = async (formData: any) => {
  const activity = await prisma.activity.create({
    data: {
      name: formData.get("name"),
      date: formData.get("date"),
      venue: formData.get("venue"),
      description: formData.get("description"),
      image: formData.get("image"),
      organizer: formData.get("organizer"),
      created_at: formData.get("created_at"),
  
      admin_id: formData.get("admin_id"),
    
    },
    include: {
      members: true,
    },
  });
};
