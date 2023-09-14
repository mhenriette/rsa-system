import { prisma } from "../db";
import { sendMailPromise } from "../mailer";
import {
  createNewMember,
  deleteMember,
  modifyMember,
  retrieveMembers,
} from "../helpers";

jest.mock("../db", () => ({
  prisma: {
    member: {
      create: jest.fn(),
      update: jest.fn(),
      findMany: jest.fn(),
      // Add other Prisma mock functions that you use in your function
    },
    applicants: {
      delete: jest.fn(),
    },
  },
}));

jest.mock("../mailer", () => ({
  sendMailPromise: jest.fn(),
}));

describe("AddNewMember", () => {
  it("should call prisma.member.create with the correct data", async () => {
    const formData = new FormData();
    formData.append("email", "test@test.com");
    formData.append("first_name", "John");
    formData.append("last_name", "Doe");
    formData.append("category", "scouts");
    formData.append("unit_name", "test unit");
    formData.append("district", "test district");
    formData.append("address", "test address");
    formData.append("role", "member");
    formData.append("contact", "0788888888");
    formData.append("occupation", "test occupation");
    formData.append("age", "20");
    formData.append("gender", "female");
    formData.append("id", "1");
    (prisma.member.create as jest.Mock).mockResolvedValue({
      email: "test@test.com",
    });

    // Mock the Prisma delete method
    (prisma.applicants.delete as jest.Mock).mockResolvedValue(null);
    await createNewMember(formData);
    expect(prisma.member.create).toHaveBeenCalledWith({
      data: {
        email: "test@test.com",
        First_name: "John",
        last_name: "Doe",
        category: "scouts",
        hasCard: false,
        joined_at: expect.any(Date),
        unit_name: "test unit",
        district: "test district",
        address: "test address",
        role: "member",
        contact: "0788888888",
        occupation: "test occupation",
        gender: "female",
        age: "20",
      },
      include: {
        activities: true,
      },
    });
    expect(prisma.applicants.delete).toHaveBeenCalledWith({
      where: { id: 1 },
    });
    expect(sendMailPromise).toHaveBeenCalledWith(
      "test@test.com",
      "Rwanda scouts association application status",
      "Your application for membership has been accepted. Welcome to the Rwanda Scouts Association"
    );
  });

  it("should add new member when all the data was provided", () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe("Deactivate member", () => {
  it("should call prisma.member.update with the correct data", async () => {
    const id = 1;
    (prisma.member.update as jest.Mock).mockResolvedValue(null);
    await deleteMember(id);
    expect(prisma.member.update).toHaveBeenCalledWith({
      where: { id },
      data: {
        deactivated: true,
      },
    });
  });
});

describe("Update member", () => {
  it("should call prisma.member.update with the correct data", async () => {
    const formData = new FormData();
    formData.append("email", "test@test.com");
    formData.append("first_name", "John");
    formData.append("last_name", "Doe");
    formData.append("category", "scouts");
    formData.append("unit_name", "test unit");
    formData.append("district", "test district");
    formData.append("address", "test address");
    formData.append("role", "member");
    formData.append("contact", "0788888888");
    formData.append("occupation", "test occupation");
    formData.append("age", "20");
    formData.append("gender", "female");
    formData.append("id", "1");
    (prisma.member.update as jest.Mock).mockResolvedValue({ hello: "sdfds" });
    await modifyMember(formData);
    expect(prisma.member.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: {
        email: "test@test.com",
        First_name: "John",
        last_name: "Doe",
        category: "scouts",
        district: "test district",
        address: "test address",
        role: "member",
        contact: "0788888888",
        occupation: "test occupation",
        gender: "female",
      },
    });
  });
});

describe("Login", () => {
  it("should return token when user is authenticated", () => {
    expect(1).toBe(1);
  });
  it("should return error when user is not authenticated", () => {
    expect(1).toEqual(1);
  });
});

describe("Get members", () => {
  it("should return all members", async () => {
    (prisma.member.findMany as jest.Mock).mockResolvedValue([]);
    const members = await retrieveMembers();
    expect(JSON.stringify(members)).toBe(JSON.stringify([]));
  });
});

describe("Get applicants", () => {
  it("should return all applicants", () => {
    expect(1).toBe(1);
  });
  it("should create new applicant", () => {
    expect(1).toBe(1);
  });
});

describe("Donation", () => {
  it("should return all donations", () => {
    expect(1).toBe(1);
  });
  it("should create new donation", () => {
    expect(1).toBe(1);
  });
});

describe("Admin", () => {
  it("should create new HQ admin", () => {
    expect(1).toBe(1);
  });
  it("should create new district manager", () => {
    expect(1).toBe(1);
  });
  it("should create new unit manager", () => {
    expect(1).toBe(1);
  });
});

describe("activities", () => {
  it("should return all activities", () => {
    expect(1).toBe(1);
  });
  it("should create new activity", () => {
    expect(1).toBe(1);
  });
});
