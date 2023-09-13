import { prisma } from "@/lib/db";
import {NextResponse} from "next/server"
export async function GET(req:Request,res:Response) {
    const data = await prisma.member.findMany(); 
    try{
    return NextResponse.json({
        success: true, 
        data: data
    })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Error occurred"
        })
    }
       
}


