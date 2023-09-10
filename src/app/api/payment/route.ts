import { NextResponse } from "next/server";
import PayPack from "../../../lib/payment"
import { prisma } from "@/lib/db";


export async function POST(req: Request, res: Response) {
  const {contact, amount, email, name, message,type, donation_id}=await req.json()
  try {
    const cashinResult:any = await PayPack.cashin({
      number: contact,
      amount: Number(amount), 
      environment: "development",
    });
    const payment = await prisma.payments.create({
      data:{
      name,
        email,
        contact,
        amount,
        message,
        type,
        donation_id,
        status:"pending",
        ref: cashinResult.data.ref,
        created_at: cashinResult.data.created_at,
        processed_at: cashinResult.data.created_at

      }
    })
    
    return NextResponse.json({
      success: true,
      data: cashinResult.data,
    });
  } catch (error) {
    console.log(error, "errorr");
    
    return NextResponse.json({
      success: false,
      message: JSON.stringify(error),
    });
  }
}
