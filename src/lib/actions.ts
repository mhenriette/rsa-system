"use server";
import { redirect } from "next/navigation";
import { prisma } from "./db";
const date = new Date();
export const AddNewMember = async (formData: any) => {
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
    },
    include: {
      payment: true,
      activities: true,
    },
  });
  redirect("/members");
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
  redirect("/reports");
};

export const getMembers = async () => {
  const item = await prisma.member.findMany();
  return [...item];
};

export const getApplicants = async () => {
  const items = await prisma.applicants.findMany()
  return [...items]
}

export const getReports = async () => {
  const items = await prisma.report.findMany();
  return [...items];
};

export const getFundings = async () => {
  const items = await prisma.donation.findMany();
  return [...items];
};

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
      gender: formData.get("gender"),
    },
  });
};

export const addNewFunding = async (formData: any) => {
  const adminId = 1;

  const user = await prisma.donation.create({
    data: {
      about: formData.get("about"),
      target: formData.get("target"),
      created_at: new Date(),
      admin: {
        connect: {
          id: adminId,
        },
      },
    },
  });
  redirect("/donation");
};

export const getUsers = async () => {
  const users = await prisma.member.findMany({
    where: {
      hasCard: false,
    },
  });
  return [...users];
};
