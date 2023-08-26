"use server";
import { prisma } from "./db";
import { redirect } from "next/navigation";
const date = new Date()
export const addNewUser = async (formData: any) => {
  const user = await prisma.member.create({
    data: {
      email: formData.get("email"),
      First_name: formData.get("First_name"),
      last_name: formData.get("last_name"),
      member_id: formData.get("member_id"),
      category: formData.get("category"),
      hasCard: false,
      joined_at: date,
      unit_name: formData.get("unit_name"),
      district: formData.get("district"),
      address: formData.get("address"),
      role: formData.get("role"),
      contact: formData.get("contact"),
      occupation: formData.get("occupation"),
    },
    include: {
      payment: true,
      activities: true,
    },
  });
};


export const addNewReport = async (formData: any) => {
  const adminId = 1; 
  
  const user = await prisma.report.create({
    data: {
      author: formData.get("author"),
      content: formData.get("content"),
      type: formData.get("type"),
      created_at: new Date(),
      status: "pending",
      admin: {
        connect: {
          id: adminId,
        },
      },
    },
  });
  redirect("/reports")
};


 
export const getMembers = async () => {
  const item = await prisma.member.findMany()
  return [...item]
}

export const getReports = async () => {
  const items = await prisma.report.findMany()
  return [...items]
}
export const addApplicant = async (formData: any) => {
  const applicant = await prisma.applicants.create({
    data: {
      email: formData.get("email"),
      First_name: formData.get("First_name"),
      last_name: formData.get("last_name"),
      district: formData.get("district"),
      contact: formData.get("contact"),
      occupation: formData.get("occupation"),
      age: formData.get("age"),
      reason: formData.get("reason"),
      Sector: formData.get("reason"),
      joined_at: date,
      gender: formData.get("gender")
    },
  
  });
};

export const getUsers = async ()=>{
  const users = await prisma.member.findMany({
    where:{
      hasCard:false}
  })
  return [...users]
}

