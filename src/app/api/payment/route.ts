import { NextResponse } from "next/server";
import PayPack from "../../../lib/payment"


export async function POST(req: Request, res: Response) {
  const {contact, amount, email, name, message,type, donation_id}=await req.json()
  try {
    const cashinResult:any = await PayPack.cashin({
      number: contact,
      amount: Number(amount), 
      environment: "development",
    });
    console.log(cashinResult, "result")
    return NextResponse.json({
      success: true,
      data: cashinResult.data,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: JSON.stringify(error),
    });
  }
}
