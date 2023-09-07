"use server";
import { redirect } from "next/navigation";
import { prisma } from "./db";
import * as jose from "jose";
import { sendMailPromise } from "./mailer";
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
      // payment: true,
      activities: true,
    },
  });
  await sendMailPromise(
    user.email,
    "Rwanda scouts association application status",
    "Your application for membership has been accepted. Welcome to the Rwanda Scouts Association"
  );
  redirect("/members");
};

export const login = async (formData: any) => {
  const secret = new TextEncoder().encode("JHDKWJDEJDBWKJ");
  const username = formData.get("username");
  const password = formData.get("password");

  // Query all three tables to find the user
  const hqAdmin = await prisma.hqAdmin.findUnique({
    where: { username },
  });
  const districtManager = await prisma.districtManager.findUnique({
    where: { username },
  });
  const unitLeader = await prisma.unitLeader.findUnique({
    where: { username },
  });
  const alg = "HS256";

  if (hqAdmin) {
    // Check password for admin
    if (password === hqAdmin.password) {
      const token = await new jose.SignJWT({
        ...hqAdmin,
        districtManager: { ...districtManager },
        unitLeader: {
          ...unitLeader,
        },
      })
        .setProtectedHeader({ alg })
        .setExpirationTime("24h")
        .sign(secret);
      return { token };
    }
  }
  if (districtManager) {
    if (password === districtManager.password) {
      const token = await new jose.SignJWT({ ...districtManager })
        .setProtectedHeader({ alg })
        .setExpirationTime("24h")
        .sign(secret);
      return { token };
    }
  }
  if (unitLeader) {
    if (password === unitLeader.password) {
      const token = await new jose.SignJWT({ ...unitLeader })
        .setProtectedHeader({ alg })
        .setExpirationTime("24h")
        .sign(secret);
      return { token };
    }
  }
};

// export const addNewReport = async (formData: any) => {
//   const adminId = 1;

//   // const user = await prisma.report.create({
//   //   data: {
//   //     author: formData.get("author"),
//   //     content: formData.get("content"),
//   //     type: formData.get("type"),
//   //     created_at: new Date(),
//   //     status: "pending",
//   //     admin: {
//   //       connect: {
//   //         id: adminId,
//   //       },
//   //     },
//   //   },
//   // });
//   redirect("/reports");
// };

export const getMembers = async () => {
  const item = await prisma.member.findMany();
  return [...item];
};

export const getApplicants = async () => {
  const items = await prisma.applicants.findMany();
  return [...items];
};

// export const getReports = async () => {
//   const items = await prisma.report.findMany();
//   return [...items];
// };

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
      requeste_unit: "unit a",
    },
  });
};

export const addNewFunding = async (formData: any) => {
  const user = await prisma.donation.create({
    data: {
      title: formData.get("title"),
      paidAmount: formData.get("paid_amount"),
      about: formData.get("about"),
      target: formData.get("target"),
      created_at: new Date(),
      admin_id: Number(formData.get("admin_id")),
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

export const addNewActivity = async (formData: any) => {
  // const admin = await prisma.hqAdmin.findUnique({ where: { id: 4 }})
  // console.log(admin, 'admin')
  // if(admin) {
  try {
    const activity = await prisma.activity.create({
      data: {
        name: formData.get("name"),
        date: new Date(formData.get("date")).toISOString(),
        venue: formData.get("venue"),
        description: formData.get("description"),
        created_at: new Date(),
        admin_id: Number(formData.get("admin_id")),
      },
    });
  } catch (error) {
    console.error("The error is : ", error);
  }
  redirect("/activity");
};
// };

export const getActivities = async () => {
  const item = await prisma.activity.findMany();
  return [...item];
};

export const getUnits = async () => {
  const items = await prisma.unit.findMany();
  return [...items];
};

export const addNewHqAdmin = async (formData: any) => {
  const admin = await prisma.hqAdmin.create({
    data: {
      username: formData.get("username"),
      password: formData.get("password"),
      first_name: formData.get("firstname"),
      last_name: formData.get("lastname"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      created_at: date,
    },
  });
  await sendMailPromise(
    admin.email,
    "New HQ Admin credentials",
    `
  Your credentials for the Rwanda Scouts Association HQ Admin are:
  Username: ${admin.username}
  Password: ${admin.password}
  `
  );
  redirect("/dashboard");
};

export const addNewDistrictManager = async (formData: any) => {
  const admin = await prisma.districtManager.create({
    data: {
      username: formData.get("username"),
      password: formData.get("password"),
      first_name: formData.get("firstname"),
      last_name: formData.get("lastname"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      district: formData.get("district"),
      created_at: date,
    },
  });
  await sendMailPromise(
    admin.email,
    "New District Manager credentials",
    `
  Your credentials for the Rwanda Scouts Association District Manager are:
  Username: ${admin.username}
  Password: ${admin.password}
  `
  );
  redirect("/dashboard");
};

export const addNewUnitLeader = async (formData: any) => {
  const admin = await prisma.unitLeader.create({
    data: {
      username: formData.get("username"),
      password: formData.get("password"),
      first_name: formData.get("firstname"),
      last_name: formData.get("lastname"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      unitId: Number(formData.get("unitId")),
      district: formData.get("district"),
      created_at: date,
    },
  });
  await prisma.unit.update({
    where: {
      id: Number(formData.get("unitId")),
    },
    data: {
      unitLeaderId: admin.id,
    },
  });
  await sendMailPromise(
    admin.email,
    "New Unit leader credentials",
    `
  Your credentials for the Rwanda Scouts Association Unit leader are:
  Username: ${admin.username}
  Password: ${admin.password}
  `
  );
  redirect("/dashboard");
};

export const addNewUnit = async (formData: any) => {
  const admin = await prisma.unit.create({
    data: {
      username: formData.get("username"),
      district: formData.get("district"),
      districtManagerId: 1,
      hqAdminId: 1,
      unitLeaderId: undefined,
    },
  });
  redirect("/dashboard");
};
