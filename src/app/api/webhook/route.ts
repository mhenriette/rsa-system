import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: Response) {
  console.log("everything is working");
  try {
    const body = await req.json();

    await prisma.payments.update({
      where: { ref: body.data.ref },
      data: {
        status: body.data.status,
        processed_at: new Date(body.data.processed_at),
      },
    });
    const payment = await prisma.payments.findUnique({
      where: {
          ref: body.data.ref,
      },
    
  });
  if(payment?.donation_id && payment.status==="successful"){

    const donation = await prisma.donation.findUnique({
      where:{
        id: Number(payment.donation_id)
      },
    })    
    console.log(donation, "donationn");
    const newAmount = Number(donation?.paidAmount)+ payment.amount
    await prisma.donation.update({
      where:{
        id:donation?.id
      },
      data:{
        paidAmount:newAmount+ ""
      }
    })
    console.log(payment, "paymenttt")
console.log(newAmount , "new amount")


  }


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
