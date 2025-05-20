"use server";
import * as jose from "jose";
import { redirect } from "next/navigation";
import { prisma } from "./db";
import { sendMailPromise } from "./mailer";
import { createNewMember, modifyMember, retrieveMembers } from "./helpers";
const date = new Date();
export const AddNewMember = async (formData: any) => {
  await createNewMember(formData)
  redirect("/members");
};


export const deactivateMember = async (memberId:number) => {
  await deleteMember(memberId)
  redirect("/members");
}

export const updateMember = async (formData: any) => {
  await modifyMember(formData)
  redirect("/members");
};


export const login = async (formData: any) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    console.error("Username or password not provided");
    return null;
  }

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
  // const item = await prisma.member.findMany();
  // return [...item];
  return await retrieveMembers();
};
// export const getFemale = async () => {
//   const female = await prisma.member.findMany({
//     where:{
//       gender: "female"
//     }
//   })
//   return [...female]
// }
export const deleteMember = async (memberId: number) => {
  await prisma.member.delete({ where: { id: memberId } });
  redirect("/members");
};

export const getApplicants = async () => {
  const items = await prisma.applicants.findMany({where: {}});
  return [...items];
};

// export const getReports = async () => {
//   const items = await prisma.report.findMany();
//   return [...items];
// };

export const getFundings = async () => {
  const items = await prisma.donation.findMany({where: {}});
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
  await sendMailPromise(applicant.email, "Rwanda scouts association application status",
  "Your application for membership has been received. You will be contacted soon for further information");
  redirect("/")
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
  const item = await prisma.activity.findMany({where: {}});
  return [...item];
};

export const getUnits = async () => {
  const items = await prisma.unit.findMany({where: {}});
  return [...items];
};
export const getDonations =async () => {
  const donations = await prisma.donation.findMany({where: {}});
  return [...donations]
}

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
    `Your credentials for the Rwanda Scouts Association Unit leader are:
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
export const getDonaters =async () => {
  const donators = await prisma.payments.findMany({
    where:{
      status:"successful"
    }
  })
  return [...donators]
}
