import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: Response) {
  console.log("everything is working");
  try {
    console.log(req.body, "================");
    const body = await req.json();
    console.log(body, "================");
    // const payment = await prisma.payments.findUnique({
    //     where: {
    //         ref: body.data.ref,
    //     },
    // });
    // console.log(payment, '================');

    await prisma.payments.update({
      where: { ref: body.data.ref },
      data: {
        status: body.data.status,
        processed_at: new Date(body.data.processed_at),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Payment webhook received and payment updated successfully",
    });
  } catch (error:any) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: error.message
      },
      { status: 500 }
    );
  }
}
