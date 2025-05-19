// '/api/data'
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(req: Request, res: Response) {
  try {
    console.log(prisma)
    const data = await prisma.applicants.getMany()
    // console.log(data, "data");
    return NextResponse.json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error("api error:", error);
    return NextResponse.json({
      success: false,
      message: "Error occurred",
    });
  }
}
